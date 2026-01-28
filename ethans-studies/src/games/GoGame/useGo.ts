import { ref } from 'vue';

export type StoneColor = 'black' | 'white';
export type Intersection = StoneColor | null;

export function useGo(size: number = 19) {
    const board = ref<Intersection[]>(Array(size * size).fill(null));
    const turn = ref<StoneColor>('black');
    const captures = ref({ black: 0, white: 0 });
    const history = ref<string[]>([]); // To check for Ko rule
    const lastMove = ref<number | null>(null);

    const initBoard = () => {
        board.value = Array(size * size).fill(null);
        turn.value = 'black';
        captures.value = { black: 0, white: 0 };
        history.value = [];
        lastMove.value = null;
    };

    const getIndex = (row: number, col: number) => {
        if (row < 0 || row >= size || col < 0 || col >= size) return -1;
        return row * size + col;
    };

    const getCoords = (index: number) => {
        return { row: Math.floor(index / size), col: index % size };
    };

    const getNeighbors = (index: number) => {
        const { row, col } = getCoords(index);
        return [
            getIndex(row - 1, col),
            getIndex(row + 1, col),
            getIndex(row, col - 1),
            getIndex(row, col + 1)
        ].filter(idx => idx !== -1);
    };

    const getGroup = (index: number, color: StoneColor, currentBoard: Intersection[]) => {
        const group = new Set<number>();
        const queue = [index];
        group.add(index);

        while (queue.length > 0) {
            const curr = queue.shift()!;
            const neighbors = getNeighbors(curr);
            for (const neighbor of neighbors) {
                if (currentBoard[neighbor] === color && !group.has(neighbor)) {
                    group.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return Array.from(group);
    };

    const countLiberties = (group: number[], currentBoard: Intersection[]) => {
        const liberties = new Set<number>();
        for (const idx of group) {
            const neighbors = getNeighbors(idx);
            for (const neighbor of neighbors) {
                if (currentBoard[neighbor] === null) {
                    liberties.add(neighbor);
                }
            }
        }
        return liberties.size;
    };

    const placeStone = (index: number) => {
        if (board.value[index] !== null) return false;

        const color = turn.value;
        const opponentColor = color === 'black' ? 'white' : 'black';
        const tempBoard = [...board.value];
        tempBoard[index] = color;

        // 1. Check if we capture opponent stones
        let capturedAny = false;
        const neighbors = getNeighbors(index);
        const stonesToRemove: number[] = [];

        for (const neighbor of neighbors) {
            if (tempBoard[neighbor] === opponentColor) {
                const group = getGroup(neighbor, opponentColor, tempBoard);
                if (countLiberties(group, tempBoard) === 0) {
                    stonesToRemove.push(...group);
                    capturedAny = true;
                }
            }
        }

        // Apply captures
        for (const idx of stonesToRemove) {
            tempBoard[idx] = null;
        }

        // 2. Suicide Check: If no liberties and no captures, move is illegal
        const ownGroup = getGroup(index, color, tempBoard);
        if (countLiberties(ownGroup, tempBoard) === 0 && !capturedAny) {
            return false;
        }

        // 3. Ko Rule Check
        const boardString = JSON.stringify(tempBoard);
        if (history.value.includes(boardString)) {
            return false; // Move repeats a previous board state
        }

        // Commit move
        board.value = tempBoard;
        if (stonesToRemove.length > 0) {
            captures.value[color] += stonesToRemove.length;
        }

        history.value.push(boardString);
        // Limit history to save memory
        if (history.value.length > 200) history.value.shift();

        lastMove.value = index;
        turn.value = opponentColor;
        return true;
    };

    const passTurn = () => {
        const opponentColor = turn.value === 'black' ? 'white' : 'black';
        turn.value = opponentColor;
        lastMove.value = null;
        // Two consecutive passes usually ends the game in real Go
        // For this simple version, we'll just alternate turns
    };

    return {
        board,
        turn,
        captures,
        lastMove,
        initBoard,
        placeStone,
        passTurn,
        getCoords
    };
}

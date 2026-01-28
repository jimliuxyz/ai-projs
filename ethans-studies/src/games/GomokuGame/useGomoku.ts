import { ref } from 'vue';

export type StoneColor = 'black' | 'white';
export type Intersection = StoneColor | null;

export function useGomoku(size: number = 15) {
    const board = ref<Intersection[]>(Array(size * size).fill(null));
    const turn = ref<StoneColor>('black');
    const winner = ref<StoneColor | null>(null);
    const lastMove = ref<number | null>(null);

    const initBoard = () => {
        board.value = Array(size * size).fill(null);
        turn.value = 'black';
        winner.value = null;
        lastMove.value = null;
    };

    const checkWin = (index: number, color: StoneColor): boolean => {
        const row = Math.floor(index / size);
        const col = index % size;

        const directions = [
            [0, 1],  // horizontal
            [1, 0],  // vertical
            [1, 1],  // diagonal
            [1, -1]  // anti-diagonal
        ];

        for (const [dr, dc] of directions) {
            let count = 1;

            // Check in positive direction
            for (let i = 1; i < 5; i++) {
                const r = row + dr * i;
                const c = col + dc * i;
                if (r >= 0 && r < size && c >= 0 && c < size && board.value[r * size + c] === color) {
                    count++;
                } else break;
            }

            // Check in negative direction
            for (let i = 1; i < 5; i++) {
                const r = row - dr * i;
                const c = col - dc * i;
                if (r >= 0 && r < size && c >= 0 && c < size && board.value[r * size + c] === color) {
                    count++;
                } else break;
            }

            if (count >= 5) return true;
        }
        return false;
    };

    const placeStone = (index: number) => {
        if (board.value[index] !== null || winner.value) return false;

        const color = turn.value;
        board.value[index] = color;
        lastMove.value = index;

        if (checkWin(index, color)) {
            winner.value = color;
        } else {
            turn.value = color === 'black' ? 'white' : 'black';
        }
        return true;
    };

    return {
        board,
        turn,
        winner,
        lastMove,
        initBoard,
        placeStone
    };
}

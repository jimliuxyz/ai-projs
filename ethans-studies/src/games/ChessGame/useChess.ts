import { ref, computed } from 'vue';

export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';
export type GameStatus = 'playing' | 'checkmate' | 'stalemate';

export interface Piece {
    type: PieceType;
    color: PieceColor;
}

export interface Square {
    row: number;
    col: number;
    piece: Piece | null;
}

export function useChess() {
    const board = ref<Square[]>([]);
    const selectedSquare = ref<Square | null>(null);
    const turn = ref<PieceColor>('white');
    const captureHistory = ref<Piece[]>([]);
    const gameStatus = ref<GameStatus>('playing');
    const winner = ref<PieceColor | null>(null);

    const initBoard = () => {
        const newBoard: Square[] = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                newBoard.push({ row, col, piece: getInitialPiece(row, col) });
            }
        }
        board.value = newBoard;
        selectedSquare.value = null;
        turn.value = 'white';
        captureHistory.value = [];
        gameStatus.value = 'playing';
        winner.value = null;
    };

    const getInitialPiece = (row: number, col: number): Piece | null => {
        const color = row < 2 ? 'black' : row > 5 ? 'white' : null;
        if (!color) return null;
        if (row === 1 || row === 6) return { type: 'pawn', color };
        const typeMap: Record<number, PieceType> = {
            0: 'rook', 7: 'rook',
            1: 'knight', 6: 'knight',
            2: 'bishop', 5: 'bishop',
            3: 'queen', 4: 'king'
        };
        return { type: typeMap[col], color };
    };

    // RAW moves calculation (without King safety check)
    const calculateRawMoves = (square: Square, currentBoard: Square[]): Square[] => {
        const piece = square.piece;
        if (!piece) return [];
        const moves: Square[] = [];
        const { row, col } = square;

        const getTempSquare = (r: number, c: number) => {
            if (r < 0 || r > 7 || c < 0 || c > 7) return null;
            return currentBoard[r * 8 + c];
        };

        const addMove = (r: number, c: number) => {
            const target = getTempSquare(r, c);
            if (!target) return false;
            if (!target.piece) {
                moves.push(target);
                return true;
            } else if (target.piece.color !== piece.color) {
                moves.push(target);
                return false;
            }
            return false;
        };

        if (piece.type === 'pawn') {
            const dir = piece.color === 'white' ? -1 : 1;
            const startRow = piece.color === 'white' ? 6 : 1;
            const f1 = getTempSquare(row + dir, col);
            if (f1 && !f1.piece) {
                moves.push(f1);
                if (row === startRow) {
                    const f2 = getTempSquare(row + dir * 2, col);
                    if (f2 && !f2.piece) moves.push(f2);
                }
            }
            [-1, 1].forEach(dCol => {
                const target = getTempSquare(row + dir, col + dCol);
                if (target && target.piece && target.piece.color !== piece.color) {
                    moves.push(target);
                }
            });
        } else if (piece.type === 'rook' || piece.type === 'queen') {
            [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach(([dr, dc]) => {
                for (let i = 1; i < 8; i++) {
                    const r = row + dr * i, c = col + dc * i;
                    const res = addMove(r, c);
                    if (!res) break;
                }
            });
        }
        if (piece.type === 'bishop' || piece.type === 'queen') {
            [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([dr, dc]) => {
                for (let i = 1; i < 8; i++) {
                    const r = row + dr * i, c = col + dc * i;
                    const res = addMove(r, c);
                    if (!res) break;
                }
            });
        }
        if (piece.type === 'knight') {
            [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]].forEach(([dr, dc]) => addMove(row + dr, col + dc));
        }
        if (piece.type === 'king') {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    addMove(row + dr, col + dc);
                }
            }
        }
        return moves;
    };

    /**
     * Helper to check if a square is attacked by opponent
     * @param targetSq The square to check for attack
     * @param opponentColor Color of the attacker
     * @param currentBoard Current state of the board
     */
    const isAttacked = (targetSq: Square, opponentColor: PieceColor, currentBoard: Square[]): boolean => {
        return currentBoard.some((s: Square) => {
            if (s.piece?.color === opponentColor) {
                const moves = calculateRawMoves(s, currentBoard);
                return moves.some((m: Square) => m.row === targetSq.row && m.col === targetSq.col);
            }
            return false;
        });
    };

    const isCheck = (color: PieceColor, currentBoard = board.value): boolean => {
        const kingSq = currentBoard.find((s: Square) => s.piece?.type === 'king' && s.piece.color === color);
        if (!kingSq) return false;
        const opponentColor = color === 'white' ? 'black' : 'white';
        return isAttacked(kingSq, opponentColor, currentBoard);
    };

    /**
     * Checks if a move results in the player's own king being in check
     * Creates a virtual board simulation to avoid reactive mutations
     */
    const wouldBeInCheck = (from: Square, to: Square): boolean => {
        const color = from.piece!.color;

        // Create a plain object mapping for the virtual board to avoid reactivity overhead
        // and recursive updates during move simulation
        const virtualBoard = board.value.map(s => ({ ...s }));
        const virtualFrom = virtualBoard[from.row * 8 + from.col];
        const virtualTo = virtualBoard[to.row * 8 + to.col];

        // Simulate
        virtualTo.piece = virtualFrom.piece;
        virtualFrom.piece = null;

        return isCheck(color, virtualBoard);
    };

    const calculateLegalMoves = (square: Square): Square[] => {
        const rawMoves = calculateRawMoves(square, board.value);
        return rawMoves.filter(targetSq => !wouldBeInCheck(square, targetSq));
    };

    const validMoves = computed(() => {
        if (!selectedSquare.value || !selectedSquare.value.piece || gameStatus.value !== 'playing') return [];
        return calculateLegalMoves(selectedSquare.value);
    });

    const checkGameOver = () => {
        const currentColor = turn.value;
        const hasAnyLegalMove = board.value.some((s: Square) => {
            if (s.piece?.color === currentColor) {
                return calculateLegalMoves(s).length > 0;
            }
            return false;
        });

        if (!hasAnyLegalMove) {
            if (isCheck(currentColor)) {
                gameStatus.value = 'checkmate';
                winner.value = currentColor === 'white' ? 'black' : 'white';
            } else {
                gameStatus.value = 'stalemate';
            }
        }
    };

    const handleSquareClick = (square: Square) => {
        if (gameStatus.value !== 'playing') return;

        if (selectedSquare.value === square) {
            selectedSquare.value = null;
            return;
        }

        if (selectedSquare.value && validMoves.value.includes(square)) {
            movePiece(selectedSquare.value, square);
            return;
        }

        if (square.piece && square.piece.color === turn.value) {
            selectedSquare.value = square;
        } else {
            selectedSquare.value = null;
        }
    };

    const movePiece = (from: Square, to: Square) => {
        if (!from.piece) return;

        if (to.piece) {
            captureHistory.value.push(to.piece);
        }

        to.piece = from.piece;
        from.piece = null;

        // Auto Pawn Promotion
        if (to.piece.type === 'pawn') {
            if ((to.piece.color === 'white' && to.row === 0) || (to.piece.color === 'black' && to.row === 7)) {
                to.piece.type = 'queen';
            }
        }

        selectedSquare.value = null;
        turn.value = turn.value === 'white' ? 'black' : 'white';
        checkGameOver();
    };

    return {
        board,
        selectedSquare,
        validMoves,
        turn,
        captureHistory,
        gameStatus,
        winner,
        isCheck: () => isCheck(turn.value),
        initBoard,
        handleSquareClick
    };
}


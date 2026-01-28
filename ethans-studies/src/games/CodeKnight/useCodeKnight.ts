import { ref } from 'vue';

export type CharacterType = 'knight' | 'robot';

export type KnightCommand = {
    action: 'move' | 'attack' | 'pickup' | 'throw';
    direction: 'up' | 'down' | 'left' | 'right';
    steps?: number;
};

export type EntityType = 'bug-green' | 'bug-blue' | 'rock' | 'water' | 'tree' | 'box';

export interface Entity {
    id: string;
    type: EntityType;
    x: number;
    y: number;
}

export interface Player {
    x: number;
    y: number;
    character: CharacterType;
    holding: EntityType | null;
}

export interface AnimationState {
    type: 'attack' | 'throw' | null;
    direction: 'up' | 'down' | 'left' | 'right' | null;
    x: number;
    y: number;
}

export function useCodeKnight(callbacks?: {
    onWin?: () => void,
    onHitObstacle?: () => void
}) {
    const gridSize = 10;
    const player = ref<Player>({ x: 0, y: 0, character: 'knight', holding: null });
    const entities = ref<Entity[]>([]);
    const message = ref('Waiting for command...');
    const animation = ref<AnimationState>({ type: null, direction: null, x: 0, y: 0 });

    const setCharacter = (char: CharacterType) => {
        player.value.character = char;
    };

    // Generate connected obstacle patterns
    const generateRiver = (entities: Entity[], startX: number, startY: number, length: number) => {
        let x = startX, y = startY;
        for (let i = 0; i < length; i++) {
            if (x >= 0 && x < gridSize && y >= 0 && y < gridSize && !(x === 0 && y === 0)) {
                entities.push({ id: `water-${i}`, type: 'water', x, y });
            }
            // River flows horizontally or vertically
            if (Math.random() > 0.5) x++;
            else y++;
        }
    };

    const generateForest = (entities: Entity[], centerX: number, centerY: number) => {
        const offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];
        offsets.forEach(([dx, dy], i) => {
            const x = centerX + dx;
            const y = centerY + dy;
            if (x >= 0 && x < gridSize && y >= 0 && y < gridSize && !(x === 0 && y === 0)) {
                if (Math.random() > 0.3) {
                    entities.push({ id: `tree-${centerX}-${centerY}-${i}`, type: 'tree', x, y });
                }
            }
        });
    };

    const initLevel = () => {
        const newEntities: Entity[] = [];

        // Add Bugs strategically
        newEntities.push({ id: 'bug1', type: 'bug-green', x: 7, y: 3 });
        newEntities.push({ id: 'bug2', type: 'bug-blue', x: 3, y: 8 });
        newEntities.push({ id: 'bug3', type: 'bug-green', x: 8, y: 7 });

        // Generate a river
        generateRiver(newEntities, 2, 0, 6);

        // Generate a forest cluster
        generateForest(newEntities, 6, 5);

        // Add some rocks as barriers
        const rockPositions = [[4, 2], [5, 2], [2, 5], [2, 6]];
        rockPositions.forEach(([x, y], i) => {
            if (!newEntities.some(e => e.x === x && e.y === y)) {
                newEntities.push({ id: `rock-${i}`, type: 'rock', x, y });
            }
        });

        // Add boxes that can be picked up
        newEntities.push({ id: 'box1', type: 'box', x: 1, y: 2 });
        newEntities.push({ id: 'box2', type: 'box', x: 5, y: 8 });

        entities.value = newEntities;
        player.value = { x: 0, y: 0, character: player.value.character, holding: null };
    };

    const isWalkable = (x: number, y: number) => {
        if (x < 0 || x >= gridSize || y < 0 || y >= gridSize) return false;
        return !entities.value.some(e => e.x === x && e.y === y &&
            (['rock', 'tree', 'water'].includes(e.type) || e.type.startsWith('bug')));
    };

    const processCommand = (text: string) => {
        message.value = `Heard: "${text}"`;
        const cmd = parseCommand(text);
        if (cmd) {
            executeCommand(cmd);
        } else {
            message.value = `Sorry, I didn't understand "${text}"`;
        }
    };

    const parseCommand = (text: string): KnightCommand | null => {
        const lower = text.toLowerCase().trim();
        const words = lower.split(/\s+/);

        // Helper: Standalone word matching
        const hasWord = (wordList: string[]) => {
            return wordList.some(target => words.includes(target));
        };

        // Helper: Extract direction
        const getDirection = (): 'up' | 'down' | 'left' | 'right' | null => {
            if (hasWord(['up', 'top', 'north', 'above', 'op', 'app'])) return 'up';
            if (hasWord(['down', 'bottom', 'south', 'below', 'don', 'town', 'dan'])) return 'down';
            if (hasWord(['left', 'west', 'lef', 'let'])) return 'left';
            if (hasWord(['right', 'east', 'rite', 'write', 'wright'])) return 'right';
            return null;
        };

        // Helper: Extract number
        const getNumber = (): number => {
            const numWords: Record<string, number> = {
                'zero': 0, 'oh': 0, 'one': 1, 'won': 1, 'wan': 1, 'two': 2, 'to': 2, 'too': 2, 'tu': 2,
                'three': 3, 'tree': 3, 'free': 3, 'four': 4, 'for': 4, 'fore': 4, 'five': 5, 'fife': 5,
                'six': 6, 'sex': 6, 'sicks': 6, 'seven': 7, 'heaven': 7, 'eight': 8, 'ate': 8, 'ait': 8,
                'nine': 9, 'nein': 9, 'ten': 10, 'tin': 10
            };
            for (const w of words) {
                if (numWords[w] !== undefined) return numWords[w];
            }
            const digitMatch = lower.match(/\d+/);
            return digitMatch ? parseInt(digitMatch[0]) : 1;
        };

        // 1. Check for PICKUP first (Priority)
        // If they say "pick up", "grab", "take", "get", "pick" - it's a pickup
        if (hasWord(['pickup', 'grab', 'take', 'get', 'pick'])) {
            return { action: 'pickup', direction: 'up' };
        }

        const direction = getDirection();
        if (!direction) return null;

        // 2. Check for THROW
        if (hasWord(['throw', 'toss', 'chuck', 'hurl', 'fro'])) {
            return { action: 'throw', direction };
        }

        // 3. Check for ATTACK
        if (hasWord(['attack', 'atack', 'atak', 'strike', 'hit', 'kill', 'fight'])) {
            return { action: 'attack', direction };
        }

        // 4. Fallback to MOVE
        return { action: 'move', direction, steps: getNumber() };
    };

    const executeCommand = async (cmd: KnightCommand) => {
        let { x, y } = player.value;
        const dx = cmd.direction === 'left' ? -1 : cmd.direction === 'right' ? 1 : 0;
        const dy = cmd.direction === 'up' ? -1 : cmd.direction === 'down' ? 1 : 0;

        if (cmd.action === 'pickup') {
            const boxIndex = entities.value.findIndex(e => e.x === x && e.y === y && e.type === 'box');
            if (boxIndex !== -1 && !player.value.holding) {
                player.value.holding = 'box';
                entities.value.splice(boxIndex, 1);
                message.value = "Picked up a box!";
            } else if (player.value.holding) {
                message.value = "Already holding something!";
            } else {
                message.value = "Nothing to pick up here.";
            }
            return;
        }

        if (cmd.action === 'throw') {
            if (!player.value.holding) {
                message.value = "Not holding anything to throw!";
                return;
            }
            const tx = x + dx;
            const ty = y + dy;

            animation.value = { type: 'throw', direction: cmd.direction, x, y };
            message.value = `Throwing ${cmd.direction}...`;
            await new Promise(r => setTimeout(r, 600));
            animation.value = { type: null, direction: null, x: 0, y: 0 };

            const bugIndex = entities.value.findIndex(e => e.x === tx && e.y === ty && e.type.startsWith('bug'));
            if (bugIndex !== -1) {
                const bug = entities.value[bugIndex];
                message.value = `Boom! Threw box at ${bug.type}!`;
                entities.value.splice(bugIndex, 1);
                player.value.holding = null;
                callbacks?.onWin?.();
            } else if (tx >= 0 && tx < gridSize && ty >= 0 && ty < gridSize &&
                !entities.value.some(e => e.x === tx && e.y === ty)) {
                entities.value.push({ id: `box-thrown-${Date.now()}`, type: 'box', x: tx, y: ty });
                player.value.holding = null;
                message.value = "Box thrown!";
            } else {
                message.value = "Can't throw there!";
            }
            return;
        }

        if (cmd.action === 'attack') {
            const tx = x + dx;
            const ty = y + dy;

            animation.value = { type: 'attack', direction: cmd.direction, x, y };
            message.value = `Attacking ${cmd.direction}...`;
            await new Promise(r => setTimeout(r, 500));
            animation.value = { type: null, direction: null, x: 0, y: 0 };

            const bugIndex = entities.value.findIndex(e => e.x === tx && e.y === ty && e.type.startsWith('bug'));
            if (bugIndex !== -1) {
                const bug = entities.value[bugIndex];
                message.value = `Bravo! Defeated the ${bug.type}!`;
                entities.value.splice(bugIndex, 1);
                callbacks?.onWin?.();

                // Move into the defeated bug's position
                if (isWalkable(tx, ty)) {
                    player.value.x = tx;
                    player.value.y = ty;
                }
            } else {
                const hitObs = entities.value.some(e => e.x === tx && e.y === ty && ['rock', 'tree', 'water'].includes(e.type));
                if (hitObs) {
                    message.value = "Clang! Hit an obstacle.";
                    callbacks?.onHitObstacle?.();
                } else {
                    message.value = "Missed!";
                }
            }
            return;
        }

        // Move command
        const steps = cmd.steps || 1;
        for (let i = 0; i < steps; i++) {
            const nextX = x + dx;
            const nextY = y + dy;

            if (isWalkable(nextX, nextY)) {
                x = nextX;
                y = nextY;
                player.value.x = x;
                player.value.y = y;
                await new Promise(r => setTimeout(r, 200));
            } else {
                message.value = "Blocked!";
                callbacks?.onHitObstacle?.();
                break;
            }
        }
    };

    return {
        gridSize,
        player,
        entities,
        message,
        animation,
        initLevel,
        processCommand,
        setCharacter
    };
}

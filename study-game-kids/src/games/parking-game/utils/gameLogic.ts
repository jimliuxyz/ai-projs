export interface LogicSpot {
    char: string;
    occupied: boolean;
    x?: number;
    z?: number;
    winnerTeam?: string | null;
}

export interface LogicCar {
    team: string;
    isParking: boolean;
    targetSpot: LogicSpot | null;
}

export function findTargetSpot(
    carChar: string,
    carTeam: string,
    spots: LogicSpot[],
    cars: LogicCar[],
    unlockedIndex: number
): { spot: LogicSpot, isUnlock: boolean } | null {
    for (let i = 0; i <= unlockedIndex && i < spots.length; i++) {
        const spot = spots[i];
        if (spot.char !== carChar) continue;
        if (spot.occupied) continue;
        const alreadyTargetedByTeam = cars.some(other =>
            other.team === carTeam &&
            other.isParking &&
            other.targetSpot === spot
        );
        if (alreadyTargetedByTeam) continue;
        return {
            spot,
            isUnlock: i === unlockedIndex
        };
    }
    return null;
}

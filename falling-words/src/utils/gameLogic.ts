export interface LogicSpot {
    char: string;
    occupied: boolean;
}

export interface LogicCar {
    team: string;
    isParking: boolean;
    targetSpot: LogicSpot | null;
}

/**
 * Finds a valid target spot for a car based on continuous answering rules.
 * - Current progress is tracked by `unlockedIndex`.
 * - Cars can target any empty valid spot from index 0 to `unlockedIndex` (inclusive).
 * - Returns the spot and whether this target acts as an "unlock" (advances the frontier).
 */
export function findTargetSpot(
    carChar: string,
    carTeam: string,
    spots: LogicSpot[],
    cars: LogicCar[],
    unlockedIndex: number
): { spot: LogicSpot, isUnlock: boolean } | null {
    // Iterate through all "unlocked" scope (0 to unlockedIndex inclusive)
    for (let i = 0; i <= unlockedIndex && i < spots.length; i++) {
        const spot = spots[i];

        // 1. Basic Match: Char must match
        if (spot.char !== carChar) continue;

        // 2. Availability: Must not be occupied
        if (spot.occupied) continue;

        // 3. Team Constraint: One car per team per spot
        const alreadyTargetedByTeam = cars.some(other =>
            other.team === carTeam &&
            other.isParking &&
            other.targetSpot === spot
        );
        if (alreadyTargetedByTeam) continue;

        // Found a valid target!
        // If we matched the exact current frontier, this implies we can advance the progress.
        return {
            spot,
            isUnlock: i === unlockedIndex
        };
    }
    return null;
}

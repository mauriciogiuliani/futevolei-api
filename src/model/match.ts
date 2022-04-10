import { Team } from "./team";

export interface Match {
    teamA: Team;
    teamB: Team;
    pointsTeamA?: number;
    pointsTeamB?: number;
}

// export class Match implements Match {
    
// }
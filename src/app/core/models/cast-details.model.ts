export interface CastMemberDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null; // ISO date string or null
  deathday: string | null; // ISO date string or null
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

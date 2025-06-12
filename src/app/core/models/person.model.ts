import { MediaType } from './media-type.model';

export interface Person {
  id: number;
  name: string;
  original_name: string;
  media_type: MediaType;
  adult: boolean;
  popularity: number;
  gender: Gender;
  known_for_department: string; // e.g., "Sound", "Acting"
  profile_path: string | null;
}

export enum Gender {
  FEMALE,
  MALE,
  NOT_SPECIFIED,
}

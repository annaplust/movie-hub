import { CastMemberDetails } from '@core/models/cast-details.model';

export namespace MockCastMemberDetails {
  export const getPerson = (): CastMemberDetails => {
    return {
      adult: false,
      also_known_as: ['John Doe', 'Johnny'],
      biography:
        'This is a sample biography of the cast member. It provides background information and career highlights.',
      birthday: '1975-06-15',
      deathday: null,
      gender: 2,
      homepage: 'https://www.johndoe.com',
      id: 12345,
      imdb_id: 'nm1234567',
      known_for_department: 'Acting',
      name: 'John Doe',
      place_of_birth: 'Los Angeles, California, USA',
      popularity: 7.8,
      profile_path: '/profile-path.jpg',
    };
  };
}

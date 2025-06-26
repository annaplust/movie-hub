const fs = require('fs');
const path = './src/environments/environment.prod.ts';

const file = `
export const environment = {
  production: true,
  api: {
    key: '${process.env.API_KEY}',
    token: '${process.env.ACCESS_TOKEN}',
    url: 'https://api.themoviedb.org/3',
  },
};
`;

fs.writeFileSync(path, file);
console.log('✅ Environment file generated');

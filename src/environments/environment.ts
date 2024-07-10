import packageJson from '../../package.json';

export const environment = {
  version: packageJson?.version,
  apiUrl: 'http://localhost:5037/api',
};

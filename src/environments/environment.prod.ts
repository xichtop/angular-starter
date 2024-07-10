import packageJson from '../../package.json';

export const environment = {
  version: packageJson?.version,
  apiUrl: 'http://api.blogic.app/api',
};

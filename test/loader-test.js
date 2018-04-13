/* eslint no-console: 0 */

const packageJSON = require('../package.json');

const app = process.env.app || 'cellihealth';
// const buildNumber = process.env.build_number || 1;
const version = process.env.version || packageJSON.version;
const isProduction = process.env.mode === 'production' || false;
// const layout = process.env.layout || 'default';

console.log([
  '\n',
  '================================================\n',
  'UNIT TEST \n',
  '------------------------------------------------\n',
  `APP      : ${app}\n`,
  `VERSION  : ${version}\n`,
  'MODE     : ',
  (isProduction ? 'PRODUCTION' : 'STAGING'),
  '\n',
  '================================================\n\n\n',
].join(''));

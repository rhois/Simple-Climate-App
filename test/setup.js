/* eslint import/no-extraneous-dependencies: 0, no-underscore-dangle: 0 */
require('babel-register')();
require('isomorphic-fetch');

const chai = require('chai');
const sinon = require('sinon');
const m = require('module');
const jsdom = require('jsdom').jsdom;

const originalLoader = m._load;

global.document = jsdom('');
global.window = global.document.defaultView;
global.expect = chai.expect;
global.sinon = sinon;
global.navigator = {
  userAgent: 'node.js',
};

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
copyProps(global.document.defaultView, global);

m._load = function hookedLoader(request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return { uri: request };
  }

  return originalLoader(request, parent, isMain);
};

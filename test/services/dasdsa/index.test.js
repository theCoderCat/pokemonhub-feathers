'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('dasdsa service', () => {
  it('registered the dasdsas service', () => {
    assert.ok(app.service('dasdsas'));
  });
});

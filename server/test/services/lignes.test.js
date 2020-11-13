const assert = require('assert');
const app = require('../../src/app');

describe('\'lignes\' service', () => {
  it('registered the service', () => {
    const service = app.service('lignes');

    assert.ok(service, 'Registered the service');
  });
});

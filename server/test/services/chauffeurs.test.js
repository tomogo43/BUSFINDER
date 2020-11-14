const assert = require('assert');
const app = require('../../src/app');

describe('\'Chauffeurs\' service', () => {
  it('registered the service', () => {
    const service = app.service('chauffeurs');

    assert.ok(service, 'Registered the service');
  });
});

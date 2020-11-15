const assert = require('assert');
const app = require('../../src/app');

describe('\'trajets\' service', () => {
  it('registered the service', () => {
    const service = app.service('trajets');

    assert.ok(service, 'Registered the service');
  });
});

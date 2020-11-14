const app = require('../../src/app');

describe('\'casas\' service', () => {
  it('registered the service', () => {
    const service = app.service('casas');
    expect(service).toBeTruthy();
  });
});

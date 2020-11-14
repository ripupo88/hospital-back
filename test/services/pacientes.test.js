const app = require('../../src/app');

describe('\'pacientes\' service', () => {
  it('registered the service', () => {
    const service = app.service('pacientes');
    expect(service).toBeTruthy();
  });
});

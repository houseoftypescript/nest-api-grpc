import environments from '../environments';

describe('environments', () => {
  it('get environment variable', () => {
    expect(environments.environment).toEqual('test');
    expect(environments.port).toEqual('3000');
  });
});

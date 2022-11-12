import { handler } from './index';

describe('lambda.handler', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('exists', () => {
    expect(handler).toBeTruthy();
  });
});

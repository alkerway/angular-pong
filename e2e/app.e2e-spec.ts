import { PongPage } from './app.po';

describe('pong App', () => {
  let page: PongPage;

  beforeEach(() => {
    page = new PongPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

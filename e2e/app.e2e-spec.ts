import { StarPage } from './app.po';

describe('star App', function() {
  let page: StarPage;

  beforeEach(() => {
    page = new StarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

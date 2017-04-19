import { SmallPayPage } from './app.po';

describe('small-pay App', function() {
  let page: SmallPayPage;

  beforeEach(() => {
    page = new SmallPayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { App0Page } from './app.po';

describe('app0 App', function() {
  let page: App0Page;

  beforeEach(() => {
    page = new App0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

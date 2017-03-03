import { CarmenPage } from './app.po';

describe('carmen App', () => {
  let page: CarmenPage;

  beforeEach(() => {
    page = new CarmenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

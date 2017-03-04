import { WhattoPage } from './app.po';

describe('whatto App', () => {
  let page: WhattoPage;

  beforeEach(() => {
    page = new WhattoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Vehicles2Page } from './app.po';

describe('vehicles2 App', () => {
  let page: Vehicles2Page;

  beforeEach(() => {
    page = new Vehicles2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { GarageGamingPage } from './app.po';

describe('garage-gaming App', () => {
  let page: GarageGamingPage;

  beforeEach(() => {
    page = new GarageGamingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { MovieListPage } from './app.po';

describe('movie-list App', function() {
  let page: MovieListPage;

  beforeEach(() => {
    page = new MovieListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ml works!');
  });
});

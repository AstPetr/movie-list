import { browser, element, by } from 'protractor';

export class MovieListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ml-root h1')).getText();
  }
}

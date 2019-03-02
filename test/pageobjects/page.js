
export default class Page {
  open (path) {
    browser.url(path)
  }
  isElementVisible (element) {
      element.waitForVisible(1000);
      return element.isVisible();
  }
}

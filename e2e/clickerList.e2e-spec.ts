// import {browser, by, element, ElementFinder} from "protractor";
//
// let clickerField: ElementFinder = element(by.css(".text-input"));
// let addButton: ElementFinder = element.all(by.className("button-outline")).first();
// let removeButton: ElementFinder = element.all(by.css(".button-outline-md-danger")).first();
// let firstClicker: ElementFinder = element.all(by.tagName("clicker-button")).first().element(by.tagName("button"));
//
// describe("ClickerList", () => {
//
//   beforeEach(() => {
//     browser.get("");
//   });
//
//   it("should switch into clickers page from menu", () => {
//     element(by.css(".bar-button-menutoggle")).click();
//     expect<any>(element.all(by.css(".toolbar-title")).last().getText()).toEqual("Clickers");
//   });
//
//   it("has an input box for new Clickers", () => {
//     expect<any>(element(by.css(".text-input")).isPresent()).toEqual(true);
//   });
//
//   it("should add a Clicker", () => {
//     "test clicker one".split("").forEach((c) => clickerField.sendKeys(c));
//     addButton.click();
//     browser.driver.sleep(1000);
//     expect<any>(firstClicker.getText()).toEqual("TEST CLICKER ONE (0)");
//   });
//
//   it("should click a Clicker", () => {
//     firstClicker.click();
//     browser.driver.sleep(1000);
//     expect<any>(firstClicker.getText()).toEqual("TEST CLICKER ONE (1)");
//   });
//
//   it("should delete a Clicker", () => {
//     removeButton.click();
//     browser.driver.sleep(1000);
//     element.all(by.className("clickerList")).count()
//       .then((count) => expect<any>(count).toEqual(0));
//   });
// });

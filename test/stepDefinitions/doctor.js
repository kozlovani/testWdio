import doctor from '../pageobjects/doctor.page';
const {Given, Then, When} = require('cucumber');
const expect = require('chai').expect;
const {URL} = require('url');
Given(/^Открыта страница сайта "([^"]*)"$/, function (pathName) {
    doctor.open();
    expect(new URL(browser.getUrl()).pathname).to.equals(pathName);
});
Then(/^Отображается кнопка "([^"]*)"$/, function (buttonName) {
    expect(doctor.scheduleButton.isVisible()).to.equals(true);
});
Then(/^Заголовок кнопки "([^"]*)" содержит текст "([^"]*)"$/, function (buttonPatternName, buttonName) {
    expect(buttonName).to.equals(doctor.scheduleButton.getText())
});
When(/^Нажимаем на кнопку "([^"]*)"$/, function (buttonName) {
    doctor.scheduleButtonSibmit();
});
Then(/^Отображается элемент "([^"]*)"$/, function (arg1) {
    expect(doctor.isFilterListVisible()).to.equals(true);
});
Then(/^Помечен галочкой пункт "([^"]*)" в выпадающем списке "([^"]*)"$/, function (filterName, arg2) {
    expect(filterName).to.equals(doctor.selectedElementInFilterList.getText())
});
When(/^Нажимаем на пункт "([^"]*)" в выпадающем списке "([^"]*)"$/, function (arg1, arg2) {
    doctor.selectTomorrowInFilterList();
});
Then(/^Отображаются врачи, работающие в выбранный день$/, function () {
    expect(JSON.stringify(doctor.getDoctorListFromPage())==JSON.stringify(doctor.getDoctorListFromWindow())).to.equals(true, "Список врачей отличается от списка doctorList")
});

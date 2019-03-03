import Page from './page'

class docdoc extends Page {
    /**
     * define elements
     */
    get url () { return '/doctor'};
    get scheduleButton () { return $('button[data-ga-label="calendar"]') }
    get filterList () { return $('div[data-test-id="date_select_items"]') }
    get selectedElementInFilterList () { return $('.select-box__options-item-active-icon + span') }
    get tomorrowInFiletrList () {return $('//span[contains(., "Завтра")]/parent::button')}
    get doctorListFromPage () {return $$('//div[@class="doctor-card-name"]/a[contains(@data-test-id,"doctor_list_item")]')}
    /*et doctorListFromWindow () { return browser.execute(function() {
        return window['doctorList']
    }).value}*/
        /**
     * define or overwrite page methods
     */
    open () {
        super.open(this.url);
        browser.pause(1000);
    }

    scheduleButtonSibmit () {
        this.scheduleButton.click()
    }

    isFilterListVisible() {
        return super.isElementVisible(this.filterList)
    }
    selectTomorrowInFilterList () {
        this.tomorrowInFiletrList.click()
    }
    getDoctorListFromPage () {
        const doctorNameList = this.doctorListFromPage.map(function(e) {
            return e.getText();
        });
        return doctorNameList;
    }
    getDoctorListFromWindow () {
        browser.waitForVisible('body', 20000);
        browser.pause(1000);
        var result = browser.execute(function() {
            return window['doctorList'].map(function(e) {
                return e.data;
            }).map(function(e) {
                return e.doctor;
            }).map(function(e) {
                return e.name;
            });
        }).value;
        return result;
        //return browser.window()
        //return this.doctorListFromWindow

    }
}

export default new docdoc()
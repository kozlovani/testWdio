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

}

export default new docdoc()
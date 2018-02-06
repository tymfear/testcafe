import {Selector} from 'testcafe';

export class DashboardPage {
    private t: TestController;
    private sidebar = Selector('#apnav');

    constructor(t: TestController) {
        this.t = t;
    }

    async isDisplayed(): Promise<boolean> {
        return await this.sidebar.exists;
    }
}

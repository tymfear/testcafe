import {Selector} from 'testcafe';
import {DashboardPage} from './DashboardPage';

export class HomePage {
    private t: TestController;
    private signInLink = Selector('.sign-in-box');
    private usernameField = Selector('[name="LoginUserName"]');
    private passwordField = Selector('[name="LoginPassword"]');
    private signInButton = Selector('.head-loginb');

    constructor(t: TestController) {
        this.t = t;
    }

    static async visit(t: TestController): Promise<HomePage> {
        await t.navigateTo(`https://sandbox.namecheap.com`);

        return new HomePage(t);
    }

    async signIn(username: string, password: string): Promise<DashboardPage> {
        await this.t
            .hover(this.signInLink)
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
            .click(this.signInButton);

        return new DashboardPage(this.t);
    }
}

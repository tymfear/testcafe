import {Selector} from 'testcafe';

export class HomePage {
    private t: TestController;
    private signInLink =  Selector('.sign-in-box');
    private usernameField =  Selector('[name="LoginUserName"]');
    private passwordField =  Selector('[name="LoginPassword"]');
    private signInButton =  Selector('.head-loginb');

    constructor(t: TestController) {
        this.t = t;
    }

    static async visit(t: TestController) {
        await t.navigateTo(`https://sandbox.namecheap.com`);

        return new HomePage(t);
    }

    async signIn(username: string, password: string) {
        await this.t
            .hover(this.signInLink)
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
            .click(this.signInButton)

    }
}

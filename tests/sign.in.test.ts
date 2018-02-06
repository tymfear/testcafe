import {HomePage} from '../pages/HomePage';
import secureData  = require('../secure.data')

fixture `Sign In`;

test('Valid Sign In', async (t: TestController) => {
    const homePage = await HomePage.visit(t);

    const dashboardPage = await homePage.signIn(secureData.username, secureData.password);
    await t.expect(await dashboardPage.isDisplayed()).ok('Dashboard page did not appear');
});

test('Invalid Sign In with wrong password', async (t: TestController) => {
    const homePage = await HomePage.visit(t);

    const dashboardPage = await homePage.signIn(secureData.username, 'secureData.password');
    await t.expect(await dashboardPage.isDisplayed()).ok('Dashboard page did not appear');
});

test('Invalid Sign In with non-existing user', async (t: TestController) => {
    const homePage = await HomePage.visit(t);

    const dashboardPage = await homePage.signIn('secureData.username', secureData.password);
    await t.expect(await dashboardPage.isDisplayed()).ok('Dashboard page did not appear');
});

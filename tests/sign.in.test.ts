import {HomePage} from '../pages/HomePage';
import secureData  = require('../secure.data')

fixture`Sign In`;

test('Valid Sign In', async (t: TestController) => {
    const homePage = await HomePage.visit(t);

    await homePage.signIn(secureData.username, secureData.password);
});

test('Invalid Sign In with wrong password', async (t: TestController) => {
    const homePage = await HomePage.visit(t);

    await homePage.signIn(secureData.username, 'secureData.password');
});

test('Invalid Sign In with non-existing user', async (t: TestController) => {
    const homePage = await HomePage.visit(t);

    await homePage.signIn('secureData.username', secureData.password);
});

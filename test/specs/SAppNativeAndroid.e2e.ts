import ChooseConnAndroid from "../../pageObjects/chooseConnAndroid";
import EulaAndroid from "../../pageObjects/eulaAndroid";
import LoginNavBarAndroid from "../../pageObjects/loginNavBarAndroid";
import LoginNavBarOptionsAndroid from "../../pageObjects/loginNavBarOptionsAndroid";
import Login from "../../pageObjects/login";
import LoginOauth from "../../pageObjects/loginOauth";
import NavTabBarAndroid from "../../pageObjects/navTabBarAndroid";

describe('Test HelloWord Sample App', () => {
    it('testLoadPage', async () => {
        const Eula = await utam.load(EulaAndroid);
        await Eula.accept();

        const loginNavBar = await utam.load(LoginNavBarAndroid);
        await loginNavBar.chooseConnOption();

        const options = await utam.load(LoginNavBarOptionsAndroid);
        await options.changeServer();
    
        const chooseConn = await utam.load(ChooseConnAndroid);
        await chooseConn.switchConnection('Sandbox');
        await sleep(20000);
        utam.setBridgeAppTitle('Login | Salesforce');
        const login = await utam.load(Login);
        await login.login('q3platformauto@cs46.com', 'test1234');

        utam.setBridgeAppTitle('Allow Access? | Salesforce');
        const oauthAllow = await utam.load(LoginOauth);
        await oauthAllow.clickAllow();

        const tabBar = await utam.load(NavTabBarAndroid);
        await tabBar.openMenuSection();
    
        await sleep(20000);
        console.log("Yay!");
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

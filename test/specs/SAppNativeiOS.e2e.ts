import ChooseConniOS from "../../pageObjects/chooseConniOS";
import LoginNavBariOS from "../../pageObjects/loginNavBariOS";
import ChoosConniOS from "../../pageObjects/chooseConniOS";
import EulaiOS from "../../pageObjects/eulaiOS";
import Login from "../../pageObjects/login";
import LoginOauth from "../../pageObjects/loginOauth";
import NavTabBariOS from "../../pageObjects/navTabBariOS";

describe('Test HelloWord Sample App', () => {
    it('testLogin', async () => {
        const Eula = await utam.load(EulaiOS);
        await Eula.accept();

        const loginNavBar = await utam.load(LoginNavBariOS);
        await loginNavBar.chooseConnOption();
        
        const choosConn = await utam.load(ChoosConniOS);
        await choosConn.switchConnection('Sandbox');
    
        utam.setBridgeAppTitle('Login | Salesforce');
        const login = await utam.load(Login);
        await sleep(10000);
        await login.login('q3platformauto@cs46.com', 'test1234');

        await sleep(10000);
        utam.setBridgeAppTitle('Allow Access? | Salesforce');
        const oauthAllow = await utam.load(LoginOauth);
        await sleep(10000);
        await oauthAllow.clickAllow();

        const tabBar = await utam.load(NavTabBariOS);
        await tabBar.openMenuSection();

        await sleep(20000);
        console.log("Yay!");
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

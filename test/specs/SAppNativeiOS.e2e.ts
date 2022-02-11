import ChooseConniOS from "../../pageObjects/chooseConniOS";
import LoginNavBariOS from "../../pageObjects/loginNavBariOS";
import ChoosConniOS from "../../pageObjects/chooseConniOS";
import EulaiOS from "../../pageObjects/eulaiOS";
import Login from "../../pageObjects/login"

describe('Test HelloWord Sample App', () => {
    it('testLoadPage', async () => {
        const Eula = await utam.load(EulaiOS);
        await Eula.accept();

        const loginNavBar = await utam.load(LoginNavBariOS);
        await loginNavBar.chooseConnOption();
        
        const choosConn = await utam.load(ChoosConniOS);
        await choosConn.switchConnection('Sandbox');

        const login = await utam.load(Login);
        await login.getPassword();

        //console.log("Test is completed: " + iaccept);
        await sleep(10000);
        console.log("Yay!");
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

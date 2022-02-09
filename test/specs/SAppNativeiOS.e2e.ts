import ChooseConniOS from "../../pageObjects/chooseConniOS";
import EulaiOS from "../../pageObjects/eulaiOS";
import Login from "../../pageObjects/login";

describe('Test HelloWord Sample App', () => {
    it('testLoadPage', async () => {
        const Eula = await utam.load(EulaiOS);
        await Eula.accept();

        //const ChooseConn = await utam.load(ChooseConniOS);
        //ChooseConn.addNewConnection();

        const login = await utam.load(Login);
        await login.isPresent()

        //console.log("Test is completed: " + iaccept);
        await sleep(10000);
        console.log("Yay!");
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
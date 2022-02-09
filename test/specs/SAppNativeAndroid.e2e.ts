import ChooseConnAndroid from "../../pageObjects/chooseConnAndroid";
import EulaAndroid from "../../pageObjects/eulaAndroid";

describe('Test HelloWord Sample App', () => {
    it('testLoadPage', async () => {
        const Eula = await utam.load(EulaAndroid);
        await Eula.accept();

        const ChooseConn = await utam.load(ChooseConnAndroid);
        await ChooseConn.addNewConnection();

        //console.log("Test is completed: " + iaccept);
        await sleep(10000);
        console.log("Yay!");
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
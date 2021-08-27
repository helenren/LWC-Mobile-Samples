import { isExportDeclaration } from "typescript";
import HelloWorld from "../../pageObjects/helloWord";

describe('Test HelloWord Sample App', () => {
    it('testLoadPage', async () => {
        //Load the page and wait it visible
        const HelloWorldPage = await utam.load(HelloWorld);
        HelloWorldPage.waitForVisible();

        // Verify the page title
        const title = await HelloWorldPage.getTitle();
        expect(title).toContain("c-hello-world");

        // Verify the welcome message
        const message = await HelloWorldPage.getContent();
        expect(message).toContain("Hello Astro");
        
        //Click go back button from page
        HelloWorldPage.clickButton("Go Back");

        console.log("Test is completed!");
        await sleep(10000);
        console.log("Yay!");
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
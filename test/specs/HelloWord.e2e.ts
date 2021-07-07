import HelloWorld from "../../pageObjects/helloWord";

describe('Test HelloWord Sample App', () => {
    it('testLoadPage', async () => {
        //Load the page and wait it visible
        const HelloWorldPage = await utam.load(HelloWorld);
        HelloWorldPage.waitForVisible();

        // Verify the welcome message
        const message = await HelloWorldPage.getInnerText();
        expect(message).toContain("Hello Astro");
        
        //Click go back button from page
        HelloWorldPage.clickButton("Go Back");
    })
})
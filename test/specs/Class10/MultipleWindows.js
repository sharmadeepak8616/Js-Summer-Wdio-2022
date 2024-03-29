const { expect } = require("chai");

describe('Multiple Windows', () => {

    /**
     * To close the window browser is connected with
     * function: closeWindow()
     */

    /**
     * To get the windowHandle stored in browser-object
     * function: getWindowHandle()
     */

    /**
     * To get the windowHandle of ALL windows opened aue to automation
     * function: getWindowHandles()
     */

    /**
     * To switch handle in browser
     * function: switchToWindow
     *      input: handle
     */
    it('Verify Instagram launched in new window', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Verify Instagram opened in a new window
         *      verify there are 2 windows
         *      verify one title is Facebook – log in or sign up
         *      verify one title is Instagram
         */
        // 1. Launch facebook.com
        const launchUrl = 'https://www.facebook.com/';
        await browser.url(launchUrl);

        // 2. Click on Instagram
        await $('=Instagram').click();

        const allHandles = await browser.getWindowHandles();
        expect(allHandles.length, 'Instagram should have opened a new window').to.equal(2);

        const fbTitle = await browser.getTitle();
        const expFbTitle = 'Facebook – log in or sign up';
        // expect(fbTitle.localeCompare(expFbTitle) === 0, 'Facebook page is not seen').to.be.true;
        expect(fbTitle, 'Facebook page is not seen').to.equal(expFbTitle);

        const fbHandle = await browser.getWindowHandle();   // h1

        for (const handle of allHandles) {        // allHandles = [h1, h2]
            if (handle != fbHandle) {
                await browser.switchToWindow(handle);
            }
        }
        const instagramTitle = await browser.getTitle();
        const expInstagramTitle = 'Instagram'
        // expect(instagramTitle.localeCompare(expInstagramTitle) === 0, 'Instagram page is not seen').to.be.true;
        expect(instagramTitle, 'Instagram page is not seen').to.equal(expInstagramTitle);

    })

    it('Close all windows except Facebook Pay', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Click on Portal
         * 4. Click on Oculus
         * 5. Click on Facebook Pay
         * 6. Close all pages except Facebook Pay page
         */
        await browser.url('/');
        await $('=Instagram').click();
        await $('=Portal').click();
        await $('=Oculus').click();
        await $('=Facebook Pay').click();

        titleContains = 'Meta Pay';

        const allHandles = await browser.getWindowHandles();

        for (handle of allHandles) {
            await browser.switchToWindow(handle);
            const pageTitle = await browser.getTitle();
            if (!pageTitle.includes(titleContains)) {
                await browser.closeWindow();
            }
        }

        await browser.pause(5000);

        const allHandles2 = ['h1', 'h2', 'h3' , 'h4' , 'h5'];

        for (let i = 0 ; i < allHandles2.length ; i++) {
            await browser.switchToWindow(allHandles2[i]);
            const pageTitle = await browser.getTitle();
            if (!pageTitle.includes(titleContains)) {
                await browser.closeWindow();
            }
        }



    });

    /**
     *  allHandles = [h1, h2, h3, h4, h5]
     *  connect with Oculus
     * 
     *  h1
     *  connect browser with h1
     *  if (h1.title() === 'Oculus') {
     *      break
     *  }
     * 
     *  h2
     *  connect browser with h2
     *  if (h2.title() === 'Oculus') {
     *      break
     *  }
     * 
     *  h3
     *  connect browser with h3
     *  if (h3.title() === 'Oculus') {
     *      break
     *  }
     * 
     *  now browser with Oculus
     * 
     *  browser.closeWindow()
     * 
     *  allHandles = [h1, h2, h4, h5]
     */


});
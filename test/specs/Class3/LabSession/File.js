describe('Practice', () => {
    it('Verify Temp Values', async () => {
        // await browser.url('https://www.darksky.net');
        // const feelsLikeTemp = await $('span[class=feels-like-text]').getText();                 // 22˚
        // const lowTemp =  await $('span[class=low-temp-text]').getText();                        // 18˚
        // const highTemp = await $('span[class=high-temp-text]').getText();                       // 27˚

        /**
         * 22˚(String) (using substring) -> 22(String) -> 22(Number)
         * 18˚(String) -> 18(String) -> 18(Number)
         * 27˚(String) -> 27(String) -> 27(Number)
         */

        /**
         * 22˚(String) (using substring) -> 22(String)
         *
         * 
         */

        // expect(lowTemp <= feelsLikeTemp && highTemp >= feelsLikeTemp,
        //     'feelsLikeTemp is NOT in between the low and high temp').to.be.true;
        // await browser.pause(5000);
    });

    it('Verify Church Chair heading is displayed', async () => {
        /**
         * 1. Launch https://classroomessentialsonline.com/
         * 2. Click on Church Chairs options
         * 3. Verify Church Chairs heading is displayed
         * 
         */
        await browser.url('https://www.classroomessentialsonline.com/');
        await browser.pause(2000)
        // const webElement = $('a[href=/church-chairs/]').click();    //  $('tagName[attrName=attrValue]');
        const webElement = $('=CHURCH CHAIRS').click();    //  $('tagName[attrName=attrValue]');
        await browser.pause(5000)
        const heading = $('<h1>');
        const isHeadingDisplayed = heading.isDisplayed();   // isHeadingDisplayed
        expect(isHeadingDisplayed, 'Church Chairs heading is NOT displayed').to.be.true;
        expect(actChurchChairsHeading.toUppercase(), 'Church Chairs heading is NOT as expected').to.equal('chURCh chAIrS'.toUppercase());


        const actChurchChairsHeading = heading.getText();
        const isHeadingAsExpected = actChurchChairsHeading.toUppercase().localCompare('chURCh chAIrS'.toUppercase()) === 0;
        expect(isHeadingAsExpected && isHeadingDisplayed, 'Church Chairs heading is NOT displayed as expected').to.be.true;

        await browser.pause(5000);

    });

    it('Verify link if user submits empty login form', async () => {
        /**
         * Launch facebook.com
         * Click Log In button
         * Verify "link -> Find your account and log in." is displayed
         */
        await browser.url('https://www.facebook.com/')
        //   //button[@name='login']
        const loginButton = await $('button[name=login]').click();
        //   //a[contains(text(),'Find your account')]
        const findAcctLink = await $('a*=Find your account').isDisplayed();
        expect(findAcctLink, 'Link is NOT displayed').to.be.true
    });



});
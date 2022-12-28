
// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */

/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 * 
 */
describe('Hotels search', () => {
    it.only('Verify destination and check-in/check-out dates are selected', async () => {
        // Verify destination and check-in/ and check-out dates are as user selected
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        await browser.pause(6000);
        //2. Type "man" in destination
        await $("//button[@aria-label='Going to']").click();
        //goingToButton.click();
        await browser.pause(3000);
        await $('#destination_form_field').setValue('hawa');
        await browser.pause(3000);
        // 3. Select "Manila" from auto-suggestion
        const autoSuggestions = await $$("//div[@class = 'truncate']//strong");
        for (const selectManila of autoSuggestions) {
            const suggestionText = await selectManila.getText();
            if (suggestionText.toLowerCase().localeCompare('hawaii'.toLowerCase()) === 0) {
                await selectManila.click();
                break;
            }
        }
        // 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
        await $('#date_form_field-btn').click();
        await browser.pause(3000);
        const allSeptDates = await $$('//h2[text()="October 2022"]/following-sibling::table//button[not(@disabled)]');
            for (const dateSelected of allSeptDates){
                const date = await dateSelected.getAttribute('data-day');
                if(date.localeCompare('5') === 0){
                    await dateSelected.click();
                    break;
                }
            }
        await browser.pause(3000);
        const allSeptDates2 = await $$('//h2[text()="October 2022"]/following-sibling::table//button[not(@disabled)]');
            for (const dateSelected of allSeptDates2){
                const date = await dateSelected.getAttribute('data-day');
                if(date.localeCompare('20') === 0){
                    await dateSelected.click();
                    break;
                }
            }
        await browser.pause(3000);
        await $('//button[@data-stid="apply-date-picker"]').click();
        await browser.pause(3000);
        // 5. Click Search button
        await $('//button[@id="submit_button"]').click();
        // 6. Verify destination has Manila
        // const locationCheck = await $('//button[@data-stid= "hotels-destination-menu-trigger"]').getText();
        expect(locationCheck.includes('Hawaii'), 'Location is NOT as expected').to.be.true;
        console.log(`\n\n${locationCheck}\n\n`);
        // 7. Verify check-in date in Sep-5
        const checkInDate = await $('#hotels-check-in-btn').getText();
        console.log(`\n\n${checkInDate}\n\n`);
        // 8. Verify check-out date in Sep-20
        const checkOutDate = await $('#hotels-check-out-btn').getText();
        console.log(`\n\n${checkOutDate}\n\n`);
    });
});
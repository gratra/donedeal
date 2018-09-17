const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

const homePage = client.page.homePage();
const commercialResultPage = client.page.commercialResultPage();

Given(/^I open donedeal website$/, () => {
  return homePage
    .navigate();
   
})

Then(/^the homepage is displayed$/, () => {
  return client.assert.title("DoneDeal.ie - Ireland's biggest classifieds site");
})

When(/^I enter (.*?) in the search box$/, (searchText) => {
    return homePage.enterSearchText(searchText); 
  })

  When(/^click on search button$/, () => {
    return homePage.clickSearchButton(); 
  })

  Then(/^commercial search page should be displayed$/, () => {
    return client.assert.title("commercial: All Sections For Sale in Ireland - DoneDeal.ie");
  })

  When(/^I select (.*?) from location list$/, (locationName) => {
    return commercialResultPage
    .clickLocationDropDown()
    .selectLocationCheckBox(locationName)
    .clickCloseLocation();

  })

  When(/^price range (.*?) and (.*?)$/, (minRange,maxRange) => {
    return commercialResultPage
    .enterMinPrice(minRange)
    .enterMaxPrice(maxRange);

  })

  Then(/^result page should be diplayed$/, () => {
    commercialResultPage.waitForPageLoad();
    return client.assert.title("commercial: All Sections For Sale in Leinster - DoneDeal.ie");
  })

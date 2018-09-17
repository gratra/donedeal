const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

const homePage = client.page.homePage();

When(/^I click on login link from homepage$/, () => {
    return homePage.clickLoginLink(); 
  })

Then(/^login popup should be displayed$/, () => {
    client.pause(8000);
    return homePage.validateLoginModal(); 
      
  })

  When(/^enter email id (.*?)$/, (emailId) => {
    return homePage.enterEmailId(emailId); 
  })

  When(/^enter password (.*?)$/, (password) => {
    return homePage.enterPassword(password); 
  })

  When(/^click on login button$/, () => {
    return homePage.clickLoginButton(); 
  })

  Then(/^I should be logged in successfully$/, () => {
    return homePage.validateUserLoggedIn(); 
  })
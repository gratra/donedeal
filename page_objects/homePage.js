const homePageCommands = {
    validateHomePage: function(){
        return this.waitForElementVisible('@homePageTitle',1000)
        .getText();
    },
    enterSearchText: function(searchText){
        return this.setValue('@searchTextBox',searchText)
    },
    clickSearchButton: function(){
        return this.click('@searchButton');
    },
    clickLoginLink: function(){
        return this.waitForElementVisible('@loginLink',4000)
        .click('@loginLink');
    },
    validateLoginModal: function(){
        return this.assert.elementPresent('@loginModal')
    },
    enterEmailId: function(emailID){
        return this.waitForElementVisible('@emailTextBox',3000)
        .setValue('@emailTextBox',emailID)
    },
    enterPassword: function(password){
        return this.waitForElementVisible('@passwordTextBox',3000)
        .setValue('@passwordTextBox',password)
    },
    clickLoginButton: function(){
        return this.waitForElementVisible('@loginButton',3000)
        .click('@loginButton')
    },
    validateUserLoggedIn: function(){
        return this.waitForElementVisible('@loggedInMenu',3000)
        .assert.elementPresent('@loggedInMenu')
    }
  };
  
  module.exports = {
    commands: [homePageCommands],
    url: function() {
      return this.api.launchUrl;
    },
    elements: {
        homePageTitle: {
            selector: '//title',
            locateStrategy: 'xpath'
          },
          searchTextBox: {
              selector: "input.search-hero-bar-input.search-hero-bar-input-modal"
          },
          searchButton: {
              selector: "button.btn.search-hero-bar-btn.hide-for-small-only.trackable"
          },
          loginLink: {
              selector: "//a[@title='Log in']",
              locateStrategy: "xpath"
          },
          loginModal: {
              selector: "div.modal-wrapper"
          },
          emailTextBox: {
              selector: "input#email"
          },
          passwordTextBox: {
              selector: "input#password"
          },
          loginButton: {
              selector: "button#loginButton"
          },
          loggedInMenu: {
              selector: "//span[@ng-show='loggedIn']",
              locateStrategy: "xpath"
          }
    }
  };
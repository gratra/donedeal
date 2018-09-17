const commercialResultPageCommands = {
    clickLocationDropDown: function(){
        return this.click('@locationDropDown')
    },
    selectLocationCheckBox: function(locationName){
        if(locationName == "Leinster"){
            return this.waitForElementVisible('@leinnsterCheckBox',5000)
            .click('@leinnsterCheckBox');
        }
    },
    clickCloseLocation: function(){
        return this.waitForElementVisible('@closeLocation',3000)
        .click('@closeLocation');
    },
    enterMinPrice: function(minRange){
        return this.waitForElementVisible('@priceMinTextBox',8000)
        .setValue('@priceMinTextBox',minRange);
    },
    enterMaxPrice: function(maxRange){
        return this.waitForElementVisible('@priceMaxTextBox',8000)
        .setValue('@priceMaxTextBox',maxRange);
    },
    waitForPageLoad: function(){
        return this.waitForElementVisible('@pageload',3000);
    }
  };
  
  module.exports = {
    commands: [commercialResultPageCommands],
    url: function() {
      return this.api.launchUrl;
    },
    elements: {
          locationDropDown: {
              selector: "button.btn.input-btn.pseudo-dropdown-btn.popout-trigger"
          },
          leinnsterCheckBox: {
              selector: "//span[@class='ng-binding highlight']",
              locateStrategy: 'xpath'
          },
          closeLocation: {
            selector: "a.icon.icon-close"
          },
          priceMinTextBox:  {
              selector: "(//input[@type='tel'])[1]",
              locateStrategy: "xpath"
          },
          priceMaxTextBox:  {
            selector: "(//input[@type='tel'])[2]",
            locateStrategy: "xpath"
        },
        pageload: {
            selector: "//strong[@ng-bind='search.locationText']",
            locateStrategy: "xpath"
        }
    }
  };
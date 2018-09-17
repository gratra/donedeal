This basic automation framework is created by using Nightwatch,Cucumber,Selenium,Javascript.
NIghtwatch: containing wrapper for selnium and assertions.
Cucumber and gherkin parser for feature file,BDD format and then creating snippets
Examples /Scenario outline used to test against different variations of data.
Javascript as programing language to code the BDD 
Used page object model and reporting .
The Feature folder contains all the stepdefinitions -js files containing code
Support folder contains the scenarios/tests in BDD format for each page as feature files
Page_objects folder contains identifiers for every element and objects functions making it
easier for any chnages in identifiers to be replaced only at one place
Reporting is created in a html format.

To start :
Please run npm install
command to run test: npm run e2e-test -- --env chrome
command to run report: npm run e2e-report




The same tests can also be created with java using maven,testng,cucumber ,selenium etc
in a same page object model where java class can be created for each page and using pagefactory ,baseclass,utilties ,loadproperties, etc. 

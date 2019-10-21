# Cypress
JavaScript automation framework


Using Chrome Developer tools I loaded and searched Rocketmiles.com in order to extract the API's used to create the following tests. 

I have created a small set of API tests to validate the search functionality of Rocketmiles.com works.
For me to be satisfied that I have tested it effectively I would like to have
- A test for each input set in the search url to validate results are returned for the proper inputs sent
- Same tests run against the API, UI, Mobile Web and Desktop Web, not just for the API layer.

Be aware there are no UI tests other than some base setup tests to facilitate deeper testing but most test coverage was accomplished by API testing.

This code that runs validates the positive routes for the baseInputs, an alternate inputCurrency, an alternate roomQty, and an alernate guestQty.

This code takes a but run so please be patient. 
My last execution of this code took 647.71 seconds to run or around 11 mins.

Enjoy!


This repo is hosted on and must be retrieved with the command 'git'.
To install the git framework on your machine, follow the instructions for your machines operating system at the following link.
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git


Homework assignment rocketmiles.com

To install:
 - open terminal or command prompt
 - create a new directory named chrisRhoadsProject
 - change directory to the new directory named chrisRhoadsProject
 - type 
"git clone https://github.com/crhoads1024/Cypress.git"
 
 - type 
 "npm i"
 
  
To run:
 - change diretory to 'Cypress' git project folder
 - type "npm i cypress"
 - type 
 "npm test"
 - From the Cypress test runner you can run the integration test file by clicking individually or click "Run all specs"
 


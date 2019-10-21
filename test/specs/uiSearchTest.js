// User Interface Target Site: Rocketmiles.com
// Search Function
// Positive Tests
// Negative Tests

// In my opinion this should be enough to select one of the options at random, The code should be self explanatory :).

//  // get the dropdown element
//  const select  = document.getElementsByClassName('url-dropdown');

//  // fetch all options within the dropdown
//  const options = select.children;  

//  // generate a random number between 0 and the total amount of options
//  // the number will always be an index within the bounds of the array (options) 
//  const random  = Math.floor(Math.random() * options.length);

//  // set the value of the dropdown to a random option
//  select.value = options[random].value; 
const { floor }  = Math;
const { random } = Math;
const today      = new Date();
const date       = `${today.getMonth()
  + 1}%2F${today.getDate()}%2F${today.getFullYear()}`;
const dateEnd    = `${today.getMonth()
    + 1}%2F${today.getDate() + 2}%2F${today.getFullYear()}`;
const time       = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime   = `${date} ${time}`;

const responseCheckOut  =  `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate() +2}`;
const responseCheckIn   = `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`;
const topDestList       = [];
const rewardProgramList = [];


const currencyList      = [];     
const langList          = [];
const checkIn           = date 
const checkOut          = dateEnd;


 const randInputCurr    = currencyList[floor(random() * currencyList.length)];
// const randTestRewProg  = rewardProgramList[floor(random() * randTestRewProg.length)];
// const randTestLang     = langList[floor(random() * langList.length)];
// const randTestDest     = topDestList[floor(random() * topDestList.length)];
 
// const randTestCheckIn  = checkIn[floor(random() * checkIn.length)];
// const randTestCheckOut = checkOut[floor(random() * checkOut.length)];

function guestPicker() {
    const guestOpt = ['1','2','3','4','5'];
    const randGuestQty = guestOpt[floor(random() * guestOpt.length)];
    return randGuestQty;

}

function roomsQtyPicker() {
    const roomQty = ['1','2','3'];
    const randRoomSelect = roomQty[floor(random() * roomQty.length)];;
    return randRoomSelect;
}

function randomCurrencyPicker() {
    const currencyList = [];
    const randomInputCurr = currencyList[floor(random() * currencyList.length)];

    return randomInputCurr;
}

describe('Tests the Search Functions Of Rocketmiles.com ', () => {
   


   
    //Base query params for hotel search
    const langBase         = 'en';
    const currencyBase     = "USD";
    const sssBase          = 'rocketmiles';
    const guestQtyBase     = 2;
    const roomQtyBase      = 1;
    const checkInBase      = checkIn;
    const checkOutBase     = checkOut;
    const imgHBase         = 507;
    const imgWBase         = 760;           
    const inclAffilBase    = true;
    const inclPromoBase    = true;
    const srcBase          = 'HSS';
    const statContLvlBase  = 'SEARCH';
    const rewardProgBase   = 'amazon'; 
    const destNameBase     = 'Chicago';           
    const queryBaseDesc    = 'Chicago,+IL';
    const latBase          = 41.8958;
    const longBase         = -87.6253;
    const placeIdBase      = 77; 
    const stateAbbrevSplit = queryBaseDesc.split(',+');
    const stateAbbrev      = stateAbbrevSplit[1];
    const description      = queryBaseDesc.split('+');
    const descriptionSplit = description[0]+ ' '+description[1];
    let currencyLength     = null ;
    
               
               
// it('Grabs list of top destinations.', () => {
//     cy.request({
//         method: 'GET',
//         url: `https://www.rocketmiles.com/rest/places?query=&language=en&sessionSiteSlug=rocketmiles`
//     }).then(response => {
//         expect(response.status).to.eq(200);
//     });
// });

it('Gets and loads the data for test currencies.', () => {
    cy.visit('https://www.rocketmiles.com'); 
    cy.server();
    cy.route('POST', '/api/lib/kD8MxMdJKmVcq/s', {}).as('onPageLoad');

    cy.wait('@onPageLoad');

    cy.get('button[class="btn cookie-banner-button ng-scope"]')
      .contains('OK')
      .click({ force: true });
    cy.get('span[aria-hidden="true"]')
    .click({force: true});

    // Loop and Load The Test Currencies From UI
    cy.get('a[class="ng-binding"]').each(($entry, myidx, $array) => {
        cy.log(`${$entry[0].outerText}`);
        currencyList.push($entry[0].outerText);
       
        currencyLength = $array.length;
            expect(currencyLength).to.not.eq(null);
     })

});
     it('Stalls long enough for loop to finish before evaluting length of Language options Arrray', () => {
       
         if(currencyLength != null ){
               cy.log(currencyLength);
               cy.log(currencyList);
               cy.log(currencyLength);
               cy.log(currencyList[51]);
               expect(currencyList[0]).to.eq('USD');
               expect(currencyList[26]).to.include('JPY');
               expect(currencyList[53]).to.include('ZAR');   
         }else{
               cy.log('No data to retrieve from currency array.')
           }
     });    

  });
     
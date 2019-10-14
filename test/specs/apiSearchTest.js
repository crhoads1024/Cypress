

// API Target Site: Rocketmiles.com
// Search Funtion
// Positive Tests
// Negative Tests
// Selection Lists


const { floor } = Math;
const { random } = Math;
const today = new Date();
const date = `${today.getFullYear()}%2F${today.getMonth()
  + 1}%2F${today.getDate()}`;
  const dateEnd = `${today.getFullYear()}%2F${today.getMonth()
    + 1}%2F${today.getDate() + 4}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

// function getRandomDestinaton()  {
// cy.request({
//     method: 'GET',
//         url: `https://www.rocketmiles.com/rest/places?query=&language=${language}&sessionSiteSlug=${ssSlug}`,


// }).then(response => {
//     const array = response
//     const arrayLength = response.lenght;
//     const destinationList = [];
//     const places = {array: destinationList};
    
//     cy.log(`Contents of Places ${places}`);
//     randomDestination = randomDestinationSelector();
//     cy.log(`Randomized Destination Selector is ${randomDestination}`);
// )};
// return randomDestination;
// }




const rewardProgramList = [];
const guestQty = [1,2,3];
const roomQty = [];
const currencyList = [];
const langList = [];
const checkIn = date 
const checkOut = dateEnd;

function randomRewardSelector() {
const program = `${rewardProgramList[floor(random() * rewardProgramList.length)]}`;
return `${program}`;
}



function randomCurrencySelector() {
const currency = `${rewardProgramList[floor(random() * rewardProgramList.length)]}`;
return `${currency}`;
}

function randomLanguageSelector() {
const language = `${langList[floor(random() * langList.length)]}`;
return `${language}`;
}

function randomGuestQtySelector() {
const guestQty = `${guestQty[floor(random() * guestQty.length)]}`;
return `${guestQty}`;
}

function randomRoomQtySelector() {
const roomQty = `${roomQty[floor(random() * roomQty.length)]}`;
return `${roomQty}`;
}

const env = Cypress.env(process.env);
console.log(env);
describe('Tests the Search Functions Of Rocketmiles.com ', () => {

    const langBase = 'en';
    const currencyBase = 'USD';
    const sssBase = 'rocketmiles';
    const guestQtyBase = 2;
    const roomQtyBase = 1;
    const checkInBase = date;
    const checkOutBase = checkOut;
    const imgHBase = 507;
    const imgWBase = 760;           
    const inclAffilBase = true;
    const inclPromoBase = true;
    const srcBase = 'HSS';
    const statContLvlBase = 'SEARCH';
    const rewardProgBase = 'amazon';            
    const queryBaseDest = 'Chicago,+IL';
    const latBase = '41.8958';
    const longBase = '-87.6253';
    const placeIdBase = 77;           
                
                
               
               
   // beforeAll(() => populateSearchSelectors());
    it('Gets the list of top destinations.', () => {
    cy.request({
        method: 'GET',
            url: `${env}/rest/places?query=&language=${langBase}&sessionSiteSlug=${sssBase}`
    
    }).then(response => {
        const array = response
        const arrayLength = response.lenght;
        const destinationList = [];
        const places = {array: destinationList};
        
        cy.log(`Contents of Places ${places}`);
        randomDestination = randomDestinationSelector();
        cy.log(`Randomized Destination Selector is ${randomDestination}`);
       
    });
});
    it('Tests the Search Feature Wiith Defaults.', () => {
        

        cy.request({
            method: 'GET',
            url: `${env}rest/search?
                adults=${guestQtyBase}
                &${checkInBase}
                &${checkOutBase}
                &currency=${currencyBase}
                &hotelImageHeight=${imgHBase}
                &hotelImageWidth=${imgWBase}
                &includeAffiliateResults=${inclAffilBase}
                &includePromoIneligible=${inclPromoBase}
                &language=${langBase}
                &latitude=${latBase}
                &longitude=${longBase}
                &placeId=${placeIdBase}
                &program=${rewardProgBase}
                &query=${queryBaseDest}
                &rooms=${roomQtyBase}
                &sessionSiteSlug=${sssBase}
                &source=${srcBase}
                &staticContentLevel=${statContLvlBase}`
    }).then(response => {
        const array = response
        const arrayLength = response.lenght;
        const destinationList = [];
        const places = {array: destinationList};
        
        cy.log(`Contents of Places ${places}`);

        });

    });

}); 
    
    
    
    // it('Fires GET /rewardsPrograms?language=&max&sessionsSiteSlug=rocketmiles', () => {
    //   cy.request({
    //     method: 'GET',
    //     url: `${env}/categories/${clientID}`,
    //     headers: {
    //       'x-auth-token':
    //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiYTg3Yzg1MC02Y2ZjLTExZTktYjVhNS1jM2EyMWI2NWU1NTkiLCJlbWFpbCI6ImRhdmlkLmhheWVzQHFzcnNvZnQuY29tIiwiZmlyc3RfbmFtZSI6IkRhdmlkIiwibGFzdF9uYW1lIjoiSGF5ZXMiLCJmdWxsX25hbWUiOiJEYXZpZCBIYXllcyIsInBvcnRhbF91c2VyIjp0cnVlLCJkb3Rjb21tX3VzZXIiOnRydWUsInFzcl91c2VyX2lkIjoiZGhheWVzNCIsImRvdGNvbW1fYWRtaW4iOnRydWUsInNlY3VyaXR5X2FjY2VzcyI6ZmFsc2UsInFzcl9zdG9yZXMiOltdLCJxc3JfcGF0Y2hlcyI6W10sInFzcl90aW1lc2xpY2VzIjpbeyJ2YWx1ZSI6IjAwOjAwLTA0OjAwIiwiZGlzcGxheSI6Ik92ZXJuaWdodCAoMTJhbSAtIDRhbSkifSx7InZhbHVlIjoiMDQ6MDAtMTE6MDAiLCJkaXNwbGF5IjoiQnJlYWtmYXN0ICg0YW0gLSAxMWFtKSJ9LHsidmFsdWUiOiIxMTowMC0xNDowMCIsImRpc3BsYXkiOiJMdW5jaCAoMTFhbSAtIDJwbSkifSx7InZhbHVlIjoiMTQ6MDAtMTc6MDAiLCJkaXNwbGF5IjoiU25hY2sgKDJwbSAtIDVwbSkifSx7InZhbHVlIjoiMTc6MDAtMjA6MDAiLCJkaXNwbGF5IjoiRGlubmVyICg1cG0gLSA4cG0pIn0seyJ2YWx1ZSI6IjIwOjAwLTI0OjAwIiwiZGlzcGxheSI6IkxhdGUgTmlnaHQgKDhwbSAtIDEyYW0pIn1dLCJpYXQiOjE1NTY4MTY4MzJ9.QQFkhpgzmfgEK2hwi1kAH7t6oKbDJYbnljDEm_zI278',
    //     },
    //   }).then(response => {
    //     expect(response.body).to.have.property('Categories');
    //     expect(response.body.Categories).not.eq(null);
    //   });
    
    // });
 //});
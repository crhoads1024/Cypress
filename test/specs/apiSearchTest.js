

// API Target Site: Rocketmiles.com
// Search Funtion
// Positive Tests
// Negative Tests
// Selection Lists


const { floor } = Math;
const { random } = Math;
const today = new Date();
const date = `${today.getMonth()
  + 1}%2F${today.getDate()}%2F${today.getFullYear()}`;
const dateEnd = `${today.getMonth()
    + 1}%2F${today.getDate() + 2}%2F${today.getFullYear()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

const responseCheckOut =  `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate() +2}`;
const responseCheckIn = `${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`;
const rewardProgramList = [];
const guestQty = [1,2,3,4,5];
const roomQty = [1,2,3];
const currencyList = [
    'currency': 'USD',
    'usdSymbol': '&#36;'
];      
const langList = [];
const checkIn = date 
const checkOut = dateEnd;

// function randomRewardSelector() {
// const program = `${rewardProgramList[floor(random() * rewardProgramList.length)]}`;
// return `${program}`;
// }



// function randomCurrencySelector() {
// const currency = `${rewardProgramList[floor(random() * rewardProgramList.length)]}`;
// return `${currency}`;
// }

// function randomLanguageSelector() {
// const language = `${langList[floor(random() * langList.length)]}`;
// return `${language}`;
// }

// function randomGuestQtySelector() {
// const guestQty = `${guestQty[floor(random() * guestQty.length)]}`;
// return `${guestQty}`;
// }

// function randomRoomQtySelector() {
// const roomQty = `${roomQty[floor(random() * roomQty.length)]}`;
// return `${roomQty}`;
// }

//  function randomDestinationSelector() {
//  const randomDestIndex = `${destId[floor(random() * array.length)]}`;
//  return `${randomDestIndex}`;
//  }

// const env = Cypress.env(process.env);
// console.log(env);
describe('Tests the Search Functions Of Rocketmiles.com ', () => {
 
    //Base query params for hotel search
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
    const destNameBase = 'Chicago';           
    const queryBaseDesc = 'Chicago,+IL';
    const latBase = 41.8958;
    const longBase = -87.6253;
    const placeIdBase = 77; 
    const stateAbbrevSplit = queryBaseDesc.split(',+');
    const stateAbbrev = stateAbbrevSplit[1];
    const description = queryBaseDesc.split('+');
    const descriptionSplit = description[0]+ ' '+description[1];
    
               
               
               
               
  
    it('Builds list of currency options from UI.', () => {
    cy.request({
        method: 'GET',
            url: `rest/places?query=&language=${langBase}&sessionSiteSlug=${sssBase}`
    
    }).then(response => {
        const array = response.body;
        const arrayMax = array.length;
        cy.log(`Array Length is ${arrayMax}`);

        //  *** Random Index Selection ***
        const selectionIndex = Math.floor(Math.random() * Math.floor(arrayMax));
        cy.log(`The Randomly Chosen Destination Index From Places Returned Is ${selectionIndex}`);
        const randomIndexId = response.body[selectionIndex].id;
        const randomIndexName = response.body[selectionIndex].name;
        const randomIndexDesc = response.body[selectionIndex].description;
        const randomIndexSrc = response.body[selectionIndex].source;
        const randomIndexType = response.body[selectionIndex].type;
        /// *** Random Index Selection Data Print Out ***
        cy.log(`Randomly Selected Dest Index ID is ${randomIndexId}`);
        cy.log(`Randomly Selected Dest Index Name is ${randomIndexName}`);
        cy.log(`Randomly Selected Dest Index Descripton is ${randomIndexDesc}`);
        cy.log(`Randomly Selected Dest Index Source is ${randomIndexSrc}`);
        cy.log(`Randomly Selected Dest Index Type is ${randomIndexType}`);
        //  *** Random Index Selection ***
        
    });
});
    it('Tests the Search Feature With Defaults Via API.', () => {
        cy.request({
            method: 'GET',
            url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
        }).then(response => {
            const hotelsFound = response.body.results;
            const lastResultIndex = hotelsFound;

        if(hotelsFound >= 0){ 
            //Response Variables
            const returnedId = response.body.placeResult.id.split('"');
            const returnedIdAsString = returnedId.toString();

            expect(response.status).to.eq(200);
            expect(response.body.rooms).to.eq(roomQtyBase);
            expect(response.body.id).to.not.eq(null);
            expect(response.body.placeResult.country).to.eq(null);
            expect(response.body.placeResult.description).to.eq(descriptionSplit);
            expect(response.body.placeResult.id).to.eq(returnedIdAsString);
            expect(response.body.placeResult.latitude).to.eq(latBase);
            expect(response.body.placeResult.longitude).to.eq(longBase);
            expect(response.body.placeResult.name).to.eq(destNameBase);
            expect(response.body.placeResult.placeType).to.eq('REGION');
            expect(response.body.placeResult.source).to.eq(srcBase);
            expect(response.body.placeResult.state).to.eq(stateAbbrev);
            expect(response.body.checkInDate).to.eq(responseCheckIn);
            expect(response.body.checkOutDate).to.eq(responseCheckOut);
            //expect(response.body.results).includes(searchResultsReturned);
            expect(response.body.rewardProgram.disabled).to.eq(false);
            expect(response.body.rewardProgram.unitsLong).to.eq("Amazon.com Gift Card");
            expect(response.body.rewardProgram.unitsShort).to.eq("Gift Card");
            expect(response.body.rewardProgram.id).to.eq(rewardProgBase);
            expect(response.body.rewardProgram.maxReward).to.eq(100);
            expect(response.body.rewardProgram.minReward).to.eq(5);
            expect(response.body.results).to.eq(lastResultIndex);
        
            expect(response.body.results[0].lowestAveragePrice.currency.to.eq(currencyBase));
            expect(response.body.results[0].lowestAveragePrice.symbol.to.eq(currencyBase));
            expect(response.body.results[0].lowestAverageTaxesAndFees.currency.to.eq(currencyBase));

        }


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
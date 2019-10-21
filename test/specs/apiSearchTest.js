

//  API Target Site: Rocketmiles.com //
//  ***Search Function Validation***
//  ******* API TESTS *******   //

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

describe('API tests for the Search Functions Of Rocketmiles.com ', () => {
   


   
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
    
               
               


// it('Gets and loads the data for test currencies.', () => {
//     cy.visit('https://www.rocketmiles.com'); 
//     cy.server();
//     cy.route('GET', '/rest/rewardPrograms?language=en&max=1000&sessionSiteSlug=rocketmiles', {}).as('pollRewards');
//     cy.route('POST', '/api/lib/kD8MxMdJKmVcq/s', {}).as('onPageLoad');
    
//     cy.wait('@pollRewards');
//     cy.wait('@onPageLoad');

//     cy.get('button[class="btn cookie-banner-button ng-scope"]')
//       .contains('OK')
//       .click({ force: true });
//     cy.get('span[aria-hidden="true"]')
//     .click({force: true});

//     // Loop and Load The Test Currencies From UI
//     cy.get('a[class="ng-binding"]').each(($entry, myidx, $array) => {
//         cy.log(`${$entry[0].outerText}`);
//         currencyList.push($entry[0].outerText);
       
//         currencyLength = $array.length;
//             expect(currencyLength).to.not.eq(null);
//      })

// });
// it('Gets and Loads the test data for rewards programs.',() => {
//     cy.request({
//         method: 'GET',
//         url: 'https://www.rocketmiles.com/rest/rewardPrograms?language=en&max=1000&sessionSiteSlug=rocketmiles'
//     }).then(response => {
//         expect(response.status).to.eq(200);
//         const rewardsArray = response.body.items;
//         const rewardsArrayLength = rewardsArray.length;
    
//         let r = null;
//         for( r = 0; r < rewardsArrayLength; r += 1){
            
//             rewardProgramList.push(response.body.items[r].name);
//             expect(rewardsArray[r].id).to.not.eq(null);
//             expect(rewardsArray[r].account).to.not.eq(null);
//             expect(rewardsArray[r].name).to.not.eq(null);
//      }
//      cy.log(rewardProgramList.length);
//         })
//     });
   
  

//   it('Grabs list of top destinations.', () => {
//     cy.request({
//         method: 'GET',
//         url: `https://www.rocketmiles.com/rest/places?query=&language=en&sessionSiteSlug=rocketmiles`
//     }).then(response => {
//        const totalDestinatons = response.body.length;
//        expect(response.status).to.eq(200);
//         let d = null
//         for( d = 0; d < totalDestinatons; d += 1){
//             topDestList.push(response.body[d].name);
            
//             expect(response.body[d].name).to.not.eq(null);
//         }
//         cy.log(totalDestinatons);
//         })
//     });

//   it('Validates Language options Arrray', () => {
       
//          if(currencyLength != null ){
//                cy.log(currencyLength);
//                cy.log(currencyList);
//                cy.log(currencyLength);
//                cy.log(currencyList[51]);
//                expect(currencyList[0]).to.eq('USD');
//                expect(currencyList[26]).to.include('JPY');
//                expect(currencyList[53]).to.include('ZAR');   
//          }else{
//                cy.log('No data to retrieve from currency array.')
//            }
//      });    
        



// it('Tests the Search Feature With Defaults Via API, Validates basic function of API .', () => {
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
//             expect(response.status).to.eq(200);
            
        
//             });   
//         });
    

//     it('Tests the Search Feature With Defaults Via API, Validates checkIn checkOut response match the input  .', () => {
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
//             expect(response.status).to.eq(200);
//             expect(response.body.checkInDate).to.eq(responseCheckIn);
//             expect(response.body.checkOutDate).to.eq(responseCheckOut);
//         });
//     });

//     it('Tests the Search Feature With Defaults Via API, Validates rewardProgram data.', () => {
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
//             expect(response.status).to.eq(200);
//             expect(response.body.rewardProgram.disabled).to.eq(false);
//             expect(response.body.rewardProgram.unitsLong).to.eq("Amazon.com Gift Card");
//             expect(response.body.rewardProgram.unitsShort).to.eq("Gift Card");
//             expect(response.body.rewardProgram.id).to.eq(rewardProgBase);
//             expect(response.body.rewardProgram.maxReward).to.eq(100);
//             expect(response.body.rewardProgram.minReward).to.eq(5);
//         });
//     });   

//    it('Tests the Search Feature With Defaults Via API, Validates the placesResults.', () => {
//     cy.request({
//         method: 'GET',
//         url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//     }).then(response => {
//         // Broke out all postive assertions into their own IT sections to more easily be able to apply negative tests
       
//         const returnedId         = response.body.placeResult.id.split('"');
//         const returnedIdAsString = returnedId.toString();           
//         expect(response.status).to.eq(200);
//         expect(response.body.placeResult.country).to.eq(null);
//         expect(response.body.placeResult.description).to.eq(descriptionSplit);
//         expect(response.body.placeResult.id).to.eq(returnedIdAsString);
//         expect(response.body.placeResult.latitude).to.eq(latBase);
//         expect(response.body.placeResult.longitude).to.eq(longBase);
//         expect(response.body.placeResult.name).to.eq(destNameBase);
//         expect(response.body.placeResult.placeType).to.eq('REGION');
//         expect(response.body.placeResult.source).to.eq(srcBase);
//         expect(response.body.placeResult.state).to.eq(stateAbbrev);
//         });
//     });

//     it('Tests the Search Feature With Defaults Via API, Validates returned roomQty match the input.', () => {
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
            
//             const hotelsFound     = response.body.results;
//             const lastResultIndex = hotelsFound;
            
//             expect(response.status).to.eq(200);
//             expect(response.body.rooms).to.eq(roomQtyBase);
//             expect(response.body.id).to.not.eq(null);

            
//         });
//     });

//     it('Tests the Search Feature With Defaults Via API, Validates returned currency matches the input currency.', () => {
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
//             const hotelsFound     = response.body.results;
//             const returnedResults = hotelsFound.length;
//             // Validate output has matching currency of input
//             cy.log('Validating Hotel Currency Results Match Input.');  
//             expect(response.status).to.eq(200);
            
            
//             // If hotel results are returned the code will continue to assert the accuracy of the pertinant values
//                 if(returnedResults >= 0){ 
//                     cy.log(`There were ${returnedResults} hotels returned for the search parameters entered`);
//                         // This set of currency assertions are set such that they will be validated for each hotel result returned.
//                         let i = null;
//                         for(i = 0; i < returnedResults; i += 1){
//                             expect(response.body.results[i].hotel.name).to.not.eq(null); 
//                             expect(response.body.results[i].hotel.id).to.not.eq(null);  
//                             expect(response.body.results[i].totalPriceUSD.currency).to.eq(currencyBase);
//                             expect(response.body.results[i].totalPrice.currency).to.eq(currencyBase);
//                             expect(response.body.results[i].totalTaxesAndFees.currency).to.eq(currencyBase);
//                             expect(response.body.results[i].lowestAveragePrice.currency).to.eq(currencyBase);
//                             expect(response.body.results[i].lowestAverageTaxesAndFees.currency).to.eq(currencyBase);
                            
//                         }
//                 }else{
//                     cy.log('There are no hotels returned for the search parameters entered');
//                 }
//         })  
            
//     });

//     it('Tests the Search Feature With Defaults Via API, Validates Pertinent Details Of Each Hotel Found.', () => {
    
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
//             expect(response.status).to.eq(200);
//             const hotelsFound     = response.body.results;
//             const returnedResults = hotelsFound.length;
              
            
           
//             // If hotel results are returned the code will continue to assert the accuracy of the pertinant values
//             if(returnedResults >= 0){ 
                
//                 // This set of variables are set such that they will be validated for each result returned.
//                 let i = null;
//                 for(i = 0; i < returnedResults; i += 1){
//                     const hotelName            = response.body.results[i].hotel.name;
//                     const hotelIdNum           = response.body.results[i].hotel.id;
//                     const affiliate            = response.body.results[i].hotel.affiliates;
//                     const affiliatesIndex      = response.body.results[i].hotel.affiliates.length;
//                     const nightsBooked         = response.body.results[i].numberOfNights;
//                     const totalPriceUsdAmt     = response.body.results[i].totalPriceUSD.amount;  
//                     const totalPriceAmt        = response.body.results[i].totalPrice.amount;
//                     const totalTaxesAndFeesAmt = response.body.results[i].totalTaxesAndFees.amount;
//                     const lowAvgPriceAmt       = response.body.results[i].lowestAveragePrice.amount;
//                     const lowAvgTaxAndFeesAmt  = response.body.results[i].lowestAverageTaxesAndFees.amount;
//                     if (affiliatesIndex >= 1 ){
//                         let a = null;
//                             for(a = 0; a < affiliatesIndex; a += 1){
//                                 const affiliateSite = affiliate[a].url;
//                                 const affiliateSlug = affiliate[a].slug;
//                                 //cy.log(`Afilliate Slug For ${hotelName} and Index[${i}] valiidated is ${affiliateSlug}`);
//                                 //cy.log(`Afilliate Website For ${hotelName} and Index[${i}] valiidated is ${affiliateSite}`);
        
//                                 expect(affiliateSlug && affiliateSite).to.includes(`booking`);


//                     // cy.log('Validating Hotel Name, City, Time Zone Results Match Input.');
                    
//                     expect(response.body.results[i].hotel.name).to.not.eq(null); 
//                     expect(response.body.results[i].hotel.id).to.not.eq(null);
//                     expect(response.body.results[i].hotel.address.timeZone).to.includes(destNameBase);
//                     expect(response.body.results[i].hotel.address.city).to.not.eq(null);

//                     // cy.log('Validating price and tax quotes are returned by the API to be calculated for total price.');
//                     expect(lowAvgPriceAmt).to.not.eq(null);
//                     expect(lowAvgTaxAndFeesAmt).to.not.eq(null);
//                     expect(nightsBooked).to.not.eq(null);
                   
                   
//                     // *** Taxes and fees as well as room rates value is returned by the API up to 2 decimal places
//                     // *** However, some totalTaxFees calculations are truly using fractions of cents to arrive
//                     // *** at the total calculation. 
//                     // calculates actual values not represented in lowest listed priced (put this in a function at some point)
//                     const actualLowPriceAmtUSD      = totalPriceUsdAmt/nightsBooked;
//                     const actualLowAvgTaxAndFeeAmt  = totalTaxesAndFeesAmt/nightsBooked;
//                     const actualConvertedTotal      = totalPriceAmt/nightsBooked;
                    
//                     if(randInputCurr != 'USD'){
//                         expect(totalPriceAmt).to.eq(actualConvertedTotal * nightsBooked);

//                     }else{
//                     expect(actualLowPriceAmtUSD).to.eq(totalPriceUsdAmt * nightsBooked);
//                     expect(actualLowAvgTaxAndFeeAmt).to.eq(lowAvgTaxAndFeesAmt * nightsBooked);
//                     expect(totalPriceAmt).to.eq(actualConvertedTotal * nightsBooked);
//                     }
//                 }
//             }else{
//                 cy.log('No Affiliates Listed For Property.')
//             }
    
//                 } 
                        
//             } 
//         }) 
          
//     });   

//     it('Tests the Search Feature With Randomly Selected Guest Quantity Via API, Validates Pertinent Details Of Each Hotel Found.', () => {
//     const guestQty = guestPicker();
//         cy.request({
//             method: 'GET',
//             url: `rest/search?adults=${guestQty}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
//         }).then(response => {
//             expect(response.status).to.eq(200);
//             const hotelsFound     = response.body.results;
//             const returnedResults = hotelsFound.length;
              
            
           
//             // If hotel results are returned the code will continue to assert the accuracy of the pertinant values
//             if(returnedResults >= 0){ 
                
//                 // This set of variables are set such that they will be validated for each result returned.
//                 let i = null;
//                 for(i = 0; i < returnedResults; i += 1){
//                     const hotelName            = response.body.results[i].hotel.name;
//                     const hotelIdNum           = response.body.results[i].hotel.id;
//                     const affiliate            = response.body.results[i].hotel.affiliates;
//                     const affiliatesIndex      = response.body.results[i].hotel.affiliates.length;
//                     const nightsBooked         = response.body.results[i].numberOfNights;
//                     const totalPriceUsdAmt     = response.body.results[i].totalPriceUSD.amount;  
//                     const totalPriceAmt        = response.body.results[i].totalPrice.amount;
//                     const totalTaxesAndFeesAmt = response.body.results[i].totalTaxesAndFees.amount;
//                     const lowAvgPriceAmt       = response.body.results[i].lowestAveragePrice.amount;
//                     const lowAvgTaxAndFeesAmt  = response.body.results[i].lowestAverageTaxesAndFees.amount;
//                     if (affiliatesIndex >= 1 ){
//                         let a = null;
//                             for(a = 0; a < affiliatesIndex; a += 1){
//                                 const affiliateSite = affiliate[a].url;
//                                 const affiliateSlug = affiliate[a].slug;
//                                 cy.log(`Afilliate Slug For ${hotelName} and Index[${i}] valiidated is ${affiliateSlug}`);
//                                 cy.log(`Afilliate Website For ${hotelName} and Index[${i}] valiidated is ${affiliateSite}`);
        
//                                 expect(affiliateSlug && affiliateSite).to.includes(`booking`);


//                     // cy.log('Validating Hotel Name, City, Time Zone Results Match Input.');
                    
//                     expect(response.body.results[i].hotel.name).to.not.eq(null); 
//                     expect(response.body.results[i].hotel.id).to.not.eq(null);
//                     expect(response.body.results[i].hotel.address.timeZone).to.includes(destNameBase);
//                     expect(response.body.results[i].hotel.address.city).to.not.eq(null);

//                     // cy.log('Validating price and tax quotes are returned by the API to be calculated for total price.');
//                     expect(lowAvgPriceAmt).to.not.eq(null);
//                     expect(lowAvgTaxAndFeesAmt).to.not.eq(null);
//                     expect(nightsBooked).to.eq(2);
                   
                   
//                     // *** Taxes and fees as well as room rates value is returned by the API up to 2 decimal places
//                     // *** However, some totalTaxFees calculations are truly using fractions of cents to arrive
//                     // *** at the total calculation. 
//                     // calculates actual values not represented in lowest listed priced (put this in a function at some point)
//                     const actualLowPriceAmtUSD      = totalPriceUsdAmt/nightsBooked;
//                     const actualLowAvgTaxAndFeeAmt  = totalTaxesAndFeesAmt/nightsBooked;
//                     const actualConvertedTotal      = totalPriceAmt/nightsBooked;
                    
//                     if(randInputCurr != 'USD'){
//                         expect(totalPriceAmt).to.eq(actualConvertedTotal * nightsBooked);

//                     }else{
//                     expect(actualLowPriceAmtUSD).to.eq(totalPriceUsdAmt * nightsBooked);
//                     expect(actualLowAvgTaxAndFeeAmt).to.eq(lowAvgTaxAndFeesAmt * nightsBooked);
//                     expect(totalPriceAmt).to.eq(actualConvertedTotal * nightsBooked);
//                     }
//                 }
//             }else{
//                 cy.log('No Affiliates Listed For Property.')
//             }
    
//                 } 
                        
//             } 
//         }) 
          
//     });   

    it('Tests the Search Feature With Foreign Currency Via API, Validates Pertinent Details Of Each Hotel Found.', () => {
       const inputCurr = 'RUB';
            cy.request({
                method: 'GET',
                url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${inputCurr}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQtyBase}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
            }).then(response => {
                expect(response.status).to.eq(200);
                const hotelsFound     = response.body.results;
                const returnedResults = hotelsFound.length;
                  
                
               
                // If hotel results are returned the code will continue to assert the accuracy of the pertinant values
                if(returnedResults >= 0){ 
                    
                    // This set of variables are set such that they will be validated for each result returned.
                    let i = null;
                    for(i = 0; i < returnedResults; i += 1){
                        const hotelName            = response.body.results[i].hotel.name;
                        const hotelIdNum           = response.body.results[i].hotel.id;
                        const affiliate            = response.body.results[i].hotel.affiliates;
                        const affiliatesIndex      = response.body.results[i].hotel.affiliates.length;
                        const nightsBooked         = response.body.results[i].numberOfNights;
                        const totalPriceUsdAmt     = response.body.results[i].totalPriceUSD.amount;  
                        const totalPriceAmt        = response.body.results[i].totalPrice.amount;
                        const totalTaxesAndFeesAmt = response.body.results[i].totalTaxesAndFees.amount;
                        const lowAvgPriceAmt       = response.body.results[i].lowestAveragePrice.amount;
                        const lowAvgTaxAndFeesAmt  = response.body.results[i].lowestAverageTaxesAndFees.amount;
                        if (affiliatesIndex >= 1 ){
                            let a = null;
                                for(a = 0; a < affiliatesIndex; a += 1){
                                    const affiliateSite = affiliate[a].url;
                                    const affiliateSlug = affiliate[a].slug;
                                    //cy.log(`Afilliate Slug For ${hotelName} and Index[${i}] valiidated is ${affiliateSlug}`);
                                    //cy.log(`Afilliate Website For ${hotelName} and Index[${i}] valiidated is ${affiliateSite}`);
            
                                    expect(affiliateSlug && affiliateSite).to.includes(`booking`);
    
    
                        // cy.log('Validating Hotel Name, City, Time Zone Results Match Input.');
                        
                        expect(response.body.results[i].hotel.name).to.not.eq(null); 
                        expect(response.body.results[i].hotel.id).to.not.eq(null);
                        expect(response.body.results[i].hotel.address.timeZone).to.includes(destNameBase);
                        expect(response.body.results[i].hotel.address.city).to.not.eq(null);
                        expect(response.body.results[i].hotel.name).to.not.eq(null); 
                        expect(response.body.results[i].hotel.id).to.not.eq(null);  
                        expect(response.body.results[i].totalPriceUSD.currency).to.eq(currencyBase);
                        expect(response.body.results[i].totalPrice.currency).to.eq(inputCurr);
                        expect(response.body.results[i].totalTaxesAndFees.currency).to.eq(inputCurr);
                        expect(response.body.results[i].lowestAveragePrice.currency).to.eq(inputCurr);
                        expect(response.body.results[i].lowestAverageTaxesAndFees.currency).to.eq(inputCurr);
                        // cy.log('Validating price and tax quotes are returned by the API to be calculated for total price.');
                        expect(lowAvgPriceAmt).to.not.eq(null);
                        expect(lowAvgTaxAndFeesAmt).to.not.eq(null);
                        expect(nightsBooked).to.eq(2);
                       
                       
                        // *** Taxes and fees as well as room rates value is returned by the API up to 2 decimal places
                        // *** However, some totalTaxFees calculations are truly using fractions of cents to arrive
                        // *** at the total calculation. 
                        // calculates actual values not represented in lowest listed priced (put this in a function at some point)
                        
                        const actualLowAvgTaxAndFeeAmt  = totalTaxesAndFeesAmt/nightsBooked;
                        const actualConvertedTotal      = totalPriceAmt/nightsBooked;
                        
                        
                     
                        expect(totalTaxesAndFeesAmt).to.eq(actualLowAvgTaxAndFeeAmt * nightsBooked);
                        expect(totalPriceAmt).to.eq(actualConvertedTotal * nightsBooked);
                        
                    }
                }else{
                    cy.log('No Affiliates Listed For Property.')
                }
        
                    } 
                            
                } 
           }) 
              
        });

        // it('Tests the Search Feature With Diff Room Selection  Via API, Validates Pertinent Details Of Each Hotel Found.', () => {
        //     const roomQty = 3 ;
        //         cy.request({
        //             method: 'GET',
        //             url: `rest/search?adults=${guestQtyBase}&checkIn=${checkInBase}&checkOut=${checkOutBase}&currency=${currencyBase}&hotelImageHeight=${imgHBase}&hotelImageWidth=${imgWBase}&includeAffiliateResults=${inclAffilBase}&includePromoIneligible=${inclPromoBase}&language=${langBase}&latitude=${latBase}&longitude=${longBase}&placeId=${placeIdBase}&program=${rewardProgBase}&query=${queryBaseDesc}&rooms=${roomQty}&sessionSiteSlug=${sssBase}&source=${srcBase}&staticContentLevel=${statContLvlBase}`
        //         }).then(response => {
        //             expect(response.status).to.eq(200);
        //             const hotelsFound     = response.body.results;
        //             const returnedResults = hotelsFound.length;
                      
                    
                   
        //             // If hotel results are returned the code will continue to assert the accuracy of the pertinant values
        //             if(returnedResults >= 0){ 
                        
        //                 // This set of variables are set such that they will be validated for each result returned.
        //                 let i = null;
        //                 for(i = 0; i < returnedResults; i += 1){
        //                     const hotelName            = response.body.results[i].hotel.name;
        //                     const hotelIdNum           = response.body.results[i].hotel.id;
        //                     const affiliate            = response.body.results[i].hotel.affiliates;
        //                     const affiliatesIndex      = response.body.results[i].hotel.affiliates.length;
        //                     const nightsBooked         = response.body.results[i].numberOfNights;
        //                     const totalPriceUsdAmt     = response.body.results[i].totalPriceUSD.amount;  
        //                     const totalPriceAmt        = response.body.results[i].totalPrice.amount;
        //                     const totalTaxesAndFeesAmt = response.body.results[i].totalTaxesAndFees.amount;
        //                     const lowAvgPriceAmt       = response.body.results[i].lowestAveragePrice.amount;
        //                     const lowAvgTaxAndFeesAmt  = response.body.results[i].lowestAverageTaxesAndFees.amount;
        //                     if (affiliatesIndex >= 1 ){
        //                         let a = null;
        //                             for(a = 0; a < affiliatesIndex; a += 1){
        //                                 const affiliateSite = affiliate[a].url;
        //                                 const affiliateSlug = affiliate[a].slug;
        //                                 //cy.log(`Afilliate Slug For ${hotelName} and Index[${i}] valiidated is ${affiliateSlug}`);
        //                                 //cy.log(`Afilliate Website For ${hotelName} and Index[${i}] valiidated is ${affiliateSite}`);
                
        //                                 expect(affiliateSlug && affiliateSite).to.includes(`booking`);
        
        
        //                     // cy.log('Validating Hotel Name, City, Time Zone Results Match Input.');
        //                     expect(response.body.results[i].numberOfRooms).to.eq(roomQty);
        //                     expect(response.body.results[i].hotel.name).to.not.eq(null); 
        //                     expect(response.body.results[i].hotel.id).to.not.eq(null);
        //                     expect(response.body.results[i].hotel.address.timeZone).to.includes(destNameBase);
        //                     expect(response.body.results[i].hotel.address.city).to.not.eq(null);
        //                     expect(response.body.results[i].hotel.name).to.not.eq(null); 
        //                     expect(response.body.results[i].hotel.id).to.not.eq(null);  
        //                     expect(response.body.results[i].totalPriceUSD.currency).to.eq('USD');
        //                     expect(response.body.results[i].totalPrice.currency).to.eq(currencyBase);
        //                     expect(response.body.results[i].totalTaxesAndFees.currency).to.eq(currencyBase);
        //                     expect(response.body.results[i].lowestAveragePrice.currency).to.eq(currencyBase);
        //                     expect(response.body.results[i].lowestAverageTaxesAndFees.currency).to.eq(currencyBase);
        //                     // cy.log('Validating price and tax quotes are returned by the API to be calculated for total price.');
        //                     expect(lowAvgPriceAmt).to.not.eq(null);
        //                     expect(lowAvgTaxAndFeesAmt).to.not.eq(null);
        //                     expect(nightsBooked).to.eq(2);
                           
                           
        //                     // *** Taxes and fees as well as room rates value is returned by the API up to 2 decimal places
        //                     // *** However, some totalTaxFees calculations are truly using fractions of cents to arrive
        //                     // *** at the total calculation. 
        //                     // calculates actual values not represented in lowest listed priced (put this in a function at some point)
                            
        //                     const actualLowAvgTaxAndFeeAmt  = totalTaxesAndFeesAmt/nightsBooked;
        //                     const actualConvertedTotal      = totalPriceAmt/nightsBooked;
                            
                            
        //                     // Total prices at the APIlevel do not include the room qty mutliplier.
        //                     // Once the room is selected the UI does take into account the roomQty.
        //                     expect(totalTaxesAndFeesAmt).to.eq(actualLowAvgTaxAndFeeAmt * nightsBooked);
        //                     expect(totalPriceAmt).to.eq(actualConvertedTotal * nightsBooked);
                            
        //                 }
        //             }else{
        //                 cy.log('No Affiliates Listed For Property.')
        //             }
            
        //                 } //for loop
                                
        //             } 
        //        }) 
                  
        //     });
                    
});

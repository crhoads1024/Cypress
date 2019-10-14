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

const { floor } = Math;
const { random } = Math;
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()
  + 1}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;


    // Selection Lists
    const destinationList = [];
    const rewardProgramList = [];
    const guestQty = [];
    const roomQty = [];
    const currencyList = [];
    const langList = [];
    const dateFrom = date 
    const dateTo = []
    
    function randomRewardSelector() {
    const program = `${rewardProgramList[floor(random() * rewardProgramList.length)]}`;
    return `${program}`;
  }

  function randomDestinationSelector() {
    const destination = `${destinationList[floor(random() * destinationList.length)]}`;
    return `${destination}`;
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
import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id = 37016; // Replace with your app_id or leave as 1089 for testing.
const connection = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`);
const api = new DerivAPIBasic({ connection });
// const start = document.querySelector('.start');

const marketSelection = document.querySelector('.marketSelection');

const ticks_history_request = {
  ticks_history: marketSelection.value,
  adjust_start_time: 1,
  count: 10,
  end: 'latest',
  start: 1,
  style: 'ticks',
};


const ticks_request = {
  ...ticks_history_request,
  subscribe: 1,
};

function createTicksRequest() {
  const ticks_history_request = {
    ticks_history: marketSelection.value,
    adjust_start_time: 1,
    count: 10,
    end: 'latest',
    start: 1,
    style: 'ticks',
  };

  const ticks_request = {
    ...ticks_history_request,
    subscribe: 1,
  };

  return ticks_request;
}


const tickSubscriber = () => api.subscribe(ticks_request);

marketSelection.addEventListener('change', async () => {
  ticks_history_request.ticks_history = marketSelection.value;
  ticks_request.ticks_history = marketSelection.value;
  const request = createTicksRequest();
  
  console.log(request);
  
  await new Promise(resolve => setTimeout(resolve, 0));

  console.log(ticks_history_request.ticks_history);
});


const ticksHistoryResponse = async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log('Error : ', data.error.message);
    connection.removeEventListener('message', ticksHistoryResponse, false);
    await api.disconnect();
  }
  if (data.msg_type === 'history') {
    console.log(data.history);
      
  }
  connection.removeEventListener('message', ticksHistoryResponse, false);
};

const lastDigit = document.querySelector('.number');
 
let variables = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

for (let i = 0; i < variables.length; i++) {
  window[variables[i]] = 0;
}

let unEightE1 = 0;
let unSevenE1 = 0;
let unSixE1 = 0;
let unFiveE1 = 0;
let unFourE1 = 0;
let unThreeE1 = 0;
let unTwoE1 = 0;
let unOneE1 = 0;

let ovvEightE1 = 0;
let ovvSevenE1 = 0;
let ovvSix = 0;
let ovvFive = 0;
let ovvFour = 0;
let ovvThreeE1 = 0;
let ovvTwo = 0;
let ovvOne = 0;

let eveE1 = 0
let oodE1 = 0


const ticksResponse = async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log('Error : ', data.error.message);
    connection.removeEventListener('message', ticksResponse, false);
    await api.disconnect();
  }
  
  if (data.msg_type === 'tick') {
    var myTick = data.tick.bid
    // console.log(data);
    
    
    var mySymbol = data.tick.symbol
    
    var myTickString;

    if (mySymbol === 'R_10' || mySymbol === 'R_25') {
      myTickString = myTick.toFixed(3);
    } else if (mySymbol === 'R_50' || mySymbol === 'R_75') {
      myTickString = myTick.toFixed(4);
    } else {
      myTickString = myTick.toFixed(2);
    }

    var myDigit = parseInt(myTickString.slice(-1));
    lastDigit.innerHTML = myDigit;

    // Calculating percentages
   
 
    


    
    const types = document.querySelectorAll('.even, .odd')
    types.forEach(type => {
      type.classList.remove('active');
    });
    const things = document.querySelectorAll('.over, .under')
    things.forEach(thing => {
      thing.classList.remove('active');
    });
    const evenE1 = document.querySelector('.even');
    const evenE2 = document.querySelector('.odd');
    const overE1 = document.querySelector('.over');
    const overE2 = document.querySelector('.under');
    const button_one = document.querySelector('.button_one');

     let evenPlus = (eveE1 + oodE1)
    

    if (myDigit % 2 === 0) {
      evenE1.classList.add('active');
      eveE1++

    } else {
      evenE2.classList.add('active');
      oodE1++
    }
    let myOdd = (oodE1/evenPlus)*100;
    let myEve = (eveE1/evenPlus)*100;
    button_one.addEventListener('click', () => {
      progress.style.width = myEve + '%';
      percentE1.innerHTML = Math.abs(Math.floor(myEve)) + '%';
      percentE2.innerHTML = Math.abs(1 - Math.floor(myOdd)) + '%';

      progress2.style.width = myOdd + '%';
    });




    if (myDigit > 4) {
      overE1.classList.add('active');
    } else {
      overE2.classList.add('active');
    }

  
    const activeClass = 'active';
    // Remove 'active' class from all elements
    const elements = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .ten');
    elements.forEach(element => {
      element.classList.remove(activeClass);
    });
    
    // Add 'active' class to the corresponding element
    if (myDigit == 0) {
      const oneE1 = document.querySelector('.one');
      oneE1.classList.add(activeClass);
      zero++
    } else if (myDigit == 1) {
      const twoE1 = document.querySelector('.two');
      twoE1.classList.add(activeClass);
      one++

    } else if (myDigit == 2) {
      const threeE1 = document.querySelector('.three');
      threeE1.classList.add(activeClass);
      two++
      
    } else if (myDigit == 3) {
      const fourE1 = document.querySelector('.four');
      fourE1.classList.add(activeClass);
      three++
      
    } else if (myDigit == 4) {
      const fiveE1 = document.querySelector('.five');
      fiveE1.classList.add(activeClass);
      four++

    } else if (myDigit == 5) {
      const sixE1 = document.querySelector('.six');
      sixE1.classList.add(activeClass);
      five++
      
    } else if (myDigit == 6) {
      const sevenE1 = document.querySelector('.seven');
      sevenE1.classList.add(activeClass);
      six++

    } else if (myDigit == 7) {
      const eightE1 = document.querySelector('.eight');
      eightE1.classList.add(activeClass);
      seven++
      
    } else if (myDigit == 8) {
      const nineE1 = document.querySelector('.nine');
      nineE1.classList.add(activeClass);
      eight++
      
    } else if (myDigit == 9) {
      const tenE1 = document.querySelector('.ten');
      tenE1.classList.add(activeClass);
      nine++
      
    }
    
  }


  const nono = document.querySelector('.nono');
  nono.innerHTML = zero;
  const achiel = document.querySelector('.achiel');
  achiel.innerHTML = one;
  const ariyo = document.querySelector('.ariyo ');
  ariyo.innerHTML = two;
  const adek = document.querySelector('.adek');
  adek.innerHTML = three;
  const agwen = document.querySelector('.agwen');
  agwen.innerHTML = four;
  const abich = document.querySelector('.abich');
  abich.innerHTML = five;
  const auchiel = document.querySelector('.auchiel');
  auchiel.innerHTML = six;
  const abirio= document.querySelector('.abirio');
  abirio.innerHTML = seven;
  const aboro = document.querySelector('.aboro');
  aboro.innerHTML = eight;
  const ochiko = document.querySelector('.ochiko');
  ochiko.innerHTML = nine;

  var All = (zero + one + two + three +four + five + six + seven +eight + nine);
  var overOne = (zero + one);
  var overTwo = (zero + one + two);
  var overThree = (zero + one + two + three);
  var overFour = (zero + one + two + three +four);
  var overFive = (zero + one + two + three +four + five);
  var overSix = (zero + one + two + three +four + five + six);
  var overSeven = (zero + one + two + three +four + five + six + seven);
  var overEight = (zero + one + two + three +four + five + six + seven +eight);

  var underEight = (nine + eight);
  var underSeven = (nine + eight + seven);
  var underSix = (nine + eight + seven + six);
  var underFive = (nine + eight + seven + six + five);
  var underFour = (nine + eight + seven + six + five + four);
  var underThree = (nine + eight + seven + six + five + four + three);
  var underTwo = (nine + eight + seven + six + five + four + three + two);
  var underOne = (nine + eight + seven + six + five + four + three + two + one);


  unEightE1 = (underOne/All*100);
  unSevenE1 = (underTwo/All*100);
  unSixE1 = (underThree/All*100);
  unFiveE1 = (underFour/All*100);
  unFourE1 = (underFive/All*100);
  unThreeE1 = (underSix/All*100);
  unTwoE1 = (underSeven/All*100);
  unOneE1 = (underEight/All*100);

  

  ovvEightE1 = (overOne/All)*100;
  ovvSevenE1 = (overTwo/All)*100;
  ovvSix = (overThree/All)*100;
  ovvFive = (overFour/All)*100;
  ovvFour = (overFive/All)*100;
  ovvThreeE1 = (overSix/All)*100;
  ovvTwo = (overSeven/All)*100;
  ovvOne = (overEight/All)*100;
  
  const progress2 = document.querySelector('.progress2')
  const progress = document.querySelector('.progress')

  const buttonEs = [
    document.querySelector('.under_button_one'),
    document.querySelector('.under_button_two'),
    document.querySelector('.under_button_three'),
    document.querySelector('.under_button_four'),
    document.querySelector('.under_button_five'),
    document.querySelector('.under_button_six'),
    document.querySelector('.under_button_seven'),
    document.querySelector('.under_button_eight')
  ];
  const percentE2 = document.querySelector('.percent2');
  
  const percent = [
    unOneE1,
    unTwoE1,
    unThreeE1,
    unFourE1,
    unFiveE1,
    unSixE1,
    unSevenE1,
    unEightE1
  ];
  // under%
  
  buttonEs.forEach((buttonE, index) => {
    buttonE.addEventListener('click', () => {
      progress2.style.width = percent[index] + '%';
      percentE2.innerHTML = 100 - Math.abs(1 - Math.floor(percentages[index])) + '%';

    });
  });
  const buttons = [
    document.querySelector('.over_button_one'),
    document.querySelector('.over_button_two'),
    document.querySelector('.over_button_three'),
    document.querySelector('.over_button_four'),
    document.querySelector('.over_button_five'),
    document.querySelector('.over_button_six'),
    document.querySelector('.over_button_seven'),
    document.querySelector('.over_button_eight')
  ];
  
  const percentages = [
    ovvOne,
    ovvTwo,
    ovvThreeE1,
    ovvFour,
    ovvFive,
    ovvSix,
    ovvSevenE1,
    ovvEightE1
  ];
  // over %age
  const percentE1 = document.querySelector('.percent');

   buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      progress.style.width = percentages[index] + '%';
      percentE1.innerHTML = Math.abs(1- Math.floor(percentages[index])) + '%';
      
    });
   
    
  });


};

const subscribeTicks = async () => {
  connection.addEventListener('message', ticksResponse);
  await tickSubscriber();
};

const subscribe_ticks_button = document.querySelector('#ticks');
subscribe_ticks_button.addEventListener('click', subscribeTicks);

const unsubscribeTicks = async () => {
  connection.removeEventListener('message', ticksResponse, false);
  await tickSubscriber().unsubscribe();
  location.reload();
};

// const getTicksHistory = async () => {
//   connection.addEventListener('message', ticksHistoryResponse);
//   await api.ticksHistory(ticks_history_request);
// };

const unsubscribe_ticks_button = document.querySelector('#ticks-unsubscribe');
unsubscribe_ticks_button.addEventListener('click', unsubscribeTicks);

// const ticks_history_button = document.querySelector('#ticks-history');
// ticks_history_button.addEventListener('click', getTicksHistory);

const countdownE1 = document.querySelector('.countdown');
const purchase = document.querySelector('.purchase');

document.addEventListener('DOMContentLoaded', function() {
  var countdownButton = document.querySelector('.countdown-button');

  countdownButton.addEventListener('click', function() {
    var countdown = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    countdownButton.disabled = true;
    var randomNumber = Math.floor(Math.random() * 10);
    purchase.innerText = randomNumber;
    console.log(randomNumber);
    
    var countdownInterval = setInterval(function() {
      countdown--;
      countdownE1.innerText =  countdown + 's';

      if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownE1.innerText = 'Won';
        countdownButton.disabled = false;
      }
    }, 1000);
  });
});

// function startCountdown() {

//   var count = Math.floor(Math.random() * (30 - 15 + 1)) + 15;

//   var countdownInterval = setInterval(function() {
//     countdownE1.innerText = count;
//     count--;

//     if (count < 0) {
//       clearInterval(countdownInterval);
//       countdownE1.innerHTML = "Won";
//     }
//     if (count === 4) {
//       countdownE1.style.color = "blue";
//     }
//   }, 1000);
  
// }
// startCountdown() 

const loginBtn = document.querySelector('.Sign');

// Check login status
var isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  loginBtn.textContent = 'Sign Out';
}

// Add logout functionality
function logout() {
  localStorage.setItem("isLoggedIn", "false"); // Update login status in localStorage
  window.location.href = "login.html"; // Redirect to login page
}

// Add event listener to the button for logout
loginBtn.addEventListener("click", logout);


let main = document.querySelector('.main');

let b1 = document.querySelector('.b-1');
let b2 = document.querySelector('.b-2');
let b3 = document.querySelector('.b-3');
let b4 = document.querySelector('.b-4');
let b5 = document.querySelector('.b-5');
let b6 = document.querySelector('.b-6');
let b7 = document.querySelector('.b-7');
let b8 = document.querySelector('.b-8');
let b9 = document.querySelector('.b-9');
let b10 = document.querySelector('.b-10');
let b11 = document.querySelector('.b-11');
let b12 = document.querySelector('.b-12');
let b13 = document.querySelector('.b-13');
let b14 = document.querySelector('.b-14');
let b15 = document.querySelector('.b-15');
let b16 = document.querySelector('.b-16');
let b17 = document.querySelector('.b-17');
let b18 = document.querySelector('.b-18');
let b19 = document.querySelector('.b-19');
let b20 = document.querySelector('.b-20');

let nextLevel_btn = document.querySelector('.play_btn2');
let time_display = document.querySelector(".info_time-display");
let time_box = document.querySelector(".time");

let wrongs_box = document.querySelector('.wrongs');
let wrongs_display = document.querySelector('.wrongs_display');
//GAME IVER THINGY
let gameOver = false;
//PLAY playButton


function itemPreview (){
  for (i=1; i<=20; i++){
    document.querySelector('.b-'+ i).classList.remove('close');
    }
    setTimeout(function(){
    for (i=1; i<=20; i++){
      document.querySelector('.b-'+ i).classList.add('close');
    }},2000); // end of set timeout
  };//end of ITEMPreview function


const blue= 'blue';
const cinamon= 'cinamon'
const dblue = 'dblue';
const dpurple= 'dpurple';
const gold = 'gold';
const green ='green';
const orange = 'orange';
const purple ='purple';
const red ='red';
const yellow = 'yellow';

var pick1, pick2, pick3; //picks defined
const imgArray = [blue, cinamon, dblue, dpurple, gold, green, orange, purple, red, yellow];
let level = 1;
let difficulty = '';

function levelPicker(){
  if (level === 1 && difficulty === 'easy'){
    pick1 =  [0,0,5,5];
    pick2 = [9,9,1,1]
     pick3 = [5,5,7,7];
  }

  if (level === 2 && difficulty === 'easy'){
    pick1 = [2,8,2,8,2,9,2,8,9,8,9,9];
    pick2 = [5,0,0,5,7,5,0,0,5,7,7,7];
    pick3 = [9,2,4,2,4,4,9,2,2,9,4,9];
  }

  if (level === 3 && difficulty === 'easy'){
  pick1 = [0,9,5,6,9,6,6,5,6,0,0,9,0,7,7,7,5,7,5,9];
  pick2 = [4,7,7,2,4,7,5,4,4,2,1,2,1,5,1,5,2,5,7,1];
  pick3 = [0,8,8,3,8,5,7,0,3,5,8,3,7,7,3,7,5,0,0,5];
    }


if (level === 1 && difficulty === 'hard'){
  pick1 =  [1,5,1,5];
  pick2 = [8,9,8,9];
   pick3 = [4,6,4,6];
}

if (level === 2 && difficulty === 'hard'){
  pick1 = [9,5,9,6,0,8,5,8,7,6,0,7];
  pick2 = [3,2,5,6,2,9,8,6,3,9,8,5];
  pick3 = [5,4,9,7,5,4,8,0,7,8,9,0];
}

if (level === 3 && difficulty === 'hard'){
pick1 = [5,8,9,0,4,7,1,5,8,2,6,0,9,3,1,4,2,6,3,7];
pick2 = [3,9,1,4,0,6,9,4,7,0,1,5,2,8,5,2,6,7,3,8];
pick3 = [3,5,8,0,4,8,1,9,7,3,1,6,5,2,7,9,4,2,6,0];
  }
}
if (difficulty === 'hard' || difficulty === 'easy'){
levelPicker()
}


function gamePicker(){
  let randomNumber = Math.floor(Math.random()*3 +1);
  if (randomNumber ===1){
    changeImages(pick1);
  }
  else if (randomNumber ===2){
    changeImages(pick2);
  }
  else if (randomNumber ===3){
    changeImages(pick3);
  }
}//end of gamePicker


function changeImages(pick){
  boxesDisplayed();
  for (i=1; i<=20; i++){
  document.querySelector('.b-'+ (i)).classList.add(imgArray[pick[i-1]]);
  console.log((imgArray[pick[i-1]]));
  console.log(i);
  // document.querySelector('.b-'+ i).classList.add('close');
  document.querySelector('.b-'+ (i)).setAttribute("value", (imgArray[pick[i-1]]));//sets values
  }
}//end of Function


function boxesDisplayed(){
  console.log('sdfswdfsdfsd ' + level)
  if (level === 1){
  for (i=5; i<=20; i++){
    document.querySelector('.b-'+ (i)).style.display = "none";
    main.style.gridTemplateColumns=  'repeat(2, 1fr)';
    main.style.gridTemplateRows = '1fr 1fr';
    }
  }
  else if (level === 2){
  for (i=13; i<=20; i++){
    document.querySelector('.b-'+ (i)).style.display = "none";
    main.style.gridTemplateColumns=  'repeat(3, 1fr)';
    main.style.gridTemplateRows = 'repeat(4, 1fr)';
    }
  }
  else if (level === 3){
  for (i=13; i<=20; i++){
    // document.querySelector('.b-'+ (i)).style.display = "none";
    main.style.gridTemplateColumns=  'repeat(4, 1fr)';
    main.style.gridTemplateRows = 'repeat(5, 1fr)';
    }
  }
}
boxesDisplayed();

//Adds event Listener to all beans
function startGame(){
  b1.addEventListener('click', function(){play(b1)});
  b2.addEventListener('click', function(){play(b2)});
  b3.addEventListener('click', function(){play(b3)});
  b4.addEventListener('click', function(){play(b4)});
  b5.addEventListener('click', function(){play(b5)});
  b6.addEventListener('click', function(){play(b6)});
  b7.addEventListener('click', function(){play(b7)});
  b8.addEventListener('click', function(){play(b8)});
  b9.addEventListener('click', function(){play(b9)});
  b10.addEventListener('click', function(){play(b10)});
  b11.addEventListener('click', function(){play(b11)});
  b12.addEventListener('click', function(){play(b12)});
  b13.addEventListener('click', function(){play(b13)});
  b14.addEventListener('click', function(){play(b14)});
  b15.addEventListener('click', function(){play(b15)});
  b16.addEventListener('click', function(){play(b16)});
  b17.addEventListener('click', function(){play(b17)});
  b18.addEventListener('click', function(){play(b18)});
  b19.addEventListener('click', function(){play(b19)});
  b20.addEventListener('click', function(){play(b20)});
}


let boxClicked = [];
let userClicks = [];
let wrongMatch = 0;
let matched = 0;

function play(box){//grabs box clicks and pushes values in corresponding arrays
  if (userClicks[0] === undefined && userClicks[0] === undefined){
    boxClicked.push(box);
    userClicks.push(box.getAttribute('value'));
    open(0);
  }
  else if (userClicks[0] !== undefined && userClicks[1] === undefined && boxClicked[0] !== box){
    boxClicked.push(box);
    userClicks.push(box.getAttribute('value'));
        open(1);
    checkWin();
  }
}


function checkWin(){
  if (userClicks[0] === userClicks[1]){
    match();
  }
  else if (userClicks !== userClicks[1]){
    setTimeout(close, 1200);
    wrongMatch++
  }
}




function open(num){
  boxClicked[num].classList.remove('close');
}

function close() {
  boxClicked[0].classList.add('close');
  boxClicked[1].classList.add('close');
  wrongs_display.textContent = wrongMatch;
  boxClicked = [];
  userClicks = [];
}

function match (){
  boxClicked[0].classList.add('match');
  boxClicked[1].classList.add('match');
  boxClicked[0].style.pointerEvents = 'none';
  boxClicked[1].style.pointerEvents = 'none';
  boxClicked = [];
  userClicks = [];
  matched += 1;
  if (matched === pick1.length / 2){
    gameOver = true;
    nextLevel();
  }
}

function nextLevel(){
  level +=1
  displayModalInfo()
  time_box.style.display = 'none';
  wrongs_box.style.display = 'none';
  backdrop.style.display = 'block';
  backdrop.classList.remove('close2b');
  backdrop.classList.add('open2b');

  modal2.style.display = 'block';
  modal2.classList.remove('close2');
  }

nextLevel_btn.addEventListener('click', function(){
modal2.classList.add('close2');
backdrop.classList.add('close2b');
reseter()
levelPicker();
gamePicker();
boxesDisplayed();
setTimeout(timer, 3000);
setTimeout(modalNone2, 3000);
backdrop.classList.remove('open2b');
});

function reseter(){
  for (i=1; i<=20; i++){
    document.querySelector('.b-'+ (i)).classList.remove('undefined');
  document.querySelector('.b-'+ (i)).classList.remove("blue", "cinamon", "dblue", "dpurple", "gold", "green", "orange", "purple", "red", "yellow");
  document.querySelector('.b-'+ (i)).style.display = "block";
  document.querySelector('.b-'+ (i)).classList.remove('match');
  document.querySelector('.b-'+ (i)).classList.add('close');
  document.querySelector('.b-'+ (i)).style.pointerEvents = 'auto';
  gameOver = false;
  seconds  = 0;
  minutes = 0;
  wrongMatch = 0;
  matched = 0;
  wrongs_display.textContent = wrongMatch;
  time_display.textContent = '00:00';
  time_box.style.display = 'block';
  wrongs_box.style.display = 'block';
  }
    itemPreview();
}
//TIMER FUNCTIONS//////////////////////////////////
let seconds = 0;
let minutes = 0;
let hours = 0;
let t;

function time(){
  seconds++;
  if(seconds >= 60){
    seconds = 0;
    minutes++
    if(minutes >=60){
      minutes = 0;
      hours++
    }
  }
time_display.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

   timer();
 }

function timer(){
  if (gameOver === false){
  setTimeout(time, 1000);
  }
};


function displayTimer(){
  time_box.style.display = "block"
  wrongs_box.style.display = "block"
};
//END OF TIMER FUNCTIONS /////////

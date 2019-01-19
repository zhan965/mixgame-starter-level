
let mTime = document.querySelector('.mTime');
let mFails = document.querySelector('.mFails')
let lvlDisplay = document.querySelector('.lvlDisplay');

let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let modal2 = document.querySelector('.modal2');
let difficulty_easy = document.querySelector('.difficulty_easy');
let difficulty_hard = document.querySelector('.difficulty_hard');

difficulty_easy.addEventListener('click', function(){
  difficulty_easy.style.pointerEvents = 'none';
  difficulty_hard.style.pointerEvents = 'auto';
  difficulty_easy.classList.toggle('difficulty_active');
  difficulty_hard.classList.remove('difficulty_active');
  difficulty = 'easy'
  playButton.textContent = 'PLAY'
})
difficulty_hard.addEventListener('click', function(){
  difficulty_hard.style.pointerEvents = 'none';
  difficulty_easy.style.pointerEvents = 'auto';
  difficulty_hard.classList.toggle('difficulty_active');
  difficulty_easy.classList.remove('difficulty_active');
  difficulty = 'hard'
  playButton.textContent = 'PLAY'
})


function modalNone(){
  modal.style.display = 'none';
  backdrop.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

function modalNone2(){
  modal2.style.display = 'none';
  backdrop.style.display = 'none';
  modal2.classList.remove('open');
  backdrop.classList.remove('open');
}

function displayModalInfo(){
  lvlDisplay.textContent = 'Level ' + level;
  console.log(level)
  if (minutes < 1){
  mTime.innerHTML = document.querySelector('.info_time-display').textContent;
}
else if (minutes >=1){
  mTime.innerHTML = document.querySelector('.info_time-display').textContent;
}

mFails.innerHTML = wrongMatch;
}

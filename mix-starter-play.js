let playButton = document.querySelector('.play_btn');

if (difficulty === ''){
  playButton.textContent = 'SELECT DIFFICULTY'
}

playButton.addEventListener('click', function(){
  if (difficulty === 'hard' || difficulty === 'easy'){
// playButton.style.display = "none";
playButton.style.animation = "dissapear 1.6s forwards";
modal.classList.add('close2');
backdrop.classList.add('close2b');
levelPicker()
gamePicker();
setTimeout(modalNone, 5000);
setTimeout(displayTimer, 2000);
setTimeout(time, 5400);
setTimeout(itemPreview, 2000);
startGame();
setTimeout(function(){
  playButton.style.display = "none";
},2000)
  }
    });

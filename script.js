const song = document.getElementById('song');
const ctrlIcon = document.getElementById('play');
const progress = document.getElementById('status-bar');

song.onloadedmetadata= function (){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

ctrlIcon.addEventListener('click',playPause);
function playPause() {
  if(ctrlIcon.classList.contains('play-now')){
    song.play();
    ctrlIcon.classList.remove('play-now');
    ctrlIcon.classList.add('pause-now');
    ctrlIcon.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>
    `
  } else{
    song.pause();
    ctrlIcon.classList.add('play-now');
    ctrlIcon.classList.remove('pause-now');
    ctrlIcon.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
    `
  }
}


if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
};



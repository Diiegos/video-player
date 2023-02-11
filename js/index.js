const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forWard = document.querySelector('#forward');

$play.addEventListener('click', handleplay)
function handleplay() {
  $video.play()
  $play.hidden = true;
  $pause.hidden = false;
  console.log('todo bien por aqui')
}

$pause.addEventListener('click', handlepause)

function handlepause() {
  $video.pause()
  $play.hidden = false;
  $pause.hidden = true;
}

$backward.addEventListener('click', handlerBackward)

function handlerBackward() {

$video.currentTime -= 10;
}

$forWard.addEventListener('click', handlerforkward)

function handlerforkward() {

  $video.currentTime += 10;
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handlerloaded)
$video.addEventListener('timeupdate', handlerupdate)

function handlerloaded() {
  $progress.max = $video.duration
console.log('todo bien', $video.duration)
}

function handlerupdate() {
  $progress.value = $video.currentTime
  console.log('buena')
}

$progress.addEventListener('input', handlerinput)

function handlerinput(){
$video.currentTime = $progress.value
  console.log( $progress.value )
}


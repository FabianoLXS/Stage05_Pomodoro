const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const setBtn = document.querySelector(".set")
const stopBtn = document.querySelector(".stop")
const soundOnBtn = document.querySelector(".soundOn")
const soundOffBtn = document.querySelector(".soundOff")
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
let minutes

function countDown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    
    if (minutes <= 0) {
      playBtn.classList.remove('hide')
      pauseBtn.classList.add('hide')
      setBtn.classList.remove('hide')
      stopBtn.classList.add('hide')
      
      return
    }
    
    if(seconds <= 0) {
      seconds = 60
      
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
   
   secondsDisplay.textContent = String(seconds - 1).padStart(2, "0") 
  
   countDown()
  }, 1000)
}

playBtn.addEventListener('click', function() {
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
  setBtn.classList.add('hide')
  stopBtn.classList.remove('hide')

  countDown()
})

pauseBtn.addEventListener("click", function () {
  playBtn.classList.remove("hide")
  pauseBtn.classList.add("hide")
})

setBtn.addEventListener("click", function () {
  setBtn.classList.add("hide")
  stopBtn.classList.remove("hide")
})

stopBtn.addEventListener("click", function () {
  setBtn.classList.remove("hide")
  stopBtn.classList.add("hide")
  playBtn.classList.remove("hide")
  pauseBtn.classList.add("hide")
})

soundOnBtn.addEventListener('click', function() {
  soundOnBtn.classList.add("hide")
  soundOffBtn.classList.remove("hide")
})

soundOffBtn.addEventListener("click", function () {
  soundOnBtn.classList.remove("hide")
  soundOffBtn.classList.add("hide")
})

setBtn.addEventListener("click", function() {
  minutes = prompt("Quantos minutos?")
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
})
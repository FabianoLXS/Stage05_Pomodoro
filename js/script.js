const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const setBtn = document.querySelector(".set")
const stopBtn = document.querySelector(".stop")
const soundOnBtn = document.querySelector(".soundOn")
const soundOffBtn = document.querySelector(".soundOff")
const minutesDisplay = document.querySelector("#minutes")
const seconsDisplay = document.querySelector("#seconds")
let minutes

playBtn.addEventListener('click', function() {
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
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
  minutesDisplay.textContent = minutes
})
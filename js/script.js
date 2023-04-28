const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")
const setBtn = document.querySelector("#set")
const stopBtn = document.querySelector("#stop")

playBtn.addEventListener



//Modal
const modal = {
  controls: document.querySelector("#controls"),
start() {
  modal.controls.classList.add("hide")
},
stop() {
  modal.controls.classList.remove("hide")
},
}
const playBtn = document.querySelector("#play")
const pauseBtn = document.querySelector("#pause")
const setBtn = document.querySelector("#set")
const stopBtn = document.querySelector("#stop")

playBtn.addEventListener

//Modal
const modal = {
  playBtn: document.querySelector("#play"),
  pauseBtn: document.querySelector("#pause"),
  setBtn: document.querySelector("#set"),
  stopBtn: document.querySelector("#stop"),
  start() {
    modal.playBtn.classList.add("hide")
  },
  stop() {
    modal.controls.classList.remove("hide")
  },
}

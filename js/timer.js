function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
  secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    if (minutes <= 0) {
      playBtn.classList.remove("hide")
      pauseBtn.classList.add("hide")
      setBtn.classList.remove("hide")
      stopBtn.classList.add("hide")

      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countDown()
  }, 1000)
}

//named export
export { countDown, resetTimer }
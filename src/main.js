function time_zone() {
  var time_zone_element = document.getElementById('ampm')
  var time_zone = new Date()
  time_zone_element.innerHTML = time_zone
    .toLocaleString('en-US', { hour: 'numeric', hour12: true })
    .slice(2, 5)
}
setInterval(time_zone, 1000)
// time_zone()

// FLIP ANIMATION
function flipClock() {
  let time = new Date()
  let hour = time.getHours()
  let min = time.getMinutes()
  if (hour == 0) {
    hour = 12
  }
  hour = `0${hour}`.slice(-2)
  min = `0${min}`.slice(-2)
  // hour = '01'
  // min = '38'
  flip(document.querySelector('[data-hour-tens]'), hour)
  flip(document.querySelector('[data-minute-tens]'), min)
}
flipClock()
// setInterval(flipClock, 1000)

// FLIP ANIMATIONS MAIN FUNCTION
function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector('.top')
  const startNumber = topHalf.textContent
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector('.bottom')
  const topFlip = document.createElement('div')
  topFlip.classList.add('top-flip')
  const bottomFlip = document.createElement('div')
  bottomFlip.classList.add('bottom-flip')

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener('animationstart', (e) => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener('animationend', (e) => {
    topFlip.remove()
  })
  bottomFlip.addEventListener('animationend', (e) => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
)

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

toggleSwitch.addEventListener('change', switchTheme, false)

document.addEventListener('keypress', e => {
  console.log(e)
  if (e.keyCode === 102) {
    if (document.fullscreenElement) {
      document
        .exitFullscreen()
        .then(() => console.log('Document Exited from Full screen mode'))
        .catch((err) => console.error(err))
    } else {
      document.documentElement.requestFullscreen()
    }
  }
})

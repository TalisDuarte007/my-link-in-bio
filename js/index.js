window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color1: 0xff0f,
    color2: 0xef00ff,
    colorMode: "lerpGradient",
    birdSize: 1.4,
    speedLimit: 3.0,
    separation: 10.0,
    quantity: 2.0,
    backgroundAlpha: 0.0,
  })
  setTimeout(() => {
    const main = document.querySelector('main')
    main.style.opacity = 1;
    main.style.filter = 'blur(0px)'
  }, 1000)
  
})

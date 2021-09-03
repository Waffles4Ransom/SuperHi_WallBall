let positionX
let positionY
let speedX
let speedY
let radius

function setup() {
  createCanvas(windowWidth, windowHeight)
  positionX = 100
  positionY = 200
  speedX = 5
  speedY = 5
  radius = 20
}

function draw() {
  background("#fe934b44")
  fill("#ffffff")
  noStroke()
  circle(positionX, positionY, radius * 2)
  positionX += speedX
  positionY += speedY
  if ( positionY > windowHeight - radius || positionY < radius) {
    speedY *= -1
  }
  if (positionX > windowWidth - radius || positionX < radius) {
    speedX *= -1
  }
  positionX = constrain(positionX, radius, windowWidth - radius)
  positionY = constrain(positionY, radius, windowHeight - radius)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
let positionX
let positionY
let speedX
let speedY

function setup() {
  createCanvas(windowWidth, windowHeight)
  positionX = 100
  positionY = 200
  speedX = 5
  speedY = 5
}

function draw() {
  background("#fe934b44")
  fill("#ffffff")
  noStroke()
  circle(positionX, positionY, 20)
  positionX += speedX
  positionY += speedY
  if ( positionY > windowHeight || positionY < 0) {
    speedY *= -1
  }
  if (positionX > windowWidth || positionX < 0) {
    speedX *= -1
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
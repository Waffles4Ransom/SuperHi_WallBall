let position
let speeed
let radius
let sound

function preload() {
  sound = loadSound('./assets/drop.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  position = createVector(100,200)
  speed = createVector(5, 5)
  radius = 20
}

function draw() {
  background("#fe934b44")
  fill("#ffffff")
  noStroke()
  circle(position.x, position.y, radius * 2)
  position.add(speed)
  // speed.mult(1.001)
 
  if ( position.y > windowHeight - radius || position.y < radius) {
    speed.y *= -1
    sound.play()
  }
  if (position.x > windowWidth - radius || position.x < radius) {
    speed.x *= -1
    sound.play()
  }
  position.x = constrain(position.x, radius, windowWidth - radius)
  position.y = constrain(position.y, radius, windowHeight - radius)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
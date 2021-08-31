function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background("#fe934b44")
  fill("#ffffff")
  noStroke()
  circle(mouseX, mouseY, 20)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
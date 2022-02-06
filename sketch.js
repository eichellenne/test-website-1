
function setup() {
  
  createCanvas(400, 400);
  background(220);

  input = createInput();
  input.position(80, 220);

  button = createButton('Send');
  button.position(input.x + input.width + 10, 220);
  button.mousePressed(sendMessage);

  greeting = createElement('h2','How are you?');
  greeting.position(80, 150);

}


function sendMessage() {
  
  message = input.value();
  greeting.html('Message typed: ' + message );
  
}



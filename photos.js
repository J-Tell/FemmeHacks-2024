const colors = ["purple", "pink", "blue", "green"];
var current_color = 0;

function getPreviousContent() {
    previous_color = ((current_color - 1) % 4);
    if (previous_color == -1) { previous_color = 3; }
    showContent(previous_color);
}
  
function getNextContent() {
    next_color = ((current_color + 1) % 4);
    showContent(next_color);
}

function clearContent(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function showContent(color) {
  var image_container = document.querySelectorAll('.image-container');

  clearContent(image_container[0]);

  var path = colors[color];

  for (num = 0; num < 30; num++) {
    let img = document.createElement("img");
    img.setAttribute("src", "photos-images/" + path + "/" + num + ".jpeg");
    img.setAttribute("class", "photo");
    image_container[0].appendChild(img);
  }

  current_color = color;
}
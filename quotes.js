var current_quote = 0;

function getPreviousContent() {
    previous_color = ((current_color - 1) % 3);
    if (previous_color == -1) { previous_color = 2; }
    showContent(previous_color);
}
  
function getNextContent() {
    next_color = ((current_color + 1) % 3);
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
    img.src = "photos-images/" + path + "/" + num + ".jpeg";
    image_container[0].appendChild(img);
  }

  current_color = color;
}
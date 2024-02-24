const colors = ["purple", "pink", "blue"];
var currentColor = 0;

function getPreviousContent() {
    previousColor = (currentColor - 1) % 3;
    showContent(previousColor);
}
  
function getNextContent() {
    nextColor = (currentColor + 1) % 3;
    showContent(nextColor);
}

function showContent(color) {
  var content = document.querySelectorAll('.content');
  var image_container = document.querySelectorAll('.image-container');

  while (image_container.firstChild) {
    image_container.removeChild(image_container.firstChild);
  }

  var path = colors[color];

  for (num = 0; num < 30; num++) {
    let img = document.createElement("img");
    img.src = "photos-images/" + path + "/" + num + ".jpg";
    image_container[0].appendChild(img);
  }

  currentColor = color;
}
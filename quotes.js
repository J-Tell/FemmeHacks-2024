// (define (modadd low high current addnum)
//   ( + (modulo (+ (- current low) addnum) (+ (- high low) 1)) low))

var current_quote = 0;

function getPreviousContent() {
    previous_quote = ((current_quote - 1) % 12);
    if (previous_quote == -1) { previous_quote = 11; }
    showContent(previous_quote);
}
  
function getNextContent() {
    next_quote = ((current_quote + 1) % 12);
    showContent(next_quote);
}

function clearContent(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

function showContent(quote) {
  var quote_container = document.querySelectorAll('.quote');

  clearContent(quote_container[0]);
  
  let img = document.createElement("img");
  img.src = "quotes/" + quote + ".png";
  quote_container[0].appendChild(img);

  current_quote = quote;
}
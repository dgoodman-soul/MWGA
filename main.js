$( document ).ready(function() {
  clearInterval(mainInterval);
  doEverything();
});

var getPurpleElements = function() {
  var divs = $('div[class*=purple]').toArray();
  var headers = $('header[class*=purple]').toArray();
  return divs.concat(headers);
}

var setToGreen = function(elements) {
 for (var i=0; i<elements.length; i++) {
    element = elements[i];
    element.style.setProperty('background-color', '#22a230');
  }
}

var doEverything = function() {
  var elements = getPurpleElements();
  setToGreen(elements);
}

mainInterval = setInterval(doEverything(), 500);

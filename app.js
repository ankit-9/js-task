/**
 * { in this file there are two function first for onclick and second one for addEventListener
 *
 */
function myFunction(elmnt) {
    elmnt.classList.toggle("red").classList.toggle("yellow");
}

function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}

function getData() {
  var data = document.getElementsByClassName('tick-tack');
  for (i = 0; i < data.length; i++) {
    addEvent(
        data[i],
        'click',
        function (elmnt) {
          elmnt.srcElement.classList.toggle("red");
          elmnt.srcElement.classList.toggle("yellow");
        }
    );
  }
}
window.onload = function() {
  getData();
}

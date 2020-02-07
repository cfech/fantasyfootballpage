// alert("test")

var poem = "Andreas(2017) Alec(2018) Connor()2019";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;
function speedRead() {
    mainEl.append(bodyEl);
  
    var poemInterval = setInterval(function() {
      if (words[i] === undefined) {
        clearInterval(poemInterval);
      } else {
        mainEl.textContent = words[i];
        i++;
      }
  
    }, millisecondsPerWord);
  }
  
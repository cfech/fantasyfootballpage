
var poem = "Fantasy Champions: Andreas(2017) - MVP:Alvin Kamara, Sacko     - Dan(2017),  Fantasy Champions:Alec(2018) - MVP: Patrick Mahomes, Sacko -  Dan(2018)(x2), Fantasy Champions:Connor(2019) - MVP:Aaron Jones,Sacko Ethan(2019)";
var words = poem.split(",");

var mainEl = document.getElementById("main");
var readEl = document.getElementById("array");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var millisecondsPerWord = 1500
var i = 0

function speedRead() {
  mainEl.append(bodyEl);

  setInterval(function() {
    if (words) {
      mainEl.textContent= words[i];i++
      
    } 
  }, millisecondsPerWord);
}


speedRead()
  

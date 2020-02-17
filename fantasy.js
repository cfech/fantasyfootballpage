
var ideas
var prevIdeas =[]
var newRulesArray = []


var datetime = null,
        date = null;


// Setting date on home page 
retrieveStorage()
function retrieveStorage() {
  if(localStorage.getItem("NewRules") !== null){
  prevRules = localStorage.getItem("NewRules").split(",")
  console.log("TCL: retrieveStorage -> prevRules", prevRules)
  console.log()

  newRulesArray.push(prevRules)
  console.log("TCL: retrieveStorage -> newRulesArray", newRulesArray)

  for (i = 0; i < prevRules.length && i < 10; i++) {
      let searchItem = $("<li>")
      searchItem.text(prevRules[i])
      $("#newRulesList").prepend(searchItem)
  }
}
}

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);
});




$("#add-rule").on("click", function () {
  $("#newRulesList").empty()
  event.preventDefault()
let newRule = $("#rule-input").val()
console.log(newRule)
newRulesArray.push(newRule)
localStorage.setItem("NewRules", newRulesArray)
console.log(newRulesArray)

  console.log(newRulesArray)

for (i = 0; i < newRulesArray.length; i++){
  var newRuleLi = $("<li>").addClass("newRule")
  newRuleLi.text(newRulesArray[i])
  console.log(newRulesArray)
  console.log(newRuleLi)
  $("#newRulesList").append(newRuleLi)
}
})










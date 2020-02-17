
var ideas
var prevIdeas =[]



var datetime = null,
        date = null;


// Setting date on home page 

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);
});


var newRulesArray = []

$("#add-rule").on("click", function () {
  event.preventDefault()
let newRule = $("#rule-input").val()
console.log(newRule)
newRulesArray.push(newRule)
console.log(newRulesArray)

  console.log(newRulesArray)
  
for (i = 0; i < newRulesArray.length; i++)
  var newRuleLi = $("<li>").addClass("newRule")
  newRuleLi.text(newRulesArray[i])
  console.log(newRulesArray)
  console.log(newRuleLi)
  $("#newRulesList").append(newRuleLi)
})
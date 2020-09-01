var wrapperEle = document.body.querySelector(".wrapper");
var headOneEle = document.body.querySelector(".headOne");
var headTwoEle = document.body.querySelector(".headTwo");
var headTwoEle1 = document.body.querySelector(".headTwo1");
var headTwoEle2 = document.body.querySelector(".headTwo2");
var headTwoEle3 = document.body.querySelector(".headTwo3");
var headTwoEle4 = document.body.querySelector(".headTwo4");
var buttonEle = document.body.querySelector(".editButton");
var miles;
var cost;
var MPGR;

function rewriteFunction(){
  var inputMiles = Number(prompt("Approximately how many miles do you drive per year?"));
    var inputCost = Number(prompt("What is the current cost of Gas in your area?"));
  
    miles=inputMiles
    cost=inputCost  
  writerFunction(inputMiles,inputCost);
}

function writerFunction(miles,cost){
  headOneEle.innerHTML="Average Miles Driven Per Year: " +miles
    headTwoEle.innerHTML="Cost of Gas in your area:$ " +cost
  function yearlyCost(miles, cost, MPGR){
  return (miles*cost)/MPGR;
}
  
  headTwoEle1.innerHTML="If you drive a car with an MPG rating of 12 for "+miles+" at $"+cost+" per gallon it would cost "+yearlyCost(miles, cost, 12)+" per year!";

headTwoEle2.innerHTML="If you drive a car with an MPG rating of 17 for "+miles+" at $"+cost+" per gallon it would cost "+yearlyCost(miles, cost, 17)+" per year!";

headTwoEle3.innerHTML="If you drive a car with an MPG rating of 26 for "+miles+" at $"+cost+" per gallon it would cost "+yearlyCost(miles, cost, 26)+" per year!";

headTwoEle4.innerHTML="If you drive a car with an MPG rating of 29 for "+miles+" at $"+cost+" per gallon it would cost "+yearlyCost(miles, cost, 29)+" per year!";
 
}
buttonEle.addEventListener("click", function(){
  rewriteFunction();
})
writerFunction();
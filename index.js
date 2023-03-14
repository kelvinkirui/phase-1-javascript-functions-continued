// code your solution here
function saturdayFun(argument = "roller-skate"){
    return `This Saturday, I want to ${argument}!`;
}
saturdayFun();

let mondayWork = function(will="go to the office"){
 return `This Monday, I will ${will}.`;
}
mondayWork();

function wrapAdjective (sample="*") {
  return function(stringOne="special"){
    return `You are ${sample}${stringOne}${sample}!`;
  }
}
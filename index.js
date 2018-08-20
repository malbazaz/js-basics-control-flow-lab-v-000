// Write your code in this file!
function scuberGreetingForFeet(someValue){
let hello;
if (someValue <= 400){
hello = "This one is on me!"
} else if (someValue >2000 && someValue<=2500) {
hello = "I will gladly take your thirty bucks."
} else if (someValue >2500){
  hello = "No can do."
}
return hello;
}

function ternaryCheckCity(value){const msg = value==="NYC"?"Ok, sounds good.":"No go.";
return msg;
}

function switchOnCharmFromTip(tip){
let hello;
switch(tip){
case "generous":
hello = "Thank you so much"
break;
  case "not as generous"
hello = "Thank you."
break;
default:
"Bye."
}
return
}

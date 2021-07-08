const age = prompt("What is your age?");
if(age > 0 && age < 15){
  console.log("Wont some body think of the children!!")
}
if(age >= 16 && age < 18){
  console.log("Sorry you cant come inside.")
}
if(age >= 18 && age < 21){
  console.log("Okay come in but no drinking.")
}
if(age ==21 || age >=22){
  console.log("Nice do a beer bong.")
}
if(age ==21){
  console.log("Happy Birthday!")
}
if(age % 2!==0){
  console.log("Your an odd one")
}
function perf(age){
  const sq = Math.sqrt(age);
  return Math.sqrt(age) % 1 === 0
}
if(perf){
  console.log("Holy crap, your perfect.")
}
else{
  console.log("Error, please enter a valid number.")
}


const age = prompt("Whats your age?")
if(age > 0 && < 15) {
  console.log("Wont someone think of the children!!")
}
if(age >= 16 && )

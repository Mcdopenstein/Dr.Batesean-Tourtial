

function tellFortune(a = "job", b = "loc", c = "partners_name", d = "kids" ) {
  console.log("You will be a " + a + " in " + b + " married to " + c + " with " + d + " of children.")
}

function calCircle(radius){
  const area =(radius * radius * Math.PI);
  console.log(area.toFixed(2));
}

function basicMath(a, b, c) {
  if(c == "add"){
    var result = a + b;
  }
  if(c == "subtract"){
    var result = a - b;
  }
  if(c == "multiply"){
    var result = a * b;
  }
  if(c == "divide"){
    var result = a / b;
  }
  return  result.toString();
}

  function random(min, max) {
    if(min == "NaN"){
      return "Thats not a number"
    }
  return Math.floor(Math.random() * (max - min + 1) + min);
    }

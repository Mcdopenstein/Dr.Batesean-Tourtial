
function addToArray(array, string){
  arrayC = array;
  arrayC.push(string);
  return arrayC;
}

function removeFromArray(array){
  arrayC = array;
  return arrayC.pop();
}

function  addToBeginning(array, string){
  arrayC = array;
  return arrayC.unshift(string);
}

function  removeFromBeginning(array){
  arrayC = array;
  return arrayC.shift();
}

function  returnNextItem(array, string){
  arrayC = array;
  return arrayC.splice(0,2);
}

function  returnNextItem(array, string){
  arrayC = string;
  return arrayC.splice(0,2);
}

function  returnNextItem(array, string){
  arrayC = array;
  return false;
}

function  returnChunk(array, string){
  arrayC = array;
  return arrayC.splice(0,3);
}

function  returnChunk(array, string){
  arrayC = array;
  return arrayC.splice(2,3);
}

function  returnChunk(array, string){
  arrayC = array;
  return false;
}

function sumValues(){
  forEach(array)
  return sumX.forEach(async function)
}


function joinStrings(array, string){
  const newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.push(string + array[i]);
  }
return newArray;
}

function joinStrings(array, string) {
arrayC = array;
return arrayC.map(x => string + x)
}

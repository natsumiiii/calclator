const result = document.querySelector('#result');

function checkSymbol(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

function edit(value) {
  /*
  &&,||,!,<,>,<=,>=,==
  */
  const isSymbol = checkSymbol(value);
  if(result.value == "" && isSymbol){
    return;
  }
  if(isSymbol && checkSymbol(result.value.substr(-1))) {
    return;
  }
  result.value += value;
}

function calc() {
  if(result.value == ""){
    return;
  }
  if(checkSymbol(result.value.substr(-1))){
    return;
  }
  result.value = eval(result.value);
}

function reset() {
  result.value = "";
}
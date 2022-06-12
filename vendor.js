var userInput = document.getElementById('input-number').value;
var addBtn = document.getElementById('btn-add');
var subtractBtn = document.getElementById('btn-subtract');
var multiplyBtn = document.getElementById('btn-multiply');
var divideBtn = document.getElementById('btn-divide');

var currentCalculationOutput = document.getElementById('current-calculation');
var currentResultOutput = document.getElementById('current-result');
var cco=0;
var cro=0;
var logArr=[];
// var logObj={
//   prevR,
//   number,
//   op,
//   result
// };
function saveLog(prevR,number,op,result){
  const logObj={
  prevR:prevR, 
  number:number, 
  op:op, 
  result:result
  }
  logArr.push(logObj);
  console.log(logObj);
}
function run1(){
  userInput = document.getElementById('input-number').value;
  userInput = parseFloat(userInput);
  if(isNaN(userInput)){
    userInput = 0;
  }
  cco = cro+userInput;
  currentCalculationOutput.textContent = cro +" + "+ userInput;
  currentResultOutput.textContent = cco;
  saveLog(cro,userInput,'add',cco);
  cro = currentResultOutput.textContent;
  cro = parseFloat(cro);
}
function run2(){
  userInput = document.getElementById('input-number').value;
  userInput = parseFloat(userInput);
  if(isNaN(userInput)){
    userInput = 0;
  }
  cco = cro-userInput;
  currentCalculationOutput.textContent = cro +" - "+ userInput;
  currentResultOutput.textContent = cco;
  saveLog(cro,userInput,'subtract',cco);
  cro = currentResultOutput.textContent;
  cro = parseFloat(cro);
}
function run3(){
  userInput = document.getElementById('input-number').value;
  userInput = parseFloat(userInput);
  if(isNaN(userInput)){
    userInput = 0;
  }
  cco = cro*userInput;
  currentCalculationOutput.textContent = cro +" * "+ userInput;
  currentResultOutput.textContent = cco;
  saveLog(cro,userInput,'multiply',cco);
  cro = currentResultOutput.textContent;
  cro = parseFloat(cro);
}
function run4(){
  userInput = document.getElementById('input-number').value;
  userInput = parseFloat(userInput);
  if(isNaN(userInput)){
    userInput = 0;
  }
  if(userInput==0){
    userInput=1;
  }
  cco = cro/userInput;
  currentCalculationOutput.textContent = cro +" / "+ userInput;
  currentResultOutput.textContent = cco;
  saveLog(cro,userInput,'divide',cco);
  cro = currentResultOutput.textContent;
  cro = parseFloat(cro);
}
addBtn.addEventListener('click',run1);
subtractBtn.addEventListener('click',run2);
multiplyBtn.addEventListener('click',run3);
divideBtn.addEventListener('click',run4);
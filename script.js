///////// Function restart
function reset(inputClassName, resultInnerClassName) {
  let inputAll = document.querySelectorAll(inputClassName);
  
  for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].value = "";
  }
  let resultAll = document.querySelectorAll(resultInnerClassName);
  for (let k = 0; k < resultAll.length; k++) {
    console.log(resultAll[k]);
    resultAll[k].innerHTML = "";
    console.log(resultAll[k]);
  }
};

///////// New Element
function createGoalsRow () {
  const createIn = document.createElement("div");
  document.querySelector(".container-calculator").appendChild(createIn);

  function inputsAdd (inputClassName) {
    const input = document.createElement("input");
    input.className = inputClassName;
    input.type = "number"
    input.onchange = () => calcResultScoreGeneral();
    createIn.appendChild(input);
  }
  
 function rangeAdd (rangeClassName) {
    const range = document.createElement("input");
    range.className = rangeClassName
    range.type = "range"
    range.min = 0
    range.max = 100
    range.step = 1
    range.value = 24
    range.oninput = function () { this.nextElementSibling.value = this.value; };
    range.onchange = () => calcResultScoreGeneral();
    createIn.appendChild(range);
  };
  
 function outputAdd (outputClassName) {
    const output = document.createElement("output")
    output.value = 24
    output.className = outputClassName
    createIn.appendChild(output);
  }
  
  
  inputsAdd ("goalHome goalGeneral");
  inputsAdd ("goalAway goalGeneral");
  
  const buttonDel = document.createElement("button");
  buttonDel.className = "deleInput"
  buttonDel.innerHTML = "x"
  buttonDel.id = "elem"
  buttonDel.setAttribute("onclick", "deleteParentContainer(event)")
  createIn.appendChild(buttonDel);

  const breake = document.createElement("br");
  createIn.appendChild(breake);
  
  rangeAdd ("change goalHome1");
  outputAdd ("goalHome-output");
  
  rangeAdd ("change goalAway1");
  outputAdd ("goalAway-output");
 
}

///////// delete Input
function deleteParentContainer(event) {
  event.target.parentNode.remove();
};

///////// input range
function sumRanges(outputAll) {
  let rangeAll = document.querySelectorAll(outputAll)
  sum = 0;
  for (let i = 0; i < rangeAll.length; i++) {
    sum += +rangeAll[i].value;
  }
  return sum
};

function calcResultScore(inputClassName, resultInnerClassName, rangeOutputClassName) {

  const inputs = document.querySelectorAll(inputClassName);
  let resultScore = 0;
  const rangeOutputs = document.querySelectorAll(rangeOutputClassName);
  const rangeOutputsValues = [...rangeOutputs].map(rangeOutput => {
    return rangeOutput.value
  })
  const sumRangesValues = sumRanges(rangeOutputClassName)
  let rangeCalcValues = rangeOutputsValues.map(rangeOutputValue => {
    return rangeOutputValue / sumRangesValues;
  })
  for (let i = 0; i < inputs.length; i++) {
    resultScore += (+inputs[i].value) * rangeCalcValues[i];
  }
  resultScore = resultScore.toFixed(1);
  document.querySelector(resultInnerClassName).innerHTML = resultScore;
};

function calcResultScoreGeneral() {
  calcResultScore('.goalHome', '.gols-result1', '.goalHome-output');
  calcResultScore('.goalAway', '.gols-result2', '.goalAway-output');
}

document.querySelector('.b-1').addEventListener('click', () => {
  calcResultScoreGeneral();
});

document.querySelector('.create').addEventListener('click', () => {
  createGoalsRow();
});

document.querySelector('.del').addEventListener('click', () => {
  reset('.goalGeneral', '.resultGeneral');
});


////////change registr-form

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


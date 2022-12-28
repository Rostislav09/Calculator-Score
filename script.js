/////////Header
function reset(a, b) {
  let inp = document.querySelectorAll(a);
  //i = 0;
  for (let i = 0; i < inp.length; i++) {
    inp[i].value = "";
  }
  let res = document.querySelectorAll(b);
  for (let k = 0; k < res.length; k++) {
    console.log(res[k]);
    res[k].innerHTML = "";
    console.log(res[k]);
  }
};

///////// New Element
function createGoalsRow () {
  const createIn = document.createElement("div");
  document.querySelector(".container-calculator").appendChild(createIn);

  const input = document.createElement("input");
  input.className = "goalHome goalGeneral"
  input.type = "number"
  createIn.appendChild(input);

  const input2 = document.createElement("input");
  input2.className = "goalAway goalGeneral"
  input2.type = "number"
  createIn.appendChild(input2);

  const buttonDel = document.createElement("button");
  buttonDel.className = "deleInput"
  buttonDel.innerHTML = "x"
  buttonDel.id = "elem"
  buttonDel.setAttribute("onclick", "deleteParentContainer(event)")
  createIn.appendChild(buttonDel);

  const breake = document.createElement("br");
  createIn.appendChild(breake);

  const range = document.createElement("input");
  range.className = "change goalHome1"
  range.type = "range"
  range.min = 0
  range.max = 100
  range.step = 1
  range.value = 24
  range.oninput = function () { this.nextElementSibling.value = this.value; };
  createIn.appendChild(range);

  const output = document.createElement("output")
  output.value = 24
  output.className = "goalHome-output"
  createIn.appendChild(output);

  const range2 = document.createElement("input");
  range2.className = "change goalAway1"
  range2.type = "range"
  range2.min = 0
  range2.max = 100
  range2.step = 1
  range2.value = 80
  range2.oninput = function () { this.nextElementSibling.value = this.value; };
  createIn.appendChild(range2);

  const output2 = document.createElement("output")
  output2.value = 24
  output2.className = "goalAway-output"
  createIn.appendChild(output2);

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

document.querySelector('.b-1').addEventListener('click', () => {
  calcResultScore('.goalHome', '.gols-result1', '.goalHome-output');
  calcResultScore('.goalAway', '.gols-result2', '.goalAway-output');
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
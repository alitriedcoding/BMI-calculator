const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("input-result");
const resultconditionEl = document.getElementById("result-condition");

btnEl.addEventListener("click", function () {
  const heightEl = document.getElementById("input-height").value / 100;
  const wigthEl = document.getElementById("input-weight").value;

  const calculat = wigthEl / (heightEl * heightEl);
  resultEl.value = calculat;
  if (calculat < 18) {
    resultconditionEl.innerText = "Under Wigth";
  } else if (calculat >= 18 && calculat < 30) {
    resultconditionEl.innerText = "Normal Wigth";
  } else if (calculat >= 30) {
    resultconditionEl.innerText = "Obesity";
  }
});

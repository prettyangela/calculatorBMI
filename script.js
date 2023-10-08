function calculateBMI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const bmi = weight / ((height / 100) ** 2);

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your BMI is <span>${bmi.toFixed(1)}</span>`;

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  resultElement.innerHTML += ` which means you are <span>${category}</span>`;
}

document.getElementById('btn-calculate').addEventListener('click', calculateBMI);

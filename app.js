
const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
  const tipAmount = document.querySelector('#tip-amount');
  const totalPerPerson = document.querySelector('#total-per-person');
  const billAmount = document.querySelector('#bill-amount');
  const numberOfPeople = document.querySelector('#number-of-people');
  const percentButtons = document.querySelectorAll('input[type=radio]');

  for (percentButton of percentButtons) {
    if (percentButton.checked) {
      console.log(percentButton.value);
      tipAmount.textContent = (billAmount.value * parseInt(percentButton.value) / 100).toFixed(2);
      totalPerPerson.textContent = ((Number(billAmount.value) + Number(tipAmount.textContent)) / numberOfPeople.value).toFixed(2);
    }
  }
});

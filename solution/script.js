
// Your users should be able to: 

// - View an age in years, months, and days after submitting a valid date through the form
// - Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The year is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)

//dom selection

const form = document.querySelector('.form');
const day = document.querySelector('#day'); 
const month = document.querySelector('#month'); 
const year = document.querySelector('#year'); 



const errorMessage = function(input, message){
  input.previousElementSibling.style.color = 'var(--Light-red)';
  input.style.borderColor = 'var(--Light-red)';
  input.nextElementSibling.classList.remove('hidden');
  input.nextElementSibling.textContent = message;
}
const validateInput = function(input, message){
  const id = input.id;
  const value = Number(input);

switch (input.id) {
  case 'day':
    if (!value > 0 && !value <= 31){
      errorMessage(input, 'must be a valid day');
    }
    break;
  case 'month':
    if (!value > 0 && !value <= 12){
      errorMessage(input, 'must be a valid month');
    }
    break;
  case 'year':
    if (!value > 0 && !value <= 31){
      errorMessage(input, 'must be a valid day');
    }
    break;
  default:
    break;
}

}

form.addEventListener('submit', e => {
  e.preventDefault()

  document.querySelectorAll('input').forEach(input => {
    if(!input.value){
      errorMessage(input, 'This field is required');
    }else{
      console.log(input.value);
      validateInput(input, 'message')
    }
  });

  // form.reset();
})

const dateDiff = function(day, month, year){
  // const now = new Date();
  // const before = new Date(`${day} ${month} ${year}`);
  // const years = now.getFullYear() - before.getFullYear();
  // const months = now.getMonth() - before.getMonth();
  // const days = now.getDate();
  
  // console.log(years, months, days);

  const now = new Date().getTime();
  console.log(now);
  const before = new Date('9 5 2000');
  l

  

}
//get no of milisecs btw now and date in the past

dateDiff(6, 8, 2002);
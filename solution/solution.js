// Users should be able to:

// - View an age in years, months, and days after submitting a valid date through the form
// - Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The year is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page
// - **Bonus**: See the age numbers animate to their final number when the form is submitted

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')


const displayMessage = function(input, message){
  console.log(`${input.id} is required`);
  input.previousElementSibling.style.color = 'var(--Light-red)';
  input.style.borderColor = 'var(--Light-red)';
  input.nextElementSibling.classList.remove('hidden');
  input.nextElementSibling.textContent = message;
}

const validateInput = function(){
  inputs.forEach(input => {
    let value = Number(input.value)
    if(!value){
      
      displayMessage(input, `${input.id} is required`)
    }else{
      if(input.id === 'day'){
        if(value > 1 && value <= 31){
          console.log('date is working');
        }else{
          console.log(`${input.id} no dey work 000`);
        }
      }else if(input.id === 'month'){
        if(value > 1 && value <= 12){
          console.log(`${input.id} working`);
        }else{
          console.log(`${input.id} is not working`);
        }
      }else if(input.id === 'year'){
        if(value >= 1950 && value < new Date().getFullYear()){
          console.log(`${input.id} is working`);
        }else{
          console.log(`${input.id} is not working`);
        }
        
      }
    }
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()

  if(validateInput()){
    console.log('true');
  }
})
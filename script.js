const password = document.getElementById("pwd")
const confirm_password = document.getElementById("confirm-pwd");
const inputs = document.querySelectorAll("input");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

for(let input of inputs) {
    input.addEventListener('invalid', (event) => {
      input.classList.add('error');    
    }, false);  

  }



password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
function validateName(){
  let inputName = document.querySelector("#name1");
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name");

  if(valueName == ""){
      errorName.innerHTML = "name cannot be empty!"
      inputName.style.border = "1px solid red";
      return false;
  }else{
      errorName.innerHTML = ""
      inputName.style.border = "1px solid black";
      return true;
  }
}

function isEmailValid(email) {
  let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return res.test(email);
}

function validateEmail(){
  let inputEmail = document.querySelector("#email1");
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email");

  if(valueEmail == ""){
      errorEmail.innerHTML = "Email cannot be empty!"
      inputEmail.style.border = "1px solid red";
      return false;
  }else if(isEmailValid(valueEmail)){
      errorEmail.innerHTML = ""
      inputEmail.style.border = "1px solid black";
      return true;
  }else{
      errorEmail.innerHTML = "Email is not valid"
      inputEmail.style.border = "1px solid red";
      return false;
  }
}

function validateMessage(){
  let inputMessage = document.querySelector("#message1");
  let valueMessage = inputMessage.value;
  let errorMessage = document.querySelector("#error-message1");

  if (valueMessage == ""){
      errorMessage.innerHTML = "Message cannot be empty!"
      inputMessage.style.border = "1px solid red";
      return false;
  }else{
      errorMessage.innerHTML = ""
      inputMessage.style.border = "1px solid black";
      return true;
  }
}

let contactBtn = document.querySelector("#btn-submit");
contactBtn.addEventListener("click", function(e){
    e.preventDefault();

    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();
    
    if (isEmailValid && isNameValid && isMessageValid){
        let contactForm = document.querySelector("#contact-form");
        contactForm.submit(); //SUBMIT FORM
        alert("Thank you!")
    }
});
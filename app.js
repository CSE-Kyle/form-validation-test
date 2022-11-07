function formSubmit() {
   const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
   const name = document.querySelector("#name-input").value;

   const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const email = document.querySelector("#email-input").value;

   const radio = document.querySelector('input[name="radio"]:checked');
   const radioValue = radio ? radio.value : null;

   const textarea = document.querySelector("#text-area").value;
   const textareaValue = textarea ? textarea : null;

   if(!regName.test(name) || !regEmail.test(email) || !radioValue || !textareaValue) {
      alert("Please fill out required information");
   } else {
      alert("Form submitted, thank you!");
      formSubmit.submit();
      formSubmit.reset();
      return false;
   }
}
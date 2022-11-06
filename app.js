function formSubmit() {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const name = document.querySelector("#name-input").value;

    if(!regName.test(name)) {
       alert("Please fill out required information");
    } else {
       alert("Form submitted, thank you!");
       formSubmit.submit();
       formSubmit.reset();
       return false;
    }
}
function clickSubmit() {
    window.alert('thank you, your form has been submitted!');

    const formSubmit = document.getElementById('submit');
    formSubmit.submit();
    formSubmit.reset();

    return false;
}
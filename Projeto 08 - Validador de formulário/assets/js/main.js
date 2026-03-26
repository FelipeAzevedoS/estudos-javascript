const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const buttonSubmit = document.getElementById('button');
const spanName = document.getElementById('spanName');
const spanEmail = document.getElementById('spanEmail');
const spanPassword = document.getElementById('spanPassword');
const spanSuccess = document.getElementById('success');


function validateName () {
    if(inputName.value.length < 3) {
        spanName.innerText = '*Enter a name with 3 or more characters';
        return false
    }
    spanName.innerText = '';
    return true
};

function validateEmail () {
    if(!inputEmail.value.includes('@') || !inputEmail.value.includes('.')) {
        spanEmail.innerText = '*Type a valid e-mail';
        return false
    }
    spanEmail.innerText = '';
    return true
};

function validatePassword () {
    if(inputPassword.value.length < 6) {
        spanPassword.innerText = '*The password must have 6 or more characters';
        return false
    }
    spanPassword.innerText = '';
    return true
};

buttonSubmit.addEventListener('click', function () {
    spanSuccess.innerText = '';
    if(!validateName()) return;
    if(!validateEmail()) return;
    if(!validatePassword()) return;
    spanSuccess.innerText = 'Your form has been submitted!';
});
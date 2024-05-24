function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var mobile = document.getElementById('mobile').value.trim();
    var error = false;

    var errorElements = document.getElementsByClassName('formerror');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerHTML = '';
    }

    if (name.length < 3) {
        document.querySelector('#name + b > span').innerHTML = '**Name must be greater than 3 characters!';
        error = true;
    }

    if (name.length > 20) {
        document.querySelector('#name + b > span').innerHTML = '**Name cannot be more than 20 characters!';
        error = true;
    }

    if (!isValidEmail(email)) {
        document.querySelector('#email + b > span').innerHTML = '**Enter a valid email address!';
        error = true;
    }

    if (password.length < 8) {
        document.querySelector('#password + b > span').innerHTML = '**Password should have minimum 8 characters!';
        error = true;
    }

    if(password.length > 20) {
        document.querySelector('#password + b > span').innerHTML = '**Password should not be greater than 20 characters';
        error = true; 
    }

    if (password !== confirmPassword) {
        document.querySelector('#confirmPassword + b > span').innerHTML = '**Password should be same as above!';
        error = true;
    }

    if (!isValidMobile(mobile)) {
        document.querySelector('#mobile + b > span').innerHTML = '**Enter a valid mobile number!';
        error = true;
    }
    return !error;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobile(mobile) {
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}
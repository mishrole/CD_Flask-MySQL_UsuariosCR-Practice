'use strict'

const form = document.querySelector('#formUser');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    const validate = [firstname, lastname, email];

    validate.forEach(element => {
        if (element.value.length === 0) {
            element.nextElementSibling.classList.add('show');
        } else {
            element.nextElementSibling.classList.remove('invalid-feedback');
            element.nextElementSibling.innerHTML = 'Looks good!';
            element.nextElementSibling.classList.add('valid-feedback');
            element.nextElementSibling.classList.add('show');
        }
    });

    const totalValid = Array.from(document.querySelectorAll('.valid-feedback')).length;

    if (totalValid === validate.length) {
        return true;
    } else {
        e.preventDefault();
    }
});


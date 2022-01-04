const button = document.querySelector(".ss-button");

const pop = document.querySelector('.popup-wrapper');
button.addEventListener('click',()=>{
    pop.style.display="block";
})
const close = document.querySelector('.popup-close');

close.addEventListener('click',()=>{
    pop.style.display='none';
});
const form = document.querySelector('form');
const nom = document.querySelector('#full-name');
const mail = document.querySelector('#mail');
const number = document.querySelector('#number');

const aff = document.querySelector('.name');
const Amail = document.querySelector('.mail');
const Anumber = document.querySelector('.number');
console.log(aff.textContent);

form.addEventListener('submit',e =>{
    e.preventDefault();
    aff.textContent+=`${nom.value}`;
    Amail.textContent+=`${mail.value}`;
    Anumber.textContent+=`${number.value}`;

});







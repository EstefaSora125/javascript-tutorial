'use strict'

const VAL_EMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function validateForm(event){
  event.preventDefault();

  let name = document.querySelector('#contact_form').querySelector('#user_name'),  
  email = document.querySelector('#contact_form').querySelector('#email_this'),
  number = document.querySelector('#contact_form').querySelector('#user_phone_number'),
  textBox = document.querySelector('#contact_form').querySelector('#text-box'),  
  box =  document.querySelector('#contact_form').querySelectorAll('input[type="checkbox"]');
  
  validateName(name);
  validarEmail(email);
  validatePhone(number);
  validateChecBox(box);

  let valu = [name.value, email.value, number.value, validateChecBox(box), textBox.value];
  let pu = [" Name:   ", "Email:   ", "Phone number:   ", "Courses:   ", "Message:   "];

  for (let index = 0; index < valu.length; index++) {
    for (let ind = 0; ind < pu.length; ind++) {
      showInfotmation(pu, valu);      
    }    
  }
};

function validateName(name){
  if (name.value =='') {
    name.classList.add('form_error');
    alert('You have to write your name');
  }else{
    name.classList.remove('form_error');
  }
};

function validarEmail(Email) {
  if (Email.value == ''){
    Email.classList.add('form_error');
    alert('Write an email');
  } else if(!VAL_EMAIL.test(Email.value)) {
    alert('The email is not correct');
  }  else{
    Email.classList.remove('form_error');
  }
};

function validatePhone(number){
  if (isNaN(number.value) == true || number.value =='') {
    number.classList.add('form_error');
    alert('You must type numbers');
  } else {
    number.classList.remove('form_error');
  }
};

function validateChecBox(courses) {
  let select = null;
  let count = [];
  for (let index = 0; index < courses.length; index++) {
    if (courses[index].checked ==true) {
      select = courses[index].value;
      let show = count.push(select);
    }
  }
  if(select == null){
    alert ('You have to select a course');
  }
    return count; 
};
   
function showInfotmation(label, text=[]){
  document.getElementById("paragraph").innerHTML = label +  '  <br> ' + text; 
};

const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
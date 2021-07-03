const salary=document.querySelector('#salary');
const salaryOutput=document.querySelector('.salary-output')
salary.addEventListener('input', function () {
    salaryOutput.textContent = salary.value;
    console.log(salaryOutput.textContent);
}); 

//Name validation
const nameText=document.querySelector('#name');
const nameTextError=document.querySelector('.name-error')
nameText.addEventListener('input',function(){
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$')
    console.log(nameText);
    if(nameRegex.test(nameText.value))
        nameTextError.textContent=' ';
    else
        nameTextError.textContent='Name invalid'
});

//Email validation
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let pattern = RegExp('^[A-Z a-z]{1,}([+-.])[A-Z a-z 0-9 _+-.][@]{1}[A-Z a-z 0-9 +-]{1,}[.]{1}[a-z]{2,3}([.]{1}[a-z]{2})*$');
    console.log(email);
    if(pattern.test(email.value))
        emailError.textContent='';
    else
        emailError.textContent="Invalid Email";
});

//Mobile number validation
const number = document.querySelector('#tel');
const numberError = document.querySelector('.tel-error');
number.addEventListener('input', function () {
    let numberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if (numberRegex.test(number.value))
        numberError.textContent = ' ';
    else
        numberError.textContent = 'Invalid Number!';
});  

//password validation minimum 8 characters
const pwd = document.querySelector('#pwd');
const passworderror = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
let passwordpattern = RegExp('^(?=[0-9 A-Z a-z !@#$%^&();:]{8,}$)(?=.[A-Z]{1,})(?=.[0-9]{1,})(?=.[!@#$%^&();:]{1,}).$');
    if (passwordpattern.test(pwd.value))
        passworderror.textContent = ' ';
    else
        passworderror.textContent = 'Invalid Password!';
});
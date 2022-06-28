const email = document.querySelector('#emailInput');
const button = document.querySelector('button');
const errorMsg = document.getElementById('errorMsg');
const input = document.querySelector('input');
let emailVal = email.value;


input.addEventListener('input', (e) => {
    // console.log(input.value);
    setTimeout(check, 5000);
})
button.addEventListener('submit', (e) =>{
    checkEmpty
})
function check() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailVal = email.value;
    if(regex.test(emailVal) === false){
        errorMsg.style.visibility='visible'
        input.classList.add('invalid')
    }   
    else{
        errorMsg.style.visibility='hidden'
        input.classList.remove('invalid')
        
    }
}

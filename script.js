let userMail = document.getElementById('user-mail');
let userPass = document.getElementById('user-pass');
let submitBtn = document.getElementById('submit-btn');
let passwordError = document.querySelector('.password-error-text');
let emailError = document.querySelector(".email-error-text")
let lock = document.querySelector(".fa-lock");
lock.addEventListener('click', () => {
    lock.classList.toggle("fa-lock-open")
    if(userPass.type === "password"){
        userPass.setAttribute('type', 'text')
      }else{
          userPass.setAttribute('type', "password")
      }
})
setInterval(submitBtn.addEventListener('click', () => {
    if(userPass.value.length <= 9){
        passwordError.classList.add('active-pass-error');
    }else{
        passwordError.classList.remove('active-pass-error')
    }
}),1000);
setInterval(submitBtn.addEventListener('click', () => {
    if(userMail.value.length <= 9){
        passwordError.classList.add('active-mail-error');
    }else{
        passwordError.classList.remove('active-mail-error')
    }
}),1000);

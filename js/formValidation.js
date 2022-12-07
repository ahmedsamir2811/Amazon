

const regBtn = document.getElementById('regbtn') 

const activeReg = () => {
    if (username.classList.contains("success") && email.classList.contains("success") && psw.classList.contains("success") && pswrepeat.classList.contains("success")) {
        regbtn.removeAttribute("disabled")
    } else {
        regbtn.setAttribute("disabled", "disabled")
    }
}

const userName =  document.getElementById('username')
const userMessage = document.getElementById('usermessage')

userName.addEventListener("keyup", (eo) => {
    username.classList.add("error")
    userMessage.style.display = "block"
    if (username.value.length > 2) {
        username.classList.add("success")
        userMessage.style.display = "none"
        username.nextElementSibling.style.opacity = "1"
    } else {
        username.classList.remove("success")
        userMessage.style.display = "block"
        username.nextElementSibling.style.opacity = "0"
    }

    activeReg()
})

const email  = document.getElementById('email')
const emailMessage = document.getElementById('emailmessage')

email.addEventListener("keyup", (eo) => {
    email.classList.add("error")
    emailMessage.style.display = "block"
    const regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regEmail.test(email.value)) {
        email.classList.add("success")
        emailMessage.style.display = "none"
        email.nextElementSibling.style.opacity = "1"
    } else {
        email.classList.remove("success")
        emailMessage.style.display = "block"
        email.nextElementSibling.style.opacity = "0"
    }

    activeReg()
})

// ali@gmail.com
const pswMessage = document.getElementById('pswmessage')
const psw = document.getElementById('psw')

psw.addEventListener("keyup", (eo) => {
    psw.classList.add("error")
    pswMessage.style.display = "block"
    const regPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (regPassword.test(psw.value)) {
        psw.classList.add("success")
        pswMessage.style.display = "none"
        psw.nextElementSibling.style.opacity = "1"
    } else {
        psw.classList.remove("success")
        pswMessage.style.display = "block"
        psw.nextElementSibling.style.opacity = "0"
    }

    activeReg()
})


// aaA888888@
const pswRepeat = document.getElementById('pswrepeat') 
const repeatMessage = document.getElementById('repeatmessage')

pswRepeat.addEventListener("keyup", (eo) => {
    pswRepeat.classList.add("error")
    repeatMessage.style.display = "block"

    if (pswRepeat.value === psw.value) {
        pswRepeat.classList.add("success")
        repeatMessage.style.display = "none"
        pswRepeat.nextElementSibling.style.opacity = "1"
    } else {
        pswRepeat.classList.remove("success")
        repeatMessage.style.display = "block"
        pswRepeat.nextElementSibling.style.opacity = "0"
    }

    activeReg()
})


// zoom effect

const  creatAccount = document.getElementById('createAccount')
const boxForm = document.getElementById('boxForm')
const form = document.getElementById('form')

createAccount.addEventListener("click", (eo) => {
    boxForm.style.display = "flex"

    setTimeout(() => {
        form.style.transform = "scale(1)"
    }, 100);
})

const close = document.getElementById("close")

close.addEventListener("click", (eo) => {

    form.style.transform = "scale(0)"

    setTimeout(() => {
        boxForm.style.display = "none"
    }, 400);
})















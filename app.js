const email = document.querySelector("#exampleInputEmail1");
const password = document.querySelector("#exampleInputPassword1");
const btn = document.querySelector("#submit");
// alert()



btn.addEventListener("click",(e) => {
    e.preventDefault()
    let Semail = email.value;
    let Spassword = email.value;
    if(Semail != '' && Spassword != '') {
        localStorage.setItem('tesla',{small: Semail,Spassword: Spassword});
        window.location = './index.html'
    }
})

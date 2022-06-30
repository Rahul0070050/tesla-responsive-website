const loginbtn = document.querySelector('#log');

function checkLogin() {

    if(!localStorage.getItem('tesla')) {
        console.log(window.location);
        if(window.location.origin == 'https://rahul0070050.github.io/tesla-responsive-website') {
            window.location = './login.html'
        }
    } else {
        loginbtn.innerHTML = `<a class="nav-link" onclick="logout();">Logout</a>`
    }
}
function logout() {
    if(confirm('do you realy want to loguot')) {
        localStorage.removeItem('tesla');
        loginbtn.innerHTML = `<a class="nav-link" onclick="logout();">Login </a>`
        checkLogin();
    }
}

checkLogin();
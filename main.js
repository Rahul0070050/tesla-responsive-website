const loginbtn = document.querySelector('#log');

function checkLogin() {

    if(!localStorage.getItem('tesla')) {
        console.log(window.location);
        if(window.location.origin == 'http://127.0.0.1:5500') {
            window.location = './login.html'
        }
    } else {
        loginbtn.innerHTML = `<a class="nav-link" onclick="logout();">Logout</a>`
    }
}
function logout() {
    if(confirm('do you realy want to loguot')) {
        localStorage.removeItem('tesla');
        checkLogin();
    }
}

checkLogin();
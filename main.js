const loginbtn = document.querySelector('#log');

function checkLogin() {

    if(!localStorage.getItem('tesla')) {
        console.log(window.location);
        const href = window.location.href;
        const LOCATION_1 = 'https://rahul0070050.github.io/tesla-responsive-website/'
        const LOCATION_2 = 'https://rahul0070050.github.io/tesla-responsive-website/index'
        const LOCATION_3 = 'https://rahul0070050.github.io/tesla-responsive-website/index.html'
        if(href == LOCATION_1 || href == LOCATION_2 || href == LOCATION_3) {
            window.location.href = 'https://rahul0070050.github.io/tesla-responsive-website/login'
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
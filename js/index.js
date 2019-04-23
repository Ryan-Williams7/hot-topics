const navItems = document.querySelectorAll("header nav a");
const container = document.querySelector(".container");





function handleClick(ev) {
    ev.preventDefault();
    
    path = ev.target.href;
    
    handleAjax(path);  
}


function handleAjax(urlValue) {
    fetch(urlValue)
    
    .then(function (rsp) {
        return rsp.text();
    })
    
    .then(function (data) {
        container.innerHTML = data;
    })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);

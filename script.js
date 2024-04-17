const menuButton = document.getElementById("menu-button");
const elements = document.getElementsByClassName("menu-item");
const navLeft = document.getElementById("nav-left");
const navRight = document.getElementById("nav-right");
menuButton.addEventListener("click", function () {
    if (menuButton.getAttribute('src') === 'images/MenuButton.png') {
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("panUp");
            elements[i].classList.remove("panDown");
        }
    } else {
        document.body.style.overflow = 'auto';
        menuButton.src = 'images/MenuButton.png'
        menuButton.style.marginTop = '-3%';
        menuButton.style.marginBottom = '-3%';
        menuButton.style.marginLeft = '0';
        navLeft.style.fontFamily = 'CloisterBlack';
        navLeft.style.fontSize = '200%';
        navLeft.textContent = 'Travel';
        navRight.style.fontFamily = 'CloisterBlack';
        navRight.style.fontSize = '200%';
        navRight.textContent = 'Inferno';
        navRight.style.marginLeft = '-26%';
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("panUp");
            elements[i].classList.add("panDown");
        }
    }
});
elements[0].addEventListener("animationend", function () {
    if (elements[0].classList.contains("panUp")) {
        menuButton.src = 'images/MenuButtonX.png';
        menuButton.style.marginTop = '4.5%';
        menuButton.style.marginBottom = '4.5%';
        menuButton.style.marginLeft = '-1%';
        navLeft.style.fontFamily = 'Cinzel';
        navLeft.style.fontSize = '150%';
        navLeft.textContent = 'Home';
        navRight.style.fontFamily = 'Cinzel';
        navRight.style.fontSize = '150%';
        navRight.textContent = 'About';
        navRight.style.marginLeft = '-26.5%';
    }
});
elements[elements.length-1].addEventListener("animationend", function () {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("panDown");
    }
});
navLeft.addEventListener("mouseover", function () {
    if (navLeft.style.fontFamily === 'Cinzel') {
        navLeft.style.color = '#bbb';
        navLeft.style.cursor = 'pointer';
    } else {
        navLeft.style.color = 'white';
        navLeft.style.cursor = 'default';
    }
});
navLeft.addEventListener("mouseout", function () {
    navLeft.style.color = 'white';
    navLeft.style.cursor = 'default';
});
navRight.addEventListener("mouseover", function () {
    if (navRight.style.fontFamily === 'Cinzel') {
        navRight.style.color = '#bbb';
        navRight.style.cursor = 'pointer';
    } else {
        navRight.style.color = 'white';
        navRight.style.cursor = 'default';
    }
});
navRight.addEventListener("mouseout", function () {
    navRight.style.color = 'white';
    navRight.style.cursor = 'default';
});

navLeft.addEventListener("click", function () {
    if (navRight.style.fontFamily == 'Cinzel') {
        window.open("./", "_self");
    }
});

const buttonTop = document.getElementById("button-top");
buttonTop.addEventListener("click", function () {
    window.open("#top", "_self");
});

const vestibule = document.getElementById("vestibule");
vestibule.addEventListener("click", function () {
    window.open("vestibule.html", "_self");
});
const firstCircle = document.getElementById("first-circle");
firstCircle.addEventListener("click", function () {
    window.open("first-circle.html", "_self");
});
const secondCircle = document.getElementById("second-circle");
secondCircle.addEventListener("click", function () {
    window.open("second-circle.html", "_self");
});
const thirdCircle = document.getElementById("third-circle");
thirdCircle.addEventListener("click", function () {
    window.open("third-circle.html", "_self");
});
const fourthCircle = document.getElementById("fourth-circle");
fourthCircle.addEventListener("click", function () {
    window.open("fourth-circle.html", "_self");
});
const fifthCircle = document.getElementById("fifth-circle");
fifthCircle.addEventListener("click", function () {
    window.open("fifth-circle.html", "_self");
});
const sixthCircle = document.getElementById("sixth-circle");
sixthCircle.addEventListener("click", function () {
    window.open("sixth-circle.html", "_self");
});
const seventhCircle = document.getElementById("seventh-circle");
seventhCircle.addEventListener("click", function () {
    window.open("seventh-circle.html", "_self");
});
const eighthCircle = document.getElementById("eighth-circle");
eighthCircle.addEventListener("click", function () {
    window.open("eighth-circle.html", "_self");
});
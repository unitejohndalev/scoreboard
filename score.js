let home = 0;


let scoreHome = document.getElementById("scorehome-ctn");

function btn1() {
    home += 1;
    scoreHome.textContent = home;
}

function btn2() {
    home += 2;
    scoreHome.textContent = home;
}

function btn3() {
    home += 3;
    scoreHome.textContent = home;
}

let guest = 0;

let scoreGuest = document.getElementById("scoreguest-ctn");

function btn01() {
    guest += 1;
    scoreGuest.textContent = guest;
}

function btn02() {
    guest += 2;
    scoreGuest.textContent = guest;
}

function btn03() {
    guest += 3;
    scoreGuest.textContent = guest;
}

function reset() {
    
    scoreHome.textContent = 0;
    home = 0
    scoreGuest.textContent = 0;
    guest = 0
}


let changeName = document.getElementById("change-name")
let renamebtnHome = document.getElementById("renamebtnhome")

function renamehomebtn() {
  let inputnameEl = document.getElementById("inputnamehome-el").value;
  changeName.textContent = inputnameEl;
}
let changeguestName = document.getElementById("changeguest-name")
function renameguestbtn() {
  let inputnameguestEl = document.getElementById("inputnameguest-el").value;
  changeguestName.textContent = inputnameguestEl;
}

// changing colors onclick btns


function white() {  

let changeName = document.getElementById("change-name").style.color = "white"
}

function red() {  

let changeName = document.getElementById("change-name").style.color = "red"
}
function green() {
   
let changeName = document.getElementById("change-name").style.color = "green"
}
function blue() {
   
let changeName = document.getElementById("change-name").style.color = "blue"
}
function yellow() {
   
let changeName = document.getElementById("change-name").style.color = "yellow"
}
function black() {
   
let changeName = document.getElementById("change-name").style.color = "black"
}


// guest btns


function white1() {  

let changeName = document.getElementById("changeguest-name").style.color = "white"
}

function red1() {
   
let changeName = document.getElementById("changeguest-name").style.color = "red"
}
function green1() {
   
let changeName = document.getElementById("changeguest-name").style.color = "green"
}
function blue1() {
   
let changeName = document.getElementById("changeguest-name").style.color = "blue"
}
function yellow1() {
   
let changeName = document.getElementById("changeguest-name").style.color = "yellow"
}
function black1() {
   
let changeName = document.getElementById("changeguest-name").style.color = "black"
}
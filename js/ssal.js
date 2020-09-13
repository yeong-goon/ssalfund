let headerWrap = document.getElementById('header-wrap');
let fundRegistration = document.getElementsByClassName('fundRegistration');
let descriptionSection = document.querySelectorAll('.description section');


function gnbBtnFunction() {
    headerWrap.classList.toggle('clicked');
    fundRegistration[0].classList.toggle('scrollDown');
   
}
function fundRegScroll(){
    if(document.documentElement.scrollTop>20){
        fundRegistration[0].classList.add('scrollDown');
        console.log(1);
    }
    else{
        fundRegistration[0].classList.remove('scrollDown');
    }
}

function descriptionScroll(num,scroll){
    if(document.documentElement.scrollTop>scroll){
        descriptionSection[num].classList.add('active');
    }
}
window.onscroll = function () {
    fundRegScroll();
    descriptionScroll(1,600);
    descriptionScroll(2,1340);
}


let loginWrap = document.querySelector('.login-wrap');

function loginBtn() {
    loginWrap.classList.add('clicked');
}
function loginBgFunction() {
    loginWrap.classList.remove('clicked');
}
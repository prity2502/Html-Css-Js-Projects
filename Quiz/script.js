const StartBtn = document.querySelector('.Start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const Continuebtn = document.querySelector('.Continue-btn');
const  quizSection= document.querySelector('.quiz-section');



Startbtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');


}


exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

Continuebtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
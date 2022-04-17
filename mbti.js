const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");

const question = document.getElementById("question");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

const mbtiResult = document.getElementById("mbtiResult");
const btnRestart = document.getElementById("btnRestart");


startBtn.addEventListener("click",(e)=>{
    main.classList.add("close");
    question.classList.remove("close");
});

// 이건 지우기
btnB.addEventListener("click",(e)=>{
    question.classList.add("close");
    mbtiResult.classList.remove("close");
});

btnRestart.addEventListener("click",(e)=>{
    mbtiResult.classList.add("close");
    main.classList.remove("close");
});

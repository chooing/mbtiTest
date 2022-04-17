const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");

const question = document.getElementById("question");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");


startBtn.addEventListener("click",(e)=>{
    main.classList.add("close");
    question.classList.remove("close");
});
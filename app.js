const questions =[
    {
        question: "Which aircraft carried out the Balakot airstrike?",
        answers:[
            {text:"Sukhoi-30 MKI",correct: false},
            {text:"Mirage-2000",correct: true},
            {text:"Mig-29 UPG",correct: false},
            {text:"Rafale",correct: false}
        ]
    },
    {
        question: "Which missile was used to carry  out the Balakot airstrike?",
        answers:[
            {text:"Spice-2000",correct: true},
            {text:"Mica missile",correct: false},
            {text:"R-77",correct: false},
            {text:"Hammer missile",correct: false}
        ]
    },
    {
        question: "When is the Indian Air Force Day celebrated?",
        answers:[
            {text:"October 8",correct: true},
            {text:"February 15",correct: false},
            {text:"December 4",correct: false},
            {text:"February 26",correct: false}
        ]
    },
    {
        question: "Which one of the following Airbase is the largest Airbase of the Indian Air Force?",
        answers:[
            {text:"Bidar AFS",correct: false},
            {text:"Hindon AFS",correct: true},
            {text:"Yelahanka AFS",correct: false},
            {text:"Ambala AFS",correct: false}
        ]
    },
    {
        question: "Which PAF fighter jet was shotdown by Wg Cmd Abhinandan?",
        answers:[
            {text:"J-10",correct: false},
            {text:"Mirage-2000",correct: false},
            {text:"F-16",correct: true},
            {text:"Mig-21",correct: false}
        ]
    },
    {
        question: "Where is the Training Command of IAF situated?",
        answers:[
            {text:"New Delhi",correct: false},
            {text:"Bengaluru",correct: true},
            {text:"Pune",correct: false},
            {text:"Chennai",correct: false}
        ]
    },
    {
        question: "Who was the first and only 5 star officer of IAF?",
        answers:[
            {text:"Arjan Singh",correct: true},
            {text:"Subroto Mukherjee",correct: false},
            {text:"Abhinandan Vardhman",correct: false},
            {text:"Birendra Singh Dhanoa",correct: false}
        ]
    },
    {
        question: "Which  was the first idegenously developed aircraft to be inducted into IAF?",
        answers:[
            {text:"Sukhoi-30 MKI",correct: false},
            {text:"HAL Marut",correct: true},
            {text:"Hal Tejas",correct: false},
            {text:"Suryakiran",correct: false}
        ]
    },{
        question: "Where is the headquarter of IAF situated?",
        answers:[
            {text:"Mumbai",correct: false},
            {text:"Gwalior",correct: false},
            {text:"Bangalore",correct: false},
            {text:"New Delhi",correct: true}
        ]
    },{
        question: "Who was the first and only recipient of Param Vir Chakra from IAF?",
        answers:[
            {text:"Subroto Mukherjee",correct: false},
            {text:"Nirmaljit Singh Sekhon ",correct: true},
            {text:"Arjan Singh",correct: false},
            {text:"Abhinanadan Vardhaman",correct: false}
        ]
    },
];

let questelement=document.getElementById("question");
let answerButtons=document.getElementById("answer-button");
let nextButton=document.getElementById("nextbtn");

let currentquestindex=0;
let score=0;

function Startquiz(){
    let currentquestindex=0;
    let score=0;
    nextButton.innerHTML="Next";
    ShowQuestion();

}

function ShowQuestion(){
    resetState();
    let currentquest=questions[currentquestindex];
    let questionNo=currentquestindex + 1;
    questelement.innerHTML=questionNo + ". " + currentquest.question;

    currentquest.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("butn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextButton.style.display="block";


}
function showScore(){
    resetState();
    questelement.innerHTML=`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}




function handleNextButton(){
    currentquestindex++;
    if(currentquestindex < questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}




nextButton.addEventListener("click",()=>{
    if(currentquestindex<questions.length){
        handleNextButton();
    }else{
        Startquiz();
    }
})





Startquiz();
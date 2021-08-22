const quizdata=[{
    question:"Which language runs in web browser?",
    a:"java",
    b:"python",
    c:"c",
    d:"javascript",
    correct:"d"
},{
    question:"Full form of HTML?",
    a:"Hyper Text Markup Language",
    b:"Hyper Transmission Media Language",
    c:"Highest Transfer Media Language",
    d:"Hyper Text Transmission Language",
    correct:"a"
},{
    question:"The Fifth Generation Computer works on",
    a:"Transistors",
    b:"IC",
    c:"AI",
    d:"Microprocessor",
    correct:"c"
},{
    question:"The OSI model has ______ layers",
    a:"4",
    b:"7",
    c:"9",
    d:"5",
    correct:"b"
}];

const quiz=document.getElementById('quiz');
const answerls=document.querySelectorAll('.answers');
console.log(answerls);

const questionls=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const button=document.getElementById('submit');

let currentquiz=0;
let score=0;

quizdata1();

function quizdata1()
{

    deselect();
    const currentquizdata=quizdata[currentquiz];
    console.log(currentquizdata);

    questionls.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
   // console.log(a_text);
}

function deselect()
{
    answerls.forEach(ansls=>ansls.checked=false);
}


function getSelect()
{
    let answer;
    answerls.forEach(item=>{
        if(item.checked){
            answer=item.id;
        }
    })
    return answer;
}

button.addEventListener('click',()=>{
    const answer=getSelect();
    if(answer)
    {
        if(answer===quizdata[currentquiz].correct){
            score++;
        }
        currentquiz++;

        if(currentquiz<quizdata.length){
            quizdata1();

        }

        else{
            quiz.innerHTML=`<h2> you have got ${score}/${quizdata.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
})
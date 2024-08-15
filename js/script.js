function loadinfo(){
    resultfind();
}
function computerMove(){
    var computer='';
    var randomNumber=Math.floor(Math.random()*10);
    if(randomNumber>=0 && randomNumber<=3){
        computer='Rock';
    }
    else if(randomNumber>3 && randomNumber<=6){
        computer='Paper';
    }
    else if(randomNumber>6 && randomNumber<=9){
        computer='Scissors';
    }
    return computer;
}
var score=JSON.parse(localStorage.getItem('message'))|| { win:0 };



document.body.addEventListener('keydown',(event)=>{
    
    if(event.key=== 'r' || event.key==='R'){
        resultfind('Rock');
        popup();
    }
    else if(event.key=== 'p'  || event.key==='P'){
        resultfind('Paper');
        popup();
    }
    else if(event.key=== 's' || event.key==='S'){
        resultfind('Scissors');
        popup();
    }
    if(event.key==='Escape'){
        goBack();
    }
})

function resultfind(value){
   
    var scoreOutput=document.querySelector(".score-card");
    var msgContent=document.querySelector(".msg-content");
    var resultValue=document.querySelector(".result");
    var valueInput= value;
    var result='';
    var computerresult=computerMove();
   
    if(valueInput ==='Rock'){
        if(computerresult==='Rock'){
            result='Tie';
        }
        else if(computerresult==='Paper'){
            result='Lose';
        }
        else if(computerresult==='Scissors'){
            result='Win';
        }
    }
    if(valueInput ==='Paper'){
        if(computerresult==='Rock'){
            result='Win';
        }
        else if(computerresult==='Paper'){
            result='Tie';
        }
        else if(computerresult==='Scissors'){
            result='Lose';
        }
    }
    if(valueInput ==='Scissors'){
        if(computerresult==='Rock'){
            result='Lose';
        }
        else if(computerresult==='Paper'){
            result='Win';
        }
        else if(computerresult==='Scissors'){
            result='Tie';
        }
    }
    if (result==='Win'){
        score.win+=1;
    }else if(result==='Lose'){
        if(score.win<=0){
            score.win+=0;
        }else if(score.win>0){
            score.win-=1;
        }
    }
    else if(result==='Tie'){
        score.win+=0;
    }
    msgContent.innerHTML=`<button class="msg-icon" disabled>
              <img src="images/${valueInput}.png" alt="">
            </button>
            <button class="msg-icon" disabled>
              <img src="images/${computerresult}.png" alt="" >
            </button>`
    resultValue.innerHTML=result;
    localStorage.setItem('message',JSON.stringify(score));
    scoreOutput.innerText=score.win;
}
resultfind();
var autoplay=document.querySelector(".auto-play");
var autoplaybox=document.querySelector(".autoplay-box");

var isautoplaying=false;
var id;
autoplay.addEventListener('click',()=>{
    
    if(!isautoplaying){
    autoplay.innerText="Stop Auto Play";
    id=setInterval(()=>{
        autoplaybox.style.display="block";
        value=computerMove();
        autoPlay(value);
    },200)
    isautoplaying=true;
}
else{
    clearInterval(id);
    autoplay.innerText="Auto Play";
    autoplaybox.style.display="none";
    isautoplaying=false;
}
});

function autoPlay(value){
    var scoreOutput=document.querySelector(".score-card");
    var autoplayContent=document.querySelector(".autoplay-content");
    var autoplayresultValue=document.querySelector(".autoplay-result");
    var computerresult=computerMove();
    valueInput= value;
    if(valueInput ==='Rock'){
        if(computerresult==='Rock'){
            result='Tie';
        }
        else if(computerresult==='Paper'){
            result='Lose';
        }
        else if(computerresult==='Scissors'){
            result='Win';
        }
    }
    if(valueInput ==='Paper'){
        if(computerresult==='Rock'){
            result='Win';
        }
        else if(computerresult==='Paper'){
            result='Tie';
        }
        else if(computerresult==='Scissors'){
            result='Lose';
        }
    }
    if(valueInput ==='Scissors'){
        if(computerresult==='Rock'){
            result='Lose';
        }
        else if(computerresult==='Paper'){
            result='Win';
        }
        else if(computerresult==='Scissors'){
            result='Tie';
        }
    }
    if (result==='Win'){
        score.win+=1;
    }else if(result==='Lose'){
        if(score.win<=0){
            score.win+=0;
        }else if(score.win>0){
            score.win-=1;
        }
    }
    else if(result==='Tie'){
        score.win+=0;
    }
    autoplayContent.innerHTML=`<button class="msg-icon" disabled>
              <img src="images/${valueInput}.png" alt="">
            </button>
            <button class="msg-icon" disabled>
              <img src="images/${computerresult}.png" alt="" >
            </button>`;
    autoplayresultValue.innerHTML=result;
    localStorage.setItem('message',JSON.stringify(score));
    scoreOutput.innerText=score.win;

}

var resetscoremsg=document.querySelector(".reset-score-msg");
var sure=document.querySelector(".sure");
var back=document.querySelector(".back");

function resetscore(){
    resetscoremsg.style.display="block";
    sure.addEventListener('click',()=>{
        score+=0;
        window.location.reload();
    });
    back.addEventListener('click',()=>{
        resetscoremsg.style.display="none";
    });
}
function popup(){
    var popup=document.querySelector(".pop-up-box-container");
    popup.style.display="block";
}
function goBack(){
    var popup=document.querySelector(".pop-up-box-container");
    popup.style.display="none";
}
function rulespopup(){
    var rules=document.querySelector(".rules");
    rules.style.display="block";
}
function gorulesBack(){
    var rules=document.querySelector(".rules");
    rules.style.display="none";
}


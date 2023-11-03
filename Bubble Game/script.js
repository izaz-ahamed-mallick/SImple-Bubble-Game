
let ranNumber = 0;
let timer = 60;
let score = 0;

function bubblePrint() {
  let bubbleNo='';
  for (let i = 1; i < 127; i++) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    bubbleNo += `<div class="bubble">${randomNumber}</div>`;
 
  }
  document.querySelector(".bbtm").innerHTML = bubbleNo;
}

function timerValue() {

  let timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".bbtm").innerHTML = `<h1> Game Over</h1>`
    }
  }, 2000);
}
function hitValue(){
ranNumber = Math.floor(Math.random()*10+1);
  document.querySelector('#hitval').textContent = ranNumber;
}

function increaseScore(){

 score += 10;
document.querySelector('#score').innerHTML = score;

}

document.querySelector('.bbtm').addEventListener('click',(dets)=>{
     let clickval = Number(dets.target.textContent);
    if(clickval === ranNumber){
      increaseScore();
      bubblePrint();
      hitValue();
    }
    

});

bubblePrint();
timerValue();
hitValue();



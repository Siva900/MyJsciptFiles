'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.score').textContent);

//document.querySelector('.score').textContent=10 ;
//console.log(document.querySelector('.score').textContent);
//console.log(document.querySelector('.guess').value);
//document.querySelector('.guess').value = 45;
//console.log(document.querySelector('.guess').value);
*/

//note that the user input getting from the field is a string .
//we need to explicitely convert the string to a number.
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
//let highscore = [];
let highscore = 0;
//console.log(document.querySelector('.number').textContent = secretNumber);

document.querySelector('.check').addEventListener('click',function()
{
  const num1 = Number(document.querySelector('.guess').value);
  //console.log(num1,typeof(num1));
  if(!num1)
  {
    console.log(document.querySelector('.message').textContent='😵Please Enter a number first!');
  }
  else if (num1 === secretNumber) {
    document.querySelector('.message').textContent='Correct Answer🎉👍';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore)
    {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    //highscore.push(score);
    //let max = highscore[0];
    /*for(let i=0;i<highscore.length;i++)
    {
      if(max<highscore[i])
      {
        max = highscore[i];
      }
    }*/
  }

  else if (num1 !== secretNumber) {
      if(score>1)
      {
        let opstr;//opt string based on the condition
        num1>secretNumber ? opstr = 'too high👎':opstr = 'too low👎';
        document.querySelector('.message').textContent=`Number is ${opstr}`;
        document.querySelector('.score').textContent= --score;
      }
      else
      {
        document.querySelector('.message').textContent='you Lost👎';
        document.querySelector('.score').textContent= 0;
      }
  }

});
  /*else if (num1>secretNumber) {
    if(score>1)
    {
      document.querySelector('.message').textContent='Number is too high👎';
      document.querySelector('.score').textContent= --score;
    }
    else
    {
      document.querySelector('.message').textContent='you Lost👎';
      document.querySelector('.score').textContent= 0;
    }
  }
  else if (num1<secretNumber) {
    if(score>1)
    {
      document.querySelector('.message').textContent='Number is too low👎';
      document.querySelector('.score').textContent= --score;
    }
    else
    {
      document.querySelector('.message').textContent='you Lost👎';
      document.querySelector('.score').textContent= 0;
    }
  }

});
*/
document.querySelector('.again').addEventListener('click',function()
{
  secretNumber = Math.trunc(Math.random()*20)+1;
  score = 20;
  document.querySelector('.score').textContent=score;
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})

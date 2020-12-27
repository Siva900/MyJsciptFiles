'use strict';

const elScore0 = document.querySelector('#score--0');
//another way to get ID
const elScore1 = document.getElementById('score--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;
let isgamecomplete = 0;

const scores = [0,0];
const elCurrentScore0 = document.getElementById('current--0');
const elCurrentScore1 = document.getElementById('current--1');

elScore0.textContent=0;
elScore1.textContent=0;

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');


const rollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function()
{
  currentScore = 0;
  activePlayer===0?elCurrentScore0.textContent = currentScore:elCurrentScore1.textContent=currentScore;
  activePlayer = (activePlayer=== 0 ?1:0);
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

const initialize = function()
{
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  isgamecomplete = 0;

  elCurrentScore0.textContent = 0;
  elCurrentScore1.textContent = 0;
  elScore0.textContent = 0;
  elScore1.textContent = 0;

  diceEl.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};


//rolldice Function

rollDice.addEventListener('click',function()
{
  if(isgamecomplete === 0)
  {
    const dice = Math.trunc(Math.random()*6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if(dice !== 1)
    {
      currentScore+=dice;
      activePlayer===0?elCurrentScore0.textContent = currentScore:elCurrentScore1.textContent=currentScore;
    }
    else
    {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click',function()
{
  if(isgamecomplete === 0)
  {
    scores[activePlayer] += currentScore;
    if(scores[activePlayer] >= 100)
    {
      isgamecomplete = 1;
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      activePlayer===0?elScore0.textContent = scores[activePlayer]:elScore1.textContent=scores[activePlayer];
      diceEl.classList.add('hidden');
    }
    else
    {
      currentScore = 0;
      activePlayer===0?elCurrentScore0.textContent = currentScore:elCurrentScore1.textContent=currentScore;
      activePlayer===0?elScore0.textContent = scores[activePlayer]:elScore1.textContent=scores[activePlayer];
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click',function()
{
  initialize();
});

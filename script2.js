'use strict';
/*
let dolphinsscore1 = Number(prompt("Enter the dolphins score 1: "));
let dolphinsscore2 = Number(prompt("Enter the dolphins score 2: "));
let dolphinsscore3 = Number(prompt("Enter the dolphins score 3: "));
let koalasscore1 = Number(prompt("Enter the koalas score 1: "));
let koalasscore2 = Number(prompt("Enter the koalas score 2: "));
let koalasscore3 = Number(prompt("Enter the koalas score 3: "));

const avgcalc = (score1,score2,score3)=>{
  return (score1+score2+score3)/3 ;
}

const avgDolphins = avgcalc(dolphinsscore1,dolphinsscore2,dolphinsscore3);
const avgKoalas = avgcalc(koalasscore1,koalasscore2,koalasscore3);

checkscore(avgDolphins,avgKoalas);

function checkscore(avgDolphins,avgKoalas)
{
  if(avgDolphins >= 2*avgKoalas)
  {
    console.log(`Dolphins are the winners 🥳:${avgDolphins} vs ${avgKoalas}`);
  }
  else if(avgKoalas >= 2*avgDolphins)
  {
    console.log(`Koalas are the winners 🥳: ${avgKoalas} vs ${avgDolphins}`);
  }
  else
  {
    console.log(`No winnners 😔: ${avgDolphins} vs ${avgKoalas}`);
  }
}

const friends=["siva","sai",190010009];
console.log(friends);
friends.push("ANR");
console.log(friends);
friends.unshift("Indira");
console.log(friends);
console.log(friends.pop());
console.log(friends);
console.log(friends.shift());
console.log(friends);
//we have arrayname.indexof(element) will return the index of the element
console.log(friends.includes('siva'));
//note that includes uses strict equality

const bill = Number(prompt("Enter the bill amount: "));
console.log("tip for bill 100: "+calcTip(bill));

function calcTip(billamount)
{
  if((billamount>=50) && (billamount<=300))
  {
    const tip = billamount*0.15 ;
    return tip;
  }
  else{
    const tip = billamount*0.2 ;
    return tip;
  }
}

const bills=[125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log("Bills: "+bills);
console.log("Tips: "+tips);
console.log("Total: "+total);

const venkat = {
  firstname:"siva",
  lastname:"sai",
  rollno:190010009,
  friends: ["A","B","c"]
};
console.log(venkat.friends[1],venkat.friends.length);

//coding challenge
const obj1 = {
  firstname: "John",
  lastname: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI : function(){
    this.johnBMI = this.mass/(this.height ** 2);
    return this.johnBMI;
  }
};

const obj2 = {
  firstname: "Mark",
  lastname: "Miller",
  mass: 78,
  height:1.69,

  calcBMI : function(){
    this.markBMI = this.mass/(this.height ** 2);
    return this.markBMI;
  }
};

console.log(`${obj1.firstname}'s BMI ${obj1.calcBMI()}`);
console.log(`${obj2.firstname}'s BMI ${obj2.calcBMI()}`);
if(obj1.calcBMI() > obj2.calcBMI())
{
  console.log(`${obj1.firstname}'s BMI(${obj1.johnBMI}) is higher than ${obj2.firstname}'s BMI(${obj2.markBMI})`);
}
else if(obj1.calcBMI() === obj2.calcBMI())
{
  console.log(`${obj1.firstname}'s BMI(${obj1.johnBMI}) is equal to ${obj2.firstname}'s BMI(${obj2.markBMI})`);
}
else
{
  console.log(`${obj1.firstname}'s BMI(${obj1.johnBMI}) is lesser than ${obj2.firstname}'s BMI(${obj2.markBMI})`);
}
*/
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for(let i=0;i<bills.length;i++)
{
  tips.push(calcTip(bills[i]));
  totals.push(tips[i]+bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const avg1 = calcAverage(bills);
const avg2 = calcAverage(tips);
const avg3 = calcAverage(totals);

console.log(avg1);
console.log(avg2);
console.log(avg3);

function calcTip(billamount)
{
  if((billamount>=50) && (billamount<=300))
  {
    const tip = billamount*0.15 ;
    return tip;
  }
  else{
    const tip = billamount*0.2 ;
    return tip;
  }
}

function calcAverage(arr)
{
  let sum = 0;
  for(let i=0;i<arr.length;i++)
  {
    sum+=arr[i];
  }
  return sum/arr.length;
}

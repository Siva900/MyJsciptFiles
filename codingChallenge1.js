let marksHgt = 1.88;
let markWgt = 95;
let johnHgt = 1.76;
let johnWgt = 85;
let johnBMI = johnWgt/(johnHgt**2);
let markBMI = markWgt/(marksHgt**2);
let markHigherBMI = markBMI>johnBMI;
if(markHigherBMI)
{
  console.log(`Mark has Higher BMI than john ${johnBMI},${markBMI}`);
}
else
{
  console.log(`Mark has lower BMI than John ${johnBMI},${markBMI}👍`);
}
/*let dolphinsScore1 = Number(prompt("Input your score1: "));
let dolphinsScore2 = Number(prompt("Input your score2: "));
let dolphinsScore3 = Number(prompt("Input your score3: "));
let dolphinAvg = (dolphinsScore1+dolphinsScore2+dolphinsScore3)/3;
let koalasScore1 = Number(prompt("Input Koalas score1: "));
let koalasScore2 = Number(prompt("Input Koalas score2: "));
let koalasScore3 = Number(prompt("Input Koalas score3: "));
let koalasAvg = (koalasScore1+koalasScore2+koalasScore3)/3;

if((dolphinAvg === koalasAvg) && (dolphinAvg>=100))
{
  console.log("Both the scores are equal");
}
else if((dolphinAvg>koalasAvg) &&(dolphinAvg>=100))
{
  console.log("Dolphins Average is greater than Koalas Average");
}
else if((koalasAvg>dolphinAvg) && (koalasAvg>=100))
{
  console.log("Dolphins Average is greater than Koalas Average");
}
*/
let bill = Number(prompt("enter the Bill amount: "));
let tip;
((bill>=50) && (bill<=300))?x=1:x=0;
switch (x) {
  case 1:
    tip = bill*(0.15);
    console.log(`The bill amount is ${bill} and the tip is ${tip} and total=${tip+bill}`);
    break;
  default:
    tip = bill*(0.2);
    console.log(`The bill amount is ${bill} and the tip is ${tip} and total=${tip+bill}`);
    break;
}

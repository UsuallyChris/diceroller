//declare dice object
let dice = {
  numDice: 1,
  numSides: 4,
  rolls: [],
  total: 0,
}

//set numDice to initial value and update on change
dice.numDice = document.getElementById("numDice").value;
const updateNumDice = function() {
  dice.numDice = document.getElementById("numDice").value;
}

//set numSides to intial value and update on change
dice.numSides = document.getElementById("numSides").value;
const updateNumSides = function() {
  dice.numSides = document.getElementById("numSides").value;
}

//sum total, reset total and update total
const total = function() {
  let copy = dice.rolls.slice(0);
  let sum = copy.reduce((a,b) => a+ b, 0);
  dice.total = sum;
}

const resetTotal = function() {
  dice.total = 0;
}

const updateTotal = function() {
  let totalHTML = document.getElementById("total");
  rolls(dice.numDice, dice.numSides);
  total();
  totalHTML.innerHTML = dice.total;
}

//calculate max and update max
const max = function(num, sides) {
  return num * sides;
}

const updateMax = function(num) {
  let maxHTML = document.getElementById("max");
  maxHTML.innerHTML = num;
}

//calculate min and upate min
const min = function(num) {
  return num;
}

const updateMin = function(num) {
  let minHTML = document.getElementById("min");
  minHTML.innerHTML = num;
}

//calculate rolls, convert rolls to string, update rolls, reset rolls
const rolls = function(num, sides) {
  for(i = 1; i <= num; i++) {
    let randomNumber = Math.floor(Math.random() * sides) + 1;
    dice.rolls.push(randomNumber);
  }
}

const rollsToString = function() {
  let copy = dice.rolls.slice(0);
  let string = copy.join(', ');
  return string;
}

const resetRolls = function() {
  dice.rolls = [];
} 

const updateRolls = function(rolls) {
  let rollsHTML = document.getElementById("rolls");
  rollsHTML.innerHTML = rolls;
}

//reset values
const reset = function() {
  resetTotal();
  resetRolls();
}

//update view
const update = function() {
  updateMin(min(dice.numDice));
  updateMax(max(dice.numDice, dice.numSides));
  updateTotal();
  updateRolls(rollsToString());
}

//on button click
const button = document.getElementById("button");
button.onclick = function(){
  reset();
  update();
}

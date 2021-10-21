//Exercise 2 : Class into Closure
//================================

//Class definition
class Cat {
  constructor(tiredness) {
    this.tiredness = tiredness;
  }

  sleep(hours) {
    if (hours <= 0) {
      throw "Please enter a correct value";
    } else if (hours < 8) {
      this.tiredness = this.tiredness + (8 - hours);
    } else {
      this.tiredness = this.tiredness - hours;
    }
    if (this.tiredness < 0) {
      this.tiredness = 0;
    }
  }

  howDoIFeel() {
    if (this.tiredness === 0) {
      return "I am well rested";
    } else {
      return "I am tired";
    }
  }
}

//Testing section
const myCat = new Cat(5);
myCat.sleep(5);
console.assert(myCat.howDoIFeel() === "I am tired");

myCat.sleep(9);
console.assert(myCat.howDoIFeel() === "I am well rested");

//====================================================================================

//Using Closure instead of classes

//Function definition
function cat(a) {
  let tiredness = a;
  function sleep(hours) {
    if (hours <= 0) {
      throw "Please enter a correct value";
    } else if (hours < 8) {
      tiredness = tiredness + (8 - hours);
    } else {
      tiredness = tiredness - hours;
    }
    if (tiredness < 0) {
      tiredness = 0;
    }
  }

  function howDoIFeel() {
    if (tiredness === 0) {
      return "I am well rested";
    } else {
      return "I am tired";
    }
  }

  return [sleep, howDoIFeel];
}

//Testing section
let myTest = cat(5);

myTest[0](5);
console.assert(myTest[1]() === "I am tired");

myTest[0](9);
console.assert(myTest[1]() === "I am well rested");

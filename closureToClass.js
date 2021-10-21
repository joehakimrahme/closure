//Exercise 1 : Closure into Class

//Function declaration (MDN Example)
var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },

    decrement: function () {
      changeBy(-1);
    },

    value: function () {
      return privateCounter;
    },
  };
})();

//Test section
console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

//==================================================================================

//Using Classes instead of Closure

//Class declaration
class counterClass {
  constructor() {
    this.privateCounter = 0;
  }

  changeby(val) {
    return (this.privateCounter += val);
  }

  increment() {
    return this.changeby(1);
  }

  decrement() {
    return this.changeby(-1);
  }

  getValue() {
    return this.privateCounter;
  }
}

//Test section
const myTest = new counterClass();

//Expect privateCounter to be equal to 0
console.assert(myTest.privateCounter === 0);

myTest.increment();
myTest.increment();

//Expect privateCounter to be equal to 2 after calling twice the increment method
console.assert(myTest.getValue() === 2);

myTest.decrement();

//Expect privateCounter to be equal to 1 after calling once the decrement method
console.assert(myTest.getValue() === 1);

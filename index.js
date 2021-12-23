// Follow along with the examples here
/*
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }

function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }

function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }

sayHello();
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("bloop");
  */

/*
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

console.log(firstName);
*/

/*
function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Julio","hello");
*/


/*
function add(x, y) {
   return x + y;
}
console.log(add(1, 2));
*/



/*
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
console.log(say("Hello", "liz"));
*/


function add(x, y) {
    return x + y
}
const sum = add(1, 2);
const message = `The sum of your numbers is: ${sum}.`;
console.log(message);


/*
const message = `The sum of your numbers is: ${add(num1,num2)}.`;
*/

/*
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}
console.log(say("Howdy", "partner"));
*/

/*
function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}`;
}
console.log(say("Howdy", "partner"));
*/
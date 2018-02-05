/* arrow functions */

//old way

var sum = function (a, b) {
    return a+b;
};

//new way

const sum = (a, b) => {
    return a + b;
};

const sum = (a, b) => a + b; //one line, implicit return (only in one line)

//Usage is more cleaner when you pass simple functions as arguments

//old way

var numbers=[1,2,3,4,5,6,7,8,9];

var squares=numbers.map(function (number) {
    return number*number;
});

console.log(squares);

//new way

const numbers=[1,2,3,4,5,6,7,8,9];

const squares=numbers.map((number) => number*number);

//also, if function has only one param you can drop the () so...

const squares=numbers.map(number => number*number);

console.log(squares);

//Lexical binding of "this"

//old way

function Bot(name) {
    this.name=name;
}

Bot.prototype.sayHi=function() {
    console.log("Thinking...");
    var self=this;
    setTimeout(function(){
        console.log("Hi, I'm " + self.name);
    }, 2000);
};

new Bot("Darwin").sayHi();

//new way

class Bot {
    constructor(name) {
        this.name=name;
    }

    sayHi() {
        console.log("Thinking...");
        setTimeout(
            ()=> console.log(`Hi, I'm ${this.name}`),
            2000);
    }
}

new Bot("Darwin").sayHi();
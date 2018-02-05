/* destructuring */

//objects
var client= {
    id: 1,
    name: "Martin",
    surname: "Fowler"
};

//old way
var name=client.name; var surname=client.surname;


//new way: desctructuring
var { name, surname } = client;

//arrays

var numbers=[ 1, 2, 3, 4, 5];

//old way
var firstNumber = numbers[0];
var secondNumber = numbers[1];

//new way
var [ firstNumber, secondNumber ] = numbers;

//using variables in objects

//old way
var cart= {
    id:1,
    client: client,
    items : [ "shoe", "t-shirt"  ]
};

//new way
var cart= {
    id:1,
    client, //creates the key "client" and puts the value of the client obj
    items : [ "shoe", "t-shirt"  ]
};


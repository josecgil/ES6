/* Template strings */

//Concatenate 1 line

//old way

var name="Martin";
var surname="Fowler";

var greet="Hello "+name+" "+surname+".";
console.log(greet);

//new way
var name="Martin";
var surname="Fowler";

var greet=`Hello ${name} ${surname}.`;
console.log(greet);

//Concatenate N lines

//old way

var name="Martin";
var surname="Fowler";

var greet="Hello \n"+name+"\n"+surname+".";
console.log(greet);

//new way
var name="Martin";
var surname="Fowler";

var greet=
`Hello
${name}
${surname}.`;
console.log(greet);

/* default values */

//old way
function parseNumbers(str, strSeparator, decimalSeparator) {
    if (!strSeparator) strSeparator=";";
    if (!decimalSeparator) decimalSeparator=".";
    var strNumbers=str.split(strSeparator);
    var numbers=[];
    for(i=0;i<strNumbers.length;i++) {
        var strNumber=strNumbers[i].trim();
        if (strNumber.length===0) continue;
        strNumber=strNumber.replace(decimalSeparator,".");
        var number=parseFloat(strNumber, 10);
        numbers.push(number);
    }
    return numbers;
}

console.log(parseNumbers("1;2;3")); //--> returns [1,2,3]
console.log(parseNumbers("1,2,3",",")); //--> returns [1,2,3]
console.log(parseNumbers("1,9;2,9;3,9",";",",")); //--> returns [1.9,2.9,3.9]


//new way
function parseNumbers(str, strSeparator=";", decimalSeparator=".") {
    var strNumbers=str.split(strSeparator);
    var numbers=[];
    for(i=0;i<strNumbers.length;i++) {
        var strNumber=strNumbers[i].trim();
        if (strNumber.length===0) continue;
        strNumber=strNumber.replace(decimalSeparator,".");
        var number=parseFloat(strNumber, 10);
        numbers.push(number);
    }
    return numbers;
}

console.log(parseNumbers("1;2;3"));
console.log(parseNumbers("1,2,3",","));
console.log(parseNumbers("1,9;2,9;3,9",";","," ));

//better way
function parsesStringToNumbers(sourceString, numberSeparator=";", decimalSeparator=".") {
    var stringNumbers=sourceString.split(numberSeparator);
    return stringNumbers.map(function(stringNumber) {
        stringNumber=stringNumber.trim();
        if (stringNumber.length===0) return;
        stringNumber=stringNumber.replace(decimalSeparator,".");
        return parseFloat(stringNumber, 10);
    });
}

console.log(parsesStringToNumbers("1;2;3"));
console.log(parsesStringToNumbers("1,2,3",","));
console.log(parsesStringToNumbers("1,9;2,9;3,9",";","," )); 

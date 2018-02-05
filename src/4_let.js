/* let */

/* let is like var but without hoisting and with block scoping */

//old way
function a() {
    var b=2;
    if (b==2) {
        var c=3;
    }
}

//with hoisting this is the equivalent of
function a() {
    var b=2;
    var c;
    if (b==2) {
        c=3;
    }
}

//new way
function a() {
    let b=2;
    if (b==2) {
        let c=3; //this "c" is created and destroyed in this block
    }
}

/*
    For practical purposes "let" is the new "var"
 */
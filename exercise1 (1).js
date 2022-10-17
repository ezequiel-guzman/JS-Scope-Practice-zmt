
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
    console.log("q1 answer is .3.");
}
q1();
//#2
var a = 0;
function q2() {
    a = 5;
}
q2();

function q22() {
    alert(a);
}
q22();
console.log("q2 answer is .5.");




//#3
function q3() {
    window.a = "hello";
}
q3();


function q32() {
    alert(a);
}
q32();
console.log("q3 the answer is .hello.")

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
q4();
console.log("q4 answer is .test.")

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

console.log("q5 answer is .5. twice.");


//100% correct
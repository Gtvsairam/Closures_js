//Question1
// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());
// popup shows 4 times 

//Question2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1
  }
  console.log(count); // 0
})()

//question3 
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // 3 times
    }, 1000);
}

//question4 
//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
function outer(l){ 
   function inner(b){
        console.log(`Area of a rectangle ${l * b} Sqmts`); //Area of a rectangle 20000 Sqmts
    }
    inner(100);
}
outer(200);

//Question5
//Take a variable in outer function and create an inner function to increase the counter every time it is called
 function outerF(){
    let x = 0;
    return function inside(){
        x++;
        console.log(x);
    }
 }
 let out = outerF();
 out(); // 1
 out(); // 2
 out(); // 3
 out(); // 4
 out(); // 5

 //question6
 //Print Output

//  var a = 12;
//  (function () {
//    alert(a); // popup shows 12
//  })();

 //question7
 var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a); //12
  };
})();
x();

//question8
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
       " outerArg = " + outerArg + "\n" + //123
       " innerArg = " + innerArg + "\n" + //456
       " outerVar = " + outerVar + "\n" + //a
       " innerVar = " + innerVar + "\n" + //b
       " globalVar = " + globalVar); //xyz
    
    })(456);
})(123);


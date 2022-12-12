//  Scope

// var x ;
// var y ;
// var z ;
// var o ;

// x = 5;
// y = function() {};
// z = 'string';

// y();
// o = 8;


// var x = 5;
// var y = function() {};
// var z = 'string';

// y();
// var o = 8;

/////////////////////////////

// var x = 1;
// var y = 5;

// function test() {
//     y = 9;
//     console.log(y)
//     var o = 5;
// }
// test()
// console.log(y)

// ////////////////////////

// var x = 1;
// var y = 5;

// function test() {
//     var x = 8;
//     console.log(x)
//     var o = 5;
// }
// test()
// console.log(x)

///////////////////////////////
// var x = 1;
// var y = 5;

// const t = 10;
// // const t = 100;


// const pi = 3.14;
// function test(param) {
//     console.log(param);

//     var testInside = function () {
//         alert(123)
//     }
//     testInside();

//     var y = 12;
// }

// function test2() {
//     const pi = 555;
//     var x = 8;
//     console.log(x);
//     var o = 5;
// }

// test(y)
// test2()
// console.log(y)

// function scopeTest() {
//     this.x = 5;
//     this.y = 6;
// }

// {
//     x: 5,
//     y: 6
// }

// window.onresize = function() {
//     console.log(window.innerWidth)
// }

// window.onresize = function() {

//     if(window.innerWidth > 800 ) {
//         console.log('BIG')
//     } else {
//         console.log('SMALL')
//     }
    
// }

window.onresize = function() {
    console.log(window.innerWidth)
}

window.onresize = function() {

    if(window.innerWidth > 800 ) {
        console.log('true')
    } else {
        console.log('false')
    }
    
}
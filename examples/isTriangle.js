var geometry= require('../');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.isTriangle(A,C,B));
//true
console.log(geometry.isTriangle(A,A,A));
//false
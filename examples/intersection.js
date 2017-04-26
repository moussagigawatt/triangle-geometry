var geometry= require('../');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
var AB=geometry.vector(A,B); // Orientation vector of (AB)
var AC=geometry.vector(A,C); // Orientation vector of (AC)
console.log(AB);
//[3,0]
console.log(AC);
//[0,4]
console.log(geometry.intersect(AB,A,AC,C));
//[2,2] A
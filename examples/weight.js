var geometry= require('../');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.weightedPoint(A,1/3,C,1/3,B,1/3));
//[ 3, 3.333333333333333 ]
console.log(geometry.centroid(A,C,B));
//[ 3, 3.333333333333333 ]
console.log(geometry.weightedPoint(A,2,C,-1,B,-1));
//[ -3, -4 ]
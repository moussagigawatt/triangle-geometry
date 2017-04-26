var geometry= require('../');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
var AB=geometry.vector(A,B); // Orientation vector of (AB)
var AC=geometry.vector(A,C); // Orientation vector of (AC)
console.log([geometry.scalar(AC,AB),geometry.scalar([1,5],[0,-1]),geometry.scalar([2,2],[2,2])]); /// geometry.scalar
//[ 0, -5, 8 ]  
console.log([geometry.det(AC,AB),geometry.det(AB,AC),geometry.det(AB,AB)]); /// geometry.det
//[ -12, 12, 0 ]
console.log(geometry.sum(AB,AC)); /// geometry.sum
//[ 3, 4 ]
console.log([geometry.dilation(AB,2), geometry.dilation(AB,-1)]); /// geometry.dilation
//[ [ 6, 0 ], [ -3, -0 ] ]
console.log([geometry.unit(AB,2), Math.sqrt(geometry.unit(AB,2)[0]*geometry.unit(AB,2)[0]+geometry.unit(AB,2)[1]*geometry.unit(AB,2)[1])]); /// geometry.unit
//[ [ 1, 0 ], 1 ]
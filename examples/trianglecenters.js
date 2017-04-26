var geometry= require('../');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.orthocenter(A,C,B));//orthocenter of ABC
//[ 2, 2 ]
console.log([geometry.centroid(A,C,B)]);// centroid G
//[ 3, 3.3333333333333335 ]
console.log(geometry.sum(geometry.sum(geometry.vector(geometry.centroid(A,C,B),A),geometry.vector(geometry.centroid(A,C,B),B)),geometry.vector(geometry.centroid(A,C,B),C))); //GA +GB +GC=0_
//[ 0, -4.440892098500626e-16 ]
console.log(geometry.circumcenter(A,C,B));//circumcenter
//{ center: [ 3.5, 4 ], radius: 2.5 }
console.log(geometry.circumcenter(A,C,B).center);
//[ 3.5, 4 ]
console.log(geometry.circumcenter(A,C,B).radius);
//2.5
console.log(geometry.incenter(A,C,B));
//{ center: [ 3, 3 ], radius: 1 }

# triangle-geometry
Triangle Geometry is an all in one package to calculate triangle centers (orthocenter, circumcenter,incenter,centroid) and some vectorial operations.
The package works on 2D orthonormal coordinate system. 

## Install
```sh
npm install triangle-geometry
```
## API
```sh
var geometry = require('triangle-geometry');
```
### geometry.isTriangle(point_A,point_B,point_C)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> The method returns boolean whether the three points form a trangle or not. 

### geometry.orthocenter(point_A,point_B,point_C)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> If the points (point_A,point_B,point_C) form a triangle the method returns the orthocenter coordinates (pi=[xi,yi]) of this triangle.
> else it returns NULL.

### geometry.circumcenter(point_A,point_B,point_C)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> If the points (point_A,point_B,point_C) form a triangle the method returns Obj {center, radius}
> the circumcenter coordinate (pi=[xi,yi]) and the circle radius of this triangle.
> else it returns NULL.

### geometry.incenter(point_A,point_B,point_C)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> If the points (point_A,point_B,point_C) form a triangle the method returns Obj {center, radius}
> the incenter coordinate (pi=[xi,yi]) and the circle radius of this triangle.
> else it returns NULL.

### geometry.centroid(point_A,point_B,point_C)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> The method returns the centroid coordinates (pi=[xi,yi]) of the triangle formed by (point_A,point_B,point_C).

### geometry.weightedPoint(point_A,weight_A,point_B,weight_B,point_C,weight_C)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> Weights should be scalar.
> The method returns the sum of weighted point coordinates (point_A,weight_A); (point_B,weight_B);(point_C,weight_C).

### geometry.intersect(orientation_vector_AB,point_A,orientation_vector_CD,point_C)
 
> Orientation_vector_AB is the orientation vector of the line (AB).
> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> Orientation_vector_CD is the orientation vector of the line (CD).
> If the two lines (AB) and (CD) are not // the method returns the point of intersection
> else it returns NULL

### geometry.det(vector_i,vector_j)

> Vector should be a 2-scalar array where vi=[a,b].
> The method returns the determinant value of 2D vectors.

### geometry.scalar(vector_i,vector_j)

> Vector should be a 2-scalar array where vi=[a,b].
> The method returns the scalar product value of 2D vectors.

### geometry.sum(vector_i,vector_j)

> Vector should be a 2-scalar array where vi=[a,b].
> The method returns a vector which is the sum of 2D vectors.

### geometry.dilation(vector,k)

> Vector should be a 2-scalar array where vi=[a,b].
> The dilation factor k should be a scalar.
> The method returns k*vector.

### geometry.unit(vector)

> Vector should be a 2-scalar array where vi=[a,b].
> The method returns vector/||vector|| (unitary vector).

### geometry.vector(point_A,point_B)

> Points should be a 2-scalar array of coordinates where pi=[xi,yi].
> The method returns the vector A->B.


# Example: geometry.isTriangle(point_A,point_B,point_C)

```sh
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.isTriangle(A,C,B));
//true
console.log(geometry.isTriangle(A,A,A));
//false
```
# Example: triangle centers
```sh
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
```
# Example: weightedPoint
```sh
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.weightedPoint(A,1/3,C,1/3,B,1/3));
//[ 3, 3.333333333333333 ]
console.log(geometry.centroid(A,C,B));
//[ 3, 3.333333333333333 ]
console.log(geometry.weightedPoint(A,2,C,-1,B,-1));
//[ -3, -4 ]
```
# Example: intersect, vector
```sh
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
```
# Example: vector operations
```sh
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
```

License
----

MIT

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
var geometry = require('triangle-geometry');
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
var geometry = require('triangle-geometry');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.orthocenter(A,C,B));
//
console.log(geometry.circumcenter(A,C,B));
//
console.log(geometry.incenter(A,C,B));
//
console.log(geometry.centroid(A,C,B));
//
```
# Example: weightedPoint
```sh
var geometry = require('triangle-geometry');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
console.log(geometry.weightedPoint(A,1,C,1,B,1));
//
console.log(geometry.centroid(A,C,B));
//
```
# Example: intersect, vector
```sh
var geometry = require('triangle-geometry');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
var AB=geometry.vector(A,B); // Orientation vector of (AB)
var AC=geometry.vector(A,C); // Orientation vector of (AC)
console.log(AB);
//
console.log(AC);
//
console.log(geometry.intersect(AB,A,AC,C));
//
```
# Example: vector operations
```sh
var geometry = require('triangle-geometry');
var A=[ 2, 2 ];
var B=[ 5, 2 ];
var C=[ 2, 6 ];
var AB=geometry.vector(A,B); // Orientation vector of (AB)
var AC=geometry.vector(A,C); // Orientation vector of (AC)
console.log([geometry.scalar(AC,AB),geometry.scalar([1,0],[0,-1]),geometry.scalar([2,2],[2,2])]); /// geometry.scalar
//
console.log([geometry.det(AC,AB),geometry.det(AB,AC),geometry.det(AB,AB)]); /// geometry.det
//
console.log(geometry.sum(AB,AC)); /// geometry.sum
//
console.log([geometry.dilation(AB,2), geometry.dilation(AB,-1)]); /// geometry.delation
//
console.log([geometry.unit(AB,2), Math.sqrt(geometry.unit(AB,2)[0]*geometry.unit(AB,2)[0]+geometry.unit(AB,2)[1]*geometry.unit(AB,2)[1])]); /// geometry.unit
//
```

License
----

MIT

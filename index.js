module.exports=
{
det: function(x,y){
return (x[0]*y[1]-x[1]*y[0]);
},
weightedPoint: function (x,a,y,b,z,c)
{
return ([(x[0]*a+y[0]*b+z[0]*c),(x[1]*a+y[1]*b+z[1]*c)]);
},
 vector: function(x,y){
return ([y[0]-x[0],y[1]-x[1]]);
},
sum: function(x,y){
return ([y[0]+x[0],y[1]+x[1]]);
},
dilation: function(v,k){
return ([v[0]*k, v[1]*k]);
},
intersect: function(v,j,u,i){
if(this.det(v,u)!=0){
if(u[0]!=0)
{return(this.sum(this.dilation(v,(j[1]-i[1]-((u[1]/u[0])*(j[0]-i[0])))/((u[1]/u[0])*v[0]-v[1])),j));
}
else if(v[0]!=0){
return(this.sum(this.dilation(v,(i[0]-j[0])/v[0]),j));
}
}else{
return null;
}
},
scalar: function(x,y){
return (x[0]*y[0]+x[1]*y[1]);
},
unit: function(v){
var sr=Math.sqrt(this.scalar(v,v));
return ([v[0]/sr , v[1]/sr]);
},
centroid: function(x,y,z)
{
if(this.isTriangle(x,y,z)){
return ([(x[0]+y[0]+z[0])/3,(x[1]+y[1]+z[1])/3]);
}else{return null;}
},
incenter:function(x,y,z){
if(this.isTriangle(x,y,z)){
return ({
    center: this.intersect(this.sum(this.unit(this.vector(x,y)),this.unit(this.vector(x,z))),x,this.sum(this.unit(this.vector(z,y)),this.unit(this.vector(z,x))),z),
    radius: Math.abs(this.det(this.vector(x,this.intersect(this.sum(this.unit(this.vector(x,y)),this.unit(this.vector(x,z))),x,this.sum(this.unit(this.vector(z,y)),this.unit(this.vector(z,x))),z)),this.unit(this.vector(x,y))))
});    
}else{return null;}
},
circumcenter: function(x,y,z){
    if( this.isTriangle(x,y,z)){
return ({
    center: this.intersect([-this.vector(x,y)[1],this.vector(x,y)[0]],[(x[0]+y[0])/2,(x[1]+y[1])/2],[-this.vector(x,z)[1],this.vector(x,z)[0]],[(x[0]+z[0])/2,(x[1]+z[1])/2]),
    radius: Math.sqrt(this.scalar(this.vector(this.intersect([-this.vector(x,y)[1],this.vector(x,y)[0]],[(x[0]+y[0])/2,(x[1]+y[1])/2],[-this.vector(x,z)[1],this.vector(x,z)[0]],[(x[0]+z[0])/2,(x[1]+z[1])/2]),z),this.vector(this.intersect([-this.vector(x,y)[1],this.vector(x,y)[0]],[(x[0]+y[0])/2,(x[1]+y[1])/2],[-this.vector(x,z)[1],this.vector(x,z)[0]],[(x[0]+z[0])/2,(x[1]+z[1])/2]),z)))
});
    }else{return null;}
},
Weightpoint: function(x,a,y,b,z,c)
{
return ([(x[0]*a+y[0]*b+z[0]*c),(x[1]*a+y[1]*b+z[1]*c)]);
},
isTriangle: function(x,y,z){
var bool=false;
if(this.det(this.vector(x,y),this.vector(x,z))!=0){
bool=true;
}
return bool;
},
orthocenter: function(x,y,z){
if( this.isTriangle(x,y,z)){    
var   m=(x[0]-y[0])/(y[1]-x[1]);
var   n=(y[0]-z[0])/(z[1]-y[1]);
var   k=(-z[1]+x[1]+m*z[0]-n*x[0])/(m-n);
return ([k,(z[1]+m*(k-z[0]))]);
}else{return null;}
}
};
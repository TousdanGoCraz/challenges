


// Write a class Vec that represents a vector in two-dimensional space.
// It takes x and y parameters (numbers), 
//that it saves to properties of the same name.

// Give the Vec prototype two methods, plus and minus, 
//that take another vector as a parameter and 
//return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// point (x, y) from the origin (0, 0).

class Vec {
    constructor(x,y){
        this._x = x
        this._y = y
    }
    // get length() {
    //     return  Math.sqrt(this._x ** 2 + this._y ** 2) 
    // }
    // plus(vector){
    //     return new Vec(this._x + vector._x, this._y + vector._y)
    // }
    // minus(vector){
    //     return new Vec(this._x - vector._x, this._y - vector._y)
    // }
}
Object.defineProperty(Vec.prototype,'length',{
    get: function(){
        return  Math.sqrt(this._x ** 2 + this._y ** 2) 
    }
})

Vec.prototype.plus = function(vector){
     return new Vec(this._x + vector._x, this._y + vector._y)
}
Vec.prototype.minus = function(vector){
     return new Vec(this._x - vector._x, this._y - vector._y)
}

// Add a getter property length to the prototype that computes the length of the vector—that is,
// the distance of the

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5  
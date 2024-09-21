/*
* Object literal syntax
* In this syntax it harder to share functionality across objects. This can result in code duplication and limited reusability.
*/
const circle ={
    radius: 5,
    calculateArea: function() {
        return Math.PI * this.radius ** 2;
    }
}

console.log(circle.calculateArea()); // Output: 78.53981633974483

/*
* Factory function
* A factory function is a function that returns a new object. Unlike constructors, It don't use the new keyword
*/
const createCircle = function(radius){
   return {
      radius: radius,
      calculateArea: function() {
          return Math.PI * this.radius ** 2;
      }
  }
}

const circle2 = createCircle(7);
console.log(circle2.calculateArea()); // Output: 153.93804002589985

/*
* Constructor function
* A constructor function is a function that is used to create objects. It's used to initialize properties and methods.
*/
function Circle(radius){
   this.radius= radius;
   this.calculateArea= function() {
       return Math.PI * this.radius ** 2;
   }
}

const circle3 = new Circle(10);
console.log(circle3.calculateArea()); // Output: 314.1592653589793
/*
* Object literal syntax
* In this syntax it harder to share functionality across objects. This can result in code duplication and limited reusability.
*/
const literalCircle ={
    radius: 5,
    calculateArea: function() {
        return Math.PI * this.radius ** 2;
    }
}

console.log("Object Literal", literalCircle.calculateArea()); // Output: 78.53981633974483

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

const factoryCircle = createCircle(7);
console.log("Factory Function", factoryCircle.calculateArea()); // Output: 153.93804002589985

/*
* Constructor function
* A constructor function is a function that is used to create objects. It's used to initialize properties and methods.
*/
class Circle{
   constructor(radius){
      this.radius = radius;
      this.calculateArea = function() {
          return Math.PI * this.radius ** 2;
      }
   }
}

const constructorCircle = new Circle(10);
console.log("Constructor", constructorCircle.calculateArea()); // Output: 314.1592653589793

/*
* Constructor property
* The constructor property is a special property available on all objects in JavaScript that refers to the function or class that was used to create the instance of the object. Essentially, it points to the "blueprint" that was responsible for building that object.
*/

// Constructor property in factory function
function createCircle(radius) {
   return {
      radius,
      calculateArea: function() {
          return Math.PI * radius ** 2;
      }
   };
}

const circle1 = createCircle(5);
console.log(circle1.constructor); // Output: ƒ Object() { [native code] }

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
// Factory function do not create instances. It return object literal and constructor points to the object itself.
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


// Constructor property in class or constructor function
// A class or constructor function create a instance of the object because of new keyword. So implicitly that object created from constructor prototype and automatically it's constructor property point to that prototype that was responsible to create that object.
class Circle {
   constructor(radius) {
      this.radius = radius;
      this.calculateArea = function() {
          return Math.PI * this.radius ** 2;
      };
   }
}

const circle2 = new Circle(7);
console.log(circle2.constructor); // Output: ƒ Circle(radius) { ... }

// Constructor Function (Traditional Approach)
function Personn(name, age) {
   this.name = name;
   this.age = age;
}

Personn.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Personn("John", 30);
const person2 = new Personn("Alice", 25);

person1.greet();
person2.greet();

// Class Syntax (ES6 Approach)
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }
}

const person11 = new Person("John", 30);
const person21 = new Person("Alice", 25);

person11.greet();
person21.greet();

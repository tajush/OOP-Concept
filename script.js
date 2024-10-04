// 

// const minutes={
//    seconds:120,
//   getTimeInMinutes(){
//       return this.seconds /60
//    }
// }
// console.log(minutes.getTimeInMinutes(),"minutes");

const minutes1=function(seconds){
   return{
      seconds,
      getTimeInMinutes(){
         return this.seconds/60
      }
   }


}
 
 console.log(minutes1(60).constructor);
// console.log(timeObject.getTimeInMinutes());


class calculateMinutes{
   constructor(seconds){
      this.seconds=seconds;
      this.getMinutes=function(){
         return this.seconds/60
      }

   }
}
const timeObject=new calculateMinutes(60)
console.log(timeObject.constructor);
function createCircle(radius) {
   return {
      radius,
      calculateArea: function() {
          return Math.PI * radius ** 2;
      }
   };
}

const circle1 = createCircle(5);
console.log(circle1.constructor); 

class Circle {
   constructor(radius) {
      this.radius = radius;
     
   }
 calculateArea () {
      return Math.PI * this.radius ** 2;
  };
}

const circle2 = new Circle(7);
console.log(circle2.calculateArea()); 

class person{
   constructor(name,age){
   this.name=name,
   this.age=age}
}
person.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
const person3=new person('tajus',22);
// Creating instances of Person
const person1 = new person("John", 30);
const person2 = new person("Alice", 25);
person3.greet()

// Using the prototype method
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Alice and I am 25 years old.
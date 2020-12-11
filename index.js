// Your code here
class Cat{
   constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  } 
<<<<<<< HEAD
    speak() {
=======
    function speak() {
    let cat = new Cat("Sasha", "female");
>>>>>>> 33656e407819cc9c2711e7a750d85d6f77d97021
    return cat.name + " says meow!";
  }
}



class Dog{
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
<<<<<<< HEAD
   speak() {
=======
  function speak() {
    let dog = new Dog("Rufio", "male");
>>>>>>> 33656e407819cc9c2711e7a750d85d6f77d97021
    return dog.name + " says woof!";
  }
}

class Bird{
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
<<<<<<< HEAD
    speak() {
=======
   function speak() {
    let bird = new Bird("Pablo", "male")
    let bird2 = new Bird("Mable", "female")
>>>>>>> 33656e407819cc9c2711e7a750d85d6f77d97021
    if(this.sex==="male"){
    return `It's me! ${this.name}, the parrot!`;
  }else{
    return `${this.name} says squawk!`;
  }
}
}

<<<<<<< HEAD
let cat = new Cat("Sasha", "female");
cat.speak();
let dog = new Dog("Rufio", "male");
Dog.speak();

let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")
Bird.speak();
bird2.speak();

=======
>>>>>>> 33656e407819cc9c2711e7a750d85d6f77d97021



// Your code here
class Cat{
   constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  } 
    speak() {
    return cat.name + " says meow!";
  }
}



class Dog{
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
   speak() {
    return dog.name + " says woof!";
  }
}

class Bird{
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
    speak() {
    if(this.sex==="male"){
    return `It's me! ${this.name}, the parrot!`;
  }else{
    return `${this.name} says squawk!`;
  }
}
}

let cat = new Cat("Sasha", "female");
cat.speak();
let dog = new Dog("Rufio", "male");
Dog.speak();

let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")
Bird.speak();
bird2.speak();




// Your code here
class Cat{
   constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  } 
    speak() {
    let cat = new Cat("Sasha", "female");
    return cat.name + " says meow!";
  }
}



class Dog{
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
   speak() {
    let dog = new Dog("Rufio", "male");
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




class Person {
   constructor (name,age,place,doy,work){
    this.name = name;
    this.age = age;
    this.place = place;
    this.doy = doy;
    this.work = work;   
   }
}

const person1 = new Person("John", 30, "New York", 2004, "Teacher");
console.log(person1)
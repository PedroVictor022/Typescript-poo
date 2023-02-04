class Person {
  name: string;
  age: number;
  work: boolean;

  constructor(name: string, age: number, work: boolean) {
    this.name = name;
    this.age = age;
    this.work = work;
  }

  ageDays(): number {
    const agePerson = this.age;
    const convertAge = agePerson * 365;
    return convertAge;
  }
}

const person1 = new Person('Pedro', 20, true)
console.log(person1.ageDays());
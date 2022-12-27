class User2 {
  static age = 0;
  static id_person = '000';

  constructor(
    public name: string,
    public last_name: string,
    public age: number,
  ){}

  static createPerson(name: string, last_name: string, age: number) {
    return new User2(name, last_name, age);
  }

  static speak(text: string) {
    return text;
  }
}

const p1 = User2.createPerson('Joao', 'Paulo', 32);
console.log(p1);

const teste1 = User2.speak("oi");
console.log(teste1);
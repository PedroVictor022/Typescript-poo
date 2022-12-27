abstract class Personagem {
  constructor(
    protected name: string,
    protected attack: number,
    protected life: number
  ) {}

  attackPerson(personagem: Personagem): void {
    console.log(`${this.name} this is attack...`)
    personagem.lifeDrain(this.attack)
  }

  lifeDrain(attack: number): void {
    this.life -= attack;
    console.log(`${this.name} esta sendo atacado... e agora tem ${this.life} de vida`);
  } 
}

class Warrior extends Personagem {}
class Monster extends Personagem {}

const w1 = new Warrior('Warrior', 100, 500);
const m1 = new Monster('Lock', 60, 300);


w1.attackPerson(m1);
w1.attackPerson(m1);
m1.attackPerson(w1);
m1.attackPerson(w1);
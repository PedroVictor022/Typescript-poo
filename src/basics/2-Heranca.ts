class User {
  constructor(
    public name: string,
    public last_name: string,
    private id: string
  ) {}

  getUserInfo(): string {
    return `${this.name} ${this.last_name}`;
  }

  getUserID(): string {
    return this.id;
  }
}

class Admin extends User {
  isAdmin: boolean;
  
  constructor(name: string, last_name: string, id: string, isAdmin: boolean) {
    super(name, last_name, id);
    this.isAdmin = isAdmin;
  }

  getAllInfos(): string {
    console.log("-------------");
    return super.getUserInfo();
  }
}

const user1 = new User("Lucky", "Skywalker", "12309123");
const admin1 = new Admin("Master", "Yoda", "000", true);

console.log(admin1);

console.log(admin1.getAllInfos());

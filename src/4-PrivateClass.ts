class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Connect this database: ${this.host}//${this.user} -- ${this.password}`);
  }

  static createDatabase(host: string, user: string, password: string): Database {
    if(Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
    // `${host}//${user} -- ${password}`
  }
}

const db1 = Database.createDatabase('8080', 'local', '1234');
db1.connect();

const db2 = Database.createDatabase('8080', 'local', '1234');
db2.connect();
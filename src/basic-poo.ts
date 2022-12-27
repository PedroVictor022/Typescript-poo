// class User {
//   public readonly username: string;
//   private readonly conquests: Conquests[] = [];
//   protected readonly user_id: string;

//   constructor(username: string, user_id: string) {
//     this.username = username;
//     this.user_id = user_id;
//   }

//   addConquest(item: Conquests): void {
//     this.conquests.push(item);
//   }

//   showMyChallanges() {
//     for(const items of this.conquests) {
//       console.log(items);
//     }
//   }
// }

// class Conquests {
//   constructor(readonly challanger: string) {}
// }

// const user1 = new User("LadyesGo123", "09sdsd0f92309");
// const c1 = new Conquests("Community friend");
// const c2 = new Conquests("God Game");
// const c3 = new Conquests("Review of code");

// user1.addConquest(c1);
// user1.addConquest(c2);
// user1.addConquest(c3);

// console.log(user1);
// user1.showMyChallanges();

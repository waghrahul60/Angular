export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;

    // userdefine data type //

}

let user: User = { name: "Rahul", id: 1, email: "rahul@gamil.com" }

// user.name;
// user.email;

// object destructuring
let {name: userName, email}: User = { name: "Rahul", id: 1, email: "rahul@gamil.com" }

console.log(userName);

// put ? in front of property to become Optional

interface Employees extends User {

    salary: number;

}

let employee: Employees = { name: "Rahul", id: 1, email: "rahul@gamil.com", salary: 2500 }


export interface Login {
    Login(): User;
}

// arrsy destructuring

let [user1,usre2, ...restUsers]: User[] = [
    { name: "Rahul", id: 1, email: "rahul@gamil.com" },
    { name: "kalpesh", id: 2, email: "rahul@gamil.com" },
    { name: "sudya", id: 3, email: "rahul@gamil.com" },
    { name: "om", id: 4, email: "rahul@gamil.com" }

];

console.log(user1);
console.log(usre2);
console.log(restUsers);

let reuslt = restUsers.filter(user => user.id > 3)



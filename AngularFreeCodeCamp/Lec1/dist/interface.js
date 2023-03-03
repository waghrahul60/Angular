"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "Rahul", id: 1, email: "rahul@gamil.com" };
// user.name;
// user.email;
// object destructuring
let { name: userName, email } = { name: "Rahul", id: 1, email: "rahul@gamil.com" };
console.log(userName);
let employee = { name: "Rahul", id: 1, email: "rahul@gamil.com", salary: 2500 };
// arrsy destructuring
let [user1, usre2, ...restUsers] = [
    { name: "Rahul", id: 1, email: "rahul@gamil.com" },
    { name: "kalpesh", id: 2, email: "rahul@gamil.com" },
    { name: "sudya", id: 3, email: "rahul@gamil.com" },
    { name: "om", id: 4, email: "rahul@gamil.com" }
];
console.log(user1);
console.log(usre2);
console.log(restUsers);
let reuslt = restUsers.filter(user => user.id > 3);

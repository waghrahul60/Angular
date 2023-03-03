import {Login, User} from './interface';
//import * as UserLogin from './interface'; UserLogin.Login

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
};


class Employee implements Login{
    #id: number;
    name: string;
    address: Address;

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }
    Login(): User {
       return { name: "Rahul", id: 1, email: "rahul@gamil.com" }
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address.city}`;
    }

    static getEmpCount() {
        return 50;
    }

    //getters setters

    get empId(): number {
        return this.#id;
    }


    set empId(id: number) {
        this.#id = id;
    }
}

// # mens private


let emp = new Employee(1, "Rahul", { street: "ABC", city: "Pune", state: "pune", pin: "684654" });
// emp.id = 1;
// emp.name = "Rahul";
// emp.address = "Pune";

Employee.getEmpCount(); // Without Creating new instance you can used static


emp.empId = 100;
console.log(emp.empId)

console.log(emp);
let address = emp.getNameWithAddress();
console.log(address);


class Manager extends Employee {

    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} ia a manager ${this.address.city}`;
    }

}

let mike = new Manager(2, "sudya", { street: "ABC", city: "Pune", state: "pune", pin: "684654" });

console.log(mike.getNameWithAddress());
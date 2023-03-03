"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
;
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    Login() {
        return { name: "Rahul", id: 1, email: "rahul@gamil.com" };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address.city}`;
    }
    static getEmpCount() {
        return 50;
    }
    //getters setters
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
}
_Employee_id = new WeakMap();
// # mens private
let emp = new Employee(1, "Rahul", { street: "ABC", city: "Pune", state: "pune", pin: "684654" });
// emp.id = 1;
// emp.name = "Rahul";
// emp.address = "Pune";
Employee.getEmpCount(); // Without Creating new instance you can used static
emp.empId = 100;
console.log(emp.empId);
console.log(emp);
let address = emp.getNameWithAddress();
console.log(address);
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} ia a manager ${this.address.city}`;
    }
}
let mike = new Manager(2, "sudya", { street: "ABC", city: "Pune", state: "pune", pin: "684654" });
console.log(mike.getNameWithAddress());

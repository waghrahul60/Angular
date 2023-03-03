// String
let Lname = "Rahul";

let name1: string;
name1 = "Rahul";
let name2 = name1.toUpperCase();
console.log(name2);
//Lname = 10;

//Number
let age: number;
age = 28;
let result = parseInt("30");
console.log(result);

//Boolean
let isValied: boolean = false;
isValied = false;
console.log(isValied);

//arry
let empList = [];

let empList1: string[];

empList1 = ["Rahul", "sudya", "kalpesh"];
let depList: Array<string>;

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let result1 = numList.filter((num) => num > 2)

let result2 = numList.find((num) => num === 2)
console.log(result1)
console.log(result2)

let sum = numList.reduce((acc, num) => acc + num)
console.log(sum)

// Enum

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Red;

let swapNum: [number, number];
function swapNums(num1: number, num2: number): [number, number] {
    return [num1, num2]
}
swapNum = swapNums(10, 20);
swapNum[1];


//any - do not used
let department: any;

department = 1;




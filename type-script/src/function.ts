// Function
// normal function, arrow function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}
const sum = addNormal(12, 45);
console.log(addNormal);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(12, 22);

// object => function => method

const poorUser = {
    name: "Rafsun",
    balance: 0,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

poorUser.addBalance(10000);

const arr: number[] = [1, 3, 6];

const sqrArr = arr.map((element: number): number => element * element);
console.log(sqrArr);
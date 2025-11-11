// array , object

const bazarList: string[] = ['eggs', "milk", "suger"];

let mixArray: (string | number)[] = ['eggs', 12, "milk", 8, "suger", 5];

console.log(mixArray);


let coordinate: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "Wife"];

let nameAndRoll: [string, number] = ["Rafsun", 29];


let destination: [string, string, number] = ["Dhaka", "Chattagram", 3];

// reference type : object

const user: {
    organization: "Programming Hero";  // value => type : literal types
    firstName: string;
    middleName?: string; //optional type    
    lastName: string;
    isMaried: boolean;
} = {
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMaried: true,
    organization: "Programming Hero"
}



// user.organization = "Programming Hero Fire";
console.log(user.organization);


const user1: {
    readonly organization: string;  // access modifire
    firstName: string;
    middleName?: string; //optional type    
    lastName: string;
    isMaried: boolean;
} = {
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMaried: true,
    organization: "Programming Hero"
}



// user.organization = "Programming Hero Fire";
console.log(user.organization);
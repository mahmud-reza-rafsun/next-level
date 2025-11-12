type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: "Male" | "Female",
    contact: string,
    address: {
        division: string,
        city: string
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: "Rafsun",
        lastName: "Reza"
    },
    gender: "Male",
    contact: "01628745520",
    address: {
        division: "Barishal",
        city: "Kathalia"
    }
};

const user2: User = {
    id: 123,
    name: {
        firstName: "Rafsun",
        lastName: "Reza"
    },
    gender: "Male",
    contact: "01628745520",
    address: {
        division: "Barishal",
        city: "Kathalia"
    }
};


// function

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) => num1 + num2;
// dynamically generalize 

type GenericArray<T> = Array<T>

// const friends: string[] = ['Mr.x', 'Mr.Y', 'Mr.z'];
const friends: GenericArray<string> = ['Mr.x', 'Mr.Y', 'Mr.z'];

// const rollNumber: number[] = [4, 7, 11];
const rollNumber: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string, age: number }

const userList: GenericArray<User> = [
    {
        name: 'Mr. X',
        age: 21
    },
    {
        name: 'Mr. Y',
        age: 23
    }
]








type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [12, 34];
const coordinates2: Coordinates<string, string> = ["21", "45"];
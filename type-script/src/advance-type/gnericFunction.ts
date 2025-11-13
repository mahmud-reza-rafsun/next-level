// generic Function 

interface User {
    id: number;
    name: string;
}

// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithObject = (value: User) => {
//     return [value]
// }

const createArrayWithGenerics = <T>(value: T) => [value]

const arrayString = createArrayWithGenerics("Apple");
const arrayNum = createArrayWithGenerics(222);
const arrayObj = createArrayWithGenerics({
    id: 123,
    name: "Rafsun"
});

// console.log(arrayNum);

// tuple

const createArrayWithTuple = (params1: string, param2: string) => [params1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]

const rest1 = createArrayTupleWithGeneric("Rafsun", "Dev")
// console.log(rest1); 

// 

const addToStudentInCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "Rafsun",
    hasPen: true
}

const student2 = {
    id: 333,
    name: "Mezba",
    hasCar: false,
    isMarried: false
}

const result = addToStudentInCourse(student1);
console.log(result);
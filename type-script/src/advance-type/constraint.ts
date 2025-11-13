// constraint : strict rules deya

interface Student {
    id: number;
    name: string;
    dateOfBirth?: string;
}

const addToStudentInCourse = <T extends Student>(studentInfo: T) => {
    return {
        course: "Next Level Dev",
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

const student3 = {
    id: 444,
    name: "Rafsun2",
    hasWatch: true,
    dateOfBirth: "25-10-205"
}

const result = addToStudentInCourse(student3);
console.log(result);
// polymorphism = bohurupi

class Person {
    getSleep() {
        console.log(`I am a normal person and i sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am a student and i sleep for 7 hours`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a Next Level Developer and i sleep for 6 hours`);
    }
}

const getSleepHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const student = new Student();
const nextLevelDeveloper = new NextLevelDeveloper();

getSleepHours(nextLevelDeveloper);

class Shape {
    getArea() {
        return 0;
    }
}
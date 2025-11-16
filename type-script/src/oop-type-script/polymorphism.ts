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

class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(radius: number) {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {

    height: number;
    width: number;

    constructor(height: number, width: number) {
        super()
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.height * this.width;
    }
}


const getArea = (params: Shape) => {
    console.log(params.getArea());
}


const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(12, 20);

// getArea(shape2);

const pie = Math.PI * 10;
console.log(pie);

// const 
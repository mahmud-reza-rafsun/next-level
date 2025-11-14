class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(id: number) {
        console.log(`${this.name} is now ${this.age} or form ${this.address} and her id: ${id}`);
    }
}


class Student extends Parent { };

const student1 = new Student("manik", 20, "Barishal");

student1.getSleep(12);

class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(hours: number) {
        console.log(`${this.name} ${hours} ghonta class neyi and ${this.designation}`);
    }

};

const teacher1 = new Teacher("Teacher", 6, "Dhaka, Bangladesh", "Senior Teacher");
teacher1.takeClass(6)
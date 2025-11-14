// opp instance of guard type narrowing

class Person {
    name: string;
    constructor(name: string){
        this.name = name
    }
    getSleep(numOfHours: number){
        console.log(`${this.name} dayly ${numOfHours} ghonta ghumay`);
    }
}

class Student extends Person{
    constructor(name: string){
        super(name)
    }
    doStudy(numOfHours: number){
        console.log(`${this.name} dayly ${numOfHours} ghonta study kore`);
    }
}

class Teacher extends Person {
    constructor(name: string){
        super(name)
    }
    takeClass(numOfHours: number){
        console.log(`${this.name} dayly ${numOfHours} ghonta class ney`);
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.doStudy(6);
    }else if(isTeacher(user)){
        user.takeClass(8);
    }else {
        user.getSleep(7);
    }
}

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");


getUserInfo(teacher1)
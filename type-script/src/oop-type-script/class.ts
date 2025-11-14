// oop - class - object

class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
        this.name = name
        this.species = species
        this.sound = sound
    }
    makeSound() {
        console.log(`${this.name} is making ${this.sound}`);
    }
}

const dog = new Animal("Dog", "heu heu", "gheu gheu");
console.log(dog);

const cat = new Animal("Cat Bhai", "Cat", "mewo mewo")
cat.makeSound();
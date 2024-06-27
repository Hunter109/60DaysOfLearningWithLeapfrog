class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says woof!`);
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} says meow!`);
    }
}

class AnimalFactory {
    createAnimal(type, name) {
        switch (type) {
            case "dog":
                return new Dog(name);
            case "cat":
                return new Cat(name);
            default:
                throw new Error("Unknown animal type");
        }
    }
}

const factory = new AnimalFactory();
const myDog = factory.createAnimal("dog", "Hunter");
const myCat = factory.createAnimal("cat", "$nonymous");

myDog.speak();
myCat.speak();

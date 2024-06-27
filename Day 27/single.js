class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;

        this.data = "Initial Data";
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }
}

const singleton1 = new Singleton();
console.log(singleton1.getData());
const singleton2 = new Singleton();
singleton2.setData("New Data");

console.log(singleton1.getData());
console.log(singleton1 === singleton2);

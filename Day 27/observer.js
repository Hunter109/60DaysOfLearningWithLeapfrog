class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(data) {
        this.observers.forEach((observer) => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log(`Observer received data: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Namaste Observers");

subject.unsubscribe(observer1);

subject.notify("Only Observer2 will receive this"); 

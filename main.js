class Node {
    constructor(value) {
        (this.value = value), (this.next = null);
    }
}

class Queue {
    constructor() {
        (this.first = null), (this.last = null), (this.length = 0);
    }
    peek() {
        return this.first; // first  item in the queue
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(!this.first) {
        return null;
    }
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Bob'));
console.log(myQueue.enqueue('Karin'));
console.log(myQueue.enqueue('Steve'));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

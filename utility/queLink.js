class Node {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
};

class queue {

    constructor() {
        this.first = null;
        this.rear = null;
        this.count = 0;
    }

    queue() {
        this.first = new Node(null, null);
        this.rear = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count==0;
    }

    enqueue(e) {
        if (this.first === null) {
            this.first = new Node(e, null);
            this.rear = this.first;
            this.count++;
            return;
        }

        this.rear.next = new Node(e, null);
        this.rear = this.rear.next;
        this.count++;
    }

    dequeue() {
        if (this.first === null) return null;
        var n = this.first.ele;
        this.first = this.first.next;
        this.count--;

        return n;
    }

    printQueue() {
        if (this.size() === 0) return "[]";
        var n = this.first;
        var str = n.ele + " ";
        while (n.next !== null) {
            n = n.next;
            str += n.ele + " ";
        }
        return str;

    }
}
module.exports = queue
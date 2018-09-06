var queue = function() {
    this.first = null;
    this.size = 0;
};
  
var Node = function(data) {
    this.data = data;
    this.size++;
};
  
queue.prototype.enqueue = function(value) {
    var node = new Node(value);
  
    if (!this.first){
      this.first = node;
    } else {
      n = this.first;
      
    }
  
    this.size += 1;
    return node;
};
  
queue.prototype.dequeue = function() {
    temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
};
var q=new queue();
q.enqueue(5);
q.enqueue(10);
q.enqueue(15);
console.log(q);
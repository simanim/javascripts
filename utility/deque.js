function deque()
{
    this.storage=[];
}

deque.prototype.addFront=function(value)
{
    this.storage.unshift(value);
}

deque.prototype.addRear=function(value)
{
    this.storage.push(value);
}

deque.prototype.removeFront=function()
{
    return this.storage.shift();
}

deque.prototype.removeRear=function()
{
    return this.storage.pop();
}

deque.prototype.isEmpty=function()
{
    return !Boolean(this.storage.length);
}

deque.prototype.print=function()
{
    var str="";
    for(var i=0;i<this.storage.length;i++)
    str+=this.storage[i]+" ";
    return str;
}

deque.prototype.getSize=function()
{
    return this.storage.length;
}
    
module.exports=new deque()
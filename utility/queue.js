function queue(){
    this.storage=[];
}
queue.prototype.enqueue=function(value)
{
    this.storage.push(value);
}

queue.prototype.dequeue=function()
{
    if(this.isEmpty())
    return "underFlow";
    return this.storage.shift();
}

queue.prototype.front=function()    
{
    if(this.isEmpty())
    return "no element";
    return this.storage[0];
}

queue.prototype.isEmpty=function()    
{
    return this.storage.length==0;
}

queue.prototype.print=function()    
{
    var str="";
    for(var i=0;i<this.storage.length;i++)
    str+=this.storage[i]+" ";
    console.log(str);
}

queue.prototype.getSize=function()    
{
    return this.storage.length;
}

module.exports=new  queue()
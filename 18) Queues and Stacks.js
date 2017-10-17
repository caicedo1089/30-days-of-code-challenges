class Solution 
{

    constructor()
    {
        this.stack = ''
        this.queue = ''
    }
    
    pushCharacter(c)
    {
        this.stack = c + this.stack
    }
    
    enqueueCharacter(c)
    {
        this.queue = this.queue + c
    }
    
    popCharacter()
    {
       let result = this.stack[0]
       
       this.stack = this.stack.substr(1)
       
       return result
    }
    
    dequeueCharacter()
    {
        let result = this.queue[0]
        
        this.queue = this.queue.substr(1)
       
       return result
    }
}
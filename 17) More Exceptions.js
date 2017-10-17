class Calculator
{
    constructor()
    {
       
    }
    
    power(n, p)
    {
        if(n<0 || p<0)
        {
            throw 'n and p should be non-negative'
        }
        
        let result = Math.pow(n, p)
        
        
        return result
    }
}
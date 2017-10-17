function processData(input)
{
    let arrInput = input.split('\n')
    let n = parseInt(arrInput.shift())
    
    for(let i=0; i<n; ++i)
    {
        let strCaso = arrInput[i]
        let strEven = '', strOdd = ''
        
        for(let j=0; j<strCaso.length; ++j)
        {
            if(j==0 || j%2 == 0)
            {
               strEven += strCaso[j]  
            }
            else
            {
               strOdd += strCaso[j]   
            }
        }
        console.log(`${strEven} ${strOdd}`)
    }
} 
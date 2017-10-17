function processData(input) 
{
    let arrInput = input.split('\n')
    let nroCases = arrInput[0]
    
    for(let i=1; i<=nroCases; ++i)
    {
        let nroPrime = parseInt(arrInput[i])
        let strPrimeOrNot = 'Prime'
        
        //Caso par
        if(nroPrime < 2 || (nroPrime>2 && nroPrime%2 == 0))
        {
            strPrimeOrNot = 'Not prime'
        }
        else
        {
            let j = 1
            let divisor = j*2+1

            while(divisor <= Math.ceil(nroPrime/divisor))
            {
                if(nroPrime%divisor == 0)
                {
                    strPrimeOrNot = 'Not prime'
                    break
                }
                divisor = (++j)*2+1
            }
        }
        
        console.log(strPrimeOrNot)
    }
} 
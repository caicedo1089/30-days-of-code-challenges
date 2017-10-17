function main() 
{
    var N = parseInt(readLine());
    var mod = N%2
    
    if(mod==1)
    {
        console.log('Weird')
    }
    else
        if(N>=2 && N<=5)
        {
           console.log('Not Weird')
        }
        else
            if(N>=6 && N<=20)
            {
                console.log('Weird')
            }
            else
                if(N>=20)
                {
                    console.log('Not Weird')
                }
}
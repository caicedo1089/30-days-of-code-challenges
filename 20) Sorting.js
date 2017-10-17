function main() 
{
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    
    let numberOfSwaps = 0, numberTmp
    
    for(let i=0; i<n; ++i)
    {
        for(let j=0; j<n-1; ++j)
        {
            if(a[j]>a[j+1])
            {
                numberTmp = a[j]
                a[j] = a[j+1]
                a[j+1] = numberTmp
                numberOfSwaps++  
            }
        }
    }
    
    console.log(`Array is sorted in ${numberOfSwaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)
}
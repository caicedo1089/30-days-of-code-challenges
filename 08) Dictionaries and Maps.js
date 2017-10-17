function processData(input) 
{
    let arrInput = input.split('\n')
    let n = arrInput.shift()
    let diccionary = {}, i=0
    
    //Armar el diccionario
    for(i=0; i<n; ++i)
    {
        let line = arrInput[i].split(' ')
        diccionary[line[0]] = line[1]
    }
    
    let lineSearch, resultSearch
    //while(arrInput.length != 0)
    for(; i<arrInput.length; ++i)
    {
        lineSearch = arrInput[i].trim()
        resultSearch = 'Not found'
        
        if(diccionary[lineSearch])
        {
           resultSearch = `${lineSearch}=${diccionary[lineSearch]}`
        }
        
        console.log(resultSearch)   
    }
} 
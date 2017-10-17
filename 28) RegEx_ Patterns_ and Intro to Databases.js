function main() 
{
    var N = parseInt(readLine());
    let dictionary = {}
    
    for(var a0 = 0; a0 < N; a0++)
    {
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        
        if(emailID.indexOf('@gmail.com') != -1)
        {
            dictionary[firstName] = dictionary[firstName] || []
            dictionary[firstName].push(emailID)
        }
    }
    
    let arrKeysSort = Object.keys(dictionary).sort()
    
    for(let i=0; i<arrKeysSort.length; ++i)
    {
        dictionary[arrKeysSort[i]].map(x =>{console.log(`${arrKeysSort[i]}`)})
    }
}
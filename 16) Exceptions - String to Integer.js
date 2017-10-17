
function main() 
{    
    var S = readLine();
    
    try
    {
        S = eval(S)    
    }
    catch(err)
    {
        S = 'Bad String'
    }
    
    console.log(S)
}
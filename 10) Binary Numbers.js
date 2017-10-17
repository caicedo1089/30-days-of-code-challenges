function main() 
{
    var n = parseInt(readLine());
    let arrOnes = n.toString(2).split('0')
    
    arrOnes.sort(
        function(a, b)
        {
            return b.length - a.length 
        }
    )
    
    console.log(arrOnes[0].length)
}
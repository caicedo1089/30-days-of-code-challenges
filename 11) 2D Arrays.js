function main() 
{
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++)
    {
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let winMask = [[1,1,1], [0,1,0], [1,1,1]]
    let maxHourglasses = -9 * 7
    
    for(let i = 0;  i< arr.length; ++i)
    {
        let row = arr[i]
        for(let j = 0;  j< row.length; ++j)
        {
            if((i+2)<6 && (j+2)<6)
            {
                let tempHourglasses = 0
                for(let ii=0; ii<winMask.length; ++ii)
                {
                    let rowMask = winMask[ii]
                    for(let jj=0; jj<rowMask.length; ++jj)
                    {
                        if(rowMask[jj] == 1)
                        {
                           tempHourglasses += arr[i + ii][j + jj]
                        }
                    }
                }
                //console.log(tempHourglasses)
                if(maxHourglasses < tempHourglasses)
                {
                    maxHourglasses = tempHourglasses
                }
            }
        }   
    }
    
    console.log(maxHourglasses)
}
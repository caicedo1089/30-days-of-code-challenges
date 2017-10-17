function processData(input) 
{
   let arrInput = input.split('\n')
   
   let arrActuallyDate = arrInput[0].split(' ').map(x => parseInt(x))
   let arrExpectedDate = arrInput[1].split(' ').map(x => parseInt(x))
   
   let day = 0, month = 1, year = 2
   
   let totalFine = 0
   
   if(arrActuallyDate[year] == arrExpectedDate[year])
   {
      if(arrActuallyDate[month] == arrExpectedDate[month])
      {
         if(arrActuallyDate[day] > arrExpectedDate[day])
         {
            totalFine = (arrActuallyDate[day] - arrExpectedDate[day]) * 15
         }
      }
      else
          if(arrActuallyDate[month] > arrExpectedDate[month])
          {   
              totalFine = (arrActuallyDate[month] - arrExpectedDate[month]) * 500
          }
   }
    
    if(arrActuallyDate[year] > arrExpectedDate[year])
    {
        totalFine = 10000
    }
   
   console.log(totalFine)
} 

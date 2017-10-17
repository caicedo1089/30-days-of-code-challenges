function Person(initialAge)
{
    if(initialAge<0)
    {
        console.log('Age is not valid, setting age to 0.')
        initialAge = 0
    }
    
    this.age = initialAge
    
    // Add some more code to run some checks on initialAge
    this.amIOld=function()
    {
        let result = 'You are young.'
        // Do some computations in here and print out the correct statement to the console
        if(this.age>12 && this.age<18 )
        {
            result = 'You are a teenager.'
        }
        else
            if(this.age>17)
            {
                result = 'You are old.'   
            }
        
        console.log(result)
    };

    this.yearPasses=function()
    {
        // Increment the age of the person in here
        ++this.age
    };
}
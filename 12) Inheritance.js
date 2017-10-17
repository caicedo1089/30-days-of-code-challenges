class Student extends Person {
    
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores)
    {
        super([firstName, lastName, id])
        
        this.firstName = firstName 
        this.lastName = lastName
        this.idNumber = id
        this.scores = scores || []
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    calculate()
    {
        let average = this.scores.reduce(
            function(valorAnterior, valorActual, indice, vector)
            {
                return valorAnterior + valorActual
            },
            0
        ) / this.scores.length
        
        let scale = {
            O: 'v >= 90 && v <= 100',
            E: 'v >= 80 && v < 90',
            A: 'v >= 70 && v < 80',
            P: 'v >= 55 && v < 70',
            D: 'v >= 40 && v < 55',
            T: 'v < 40',
        }
        
        for (let key in scale) 
        {
            if (scale.hasOwnProperty(key)) 
            {
                let condition = scale[key];
                
                if(eval(condition.split('v').join(average)))
                {
                   return key
                }
            }
        }
    }
}
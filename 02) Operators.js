function main(mealCost, tipPercent, taxPercent)
{
	// Write your code here
    var tip = mealCost * (tipPercent/100)
    var tax = mealCost * (taxPercent/100)
    var totalCost = Math.round(mealCost + tip + tax)
    
    // Use console.log() to print to stdout

    console.log(`The total meal cost is ${totalCost} dollars.`)
}

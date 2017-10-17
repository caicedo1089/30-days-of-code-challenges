
this.getHeight = function(root)
{
	let heightLeft = 0
	let heightRight = 0
	
	if(root.left)
	{
		heightLeft += this.getHeight(root.left) + 1
	}
	
	if(root.right)
	{
		heightRight += this.getHeight(root.right) + 1
	}

	return (heightLeft > heightRight? heightLeft : heightRight)
}

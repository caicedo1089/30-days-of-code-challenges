this.levelOrder = function(root)
{
	let objLevels = {}
        
	function myLevelOrder(root, level)
	{
		if(root != null)
		{
			objLevels[level] = objLevels[level] || []
			objLevels[level].push(root.data)
			myLevelOrder(root.left, level+1)
			myLevelOrder(root.right, level+1)
		}
	}

	myLevelOrder(root, 0)
	
	for (let myLevel in objLevels)
	{
		if (objLevels.hasOwnProperty(myLevel)) 
		{
			let arrLevel = objLevels[myLevel];
			
			arrLevel.map(
				function(data)
				{
					process.stdout.write(data + ' ')
				}
			)
			
		}
	}
}
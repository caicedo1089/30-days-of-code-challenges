this.removeDuplicates = function(head)
{
	if(head != null)
	{
		if(head.next != null)
		{
			if(head.data == head.next.data)
			{
				head.next = this.removeDuplicates(head.next.next)
			}
			else
			{
				head.next = this.removeDuplicates(head.next)
			}
			
			if(head.next != null && head.next.data == head.data)
			{
				head.next = head.next.next  
			}
		}
	}
	
	return head
}

	this.insert = function(head, data)
    {
        let newNode = new Node(data)
        
        if(head != null)
        {
            let iterator = head

            while(iterator.next != null)
            {
                iterator = iterator.next
            }

            let newNode = new Node(data)

            iterator.next = newNode
        }
        else
        {
            head = newNode
        }
        
        return head
    };

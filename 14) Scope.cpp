	Difference (vector<int> v) 
    {        
        for ( int n=0 ; n<v.size() ; ++n )
        {
            elements.push_back(v[n]);
        }
    }   

    void computeDifference()
    {   
        maximumDifference = 0;
        
        for ( int n=0 ; n<elements.size()-1 ; ++n )
        {
            int base = elements.at(n);
            
            for(int  i=n+1; i<elements.size(); ++i)
            {
                int result = base - elements.at(i);
                
                if(result < 0)
                {
                    result *= -1;
                }
                
                if(result > maximumDifference)
                {
                    maximumDifference = result;
                }
            }
        }
    }
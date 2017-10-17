class Calculator: public AdvancedArithmetic
{
    public:
        int divisorSum(int n)
        {
           int result = 0;
           
           for(int i=1; i<=n; ++i)
           {
                if(n%i == 0)
                {
                    result += i;
                }
           }
           
           return result;
        };
};
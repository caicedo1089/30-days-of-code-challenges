/**
*    Name: printArray
*    Print each element of the generic vector on a new line. Do not return anything.
*    @param A generic vector
**/
template <class T>
void printArray (vector<T> a) 
{
  for(unsigned i=0; i<a.size(); ++i)
  {
      cout << a[i] << '\n';
  }
}

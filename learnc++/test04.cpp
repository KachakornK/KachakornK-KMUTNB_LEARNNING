#include <iostream>
using namespace std;
int main()
{
    int num;
    char charecter;
    cout<<"Input number line: ";
    cin>>num;
     
    cout<<"Input Charecter: ";
    cin>>charecter;
    for(int i=1; i<=num; i++){
        for(int j=1; j<=i; j++){
            cout<<charecter;
        }
        cout<<endl;
    }
    return 0;
    
} 
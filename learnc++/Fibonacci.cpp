#include <iostream>
using namespace std;
int main()
{
int test=0,sum=0,num0=0,num1=1,i=1;
cout<<"Enter number >> ";
cin>>test;
cout<<"0\t";
while(sum<test)
{
    num0=num1;
    num1=sum;
    sum = num0 + num1;
    cout<<sum<<"\t";
    i++;
 }
if(sum==test) cout<<" \nCorrect! at >> "<<i;
if(sum!=test) cout<<" \nIncorrect!";
return 0;
}
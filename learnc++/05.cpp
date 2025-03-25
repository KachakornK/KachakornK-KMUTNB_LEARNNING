#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
    int a,b,c,d,e;
    do{
        cout<<"Enter five number: ";
    cin>>a>>b>>c>>d>>e;
     if(a>30 || b>30 || c>30 || d>30 || e>30){
        cout<<"The input number cannot exceed 30"<<endl;
     }
    }while (a>30 || b>30 || c>30 || d>30 || e>30);
    cout <<right <<setw(3)<<a<<" : ";
    for (int i=1; i<= a;i++){
        cout <<"*";
    }
    cout<<endl;
    cout <<right <<setw(3)<<b<<" : ";
    for (int i=1; i<=a;i++){
        cout <<"*";
    }
    cout<<endl;
    cout <<right <<setw(3)<<c<<" : ";
    for (int i=1; i<=c; i++){
        cout<<"*";
    }
    cout<<endl;
    cout <<right <<setw(3)<<d<<" : ";
    for (int i=1; i<=d; i++){
        cout <<"*";
    }
    cout<<endl;
    cout <<right<<setw(3)<<e<<" : ";
    for (int i=1; i<=e; i++){
        cout<<"*";
    }
    return 0;
}
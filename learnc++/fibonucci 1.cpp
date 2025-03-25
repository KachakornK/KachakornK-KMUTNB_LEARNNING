#include <iostream>
using namespace std;

bool fibonacci(int n){
    int f1=1,f2=1,fn=0;
    bool flag = 0;
    int count =3;
    while(n>=fn){
        if(n==1){
            count=1;
            cout<<"number "<<n<<" is fibonacci in order "<<count<<" of fibonacci"<<endl;
            flag= true;
            break;
        }

        fn=f1+f2;
        if(n==fn){
            cout<<"number "<<n<<" is fibonacci in order "<<count<<" of fibonacci"<<endl;
            flag= true;
            break;
        }

        f1=f2;
        f2=fn;
        count++;
    }
    return flag;
}

int main(){
    int n;
    do{
    cout<<"enter number : ";
    cin>>n;
    if(fibonacci(n)!=true){
        cout<<"number "<<n<<" not fibonacci\n";
    }
    }while(true);
}
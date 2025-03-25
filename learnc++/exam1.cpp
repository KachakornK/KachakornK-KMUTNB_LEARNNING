#include <iostream>
using namespace std;
int main()
{
    int choice,total_n=0,total_d=0,total=0;
    while (true)
    {
        cout<<"-------------------\n";
        cout<<"----------MENU----------\n";
        cout<<"1 For Noodle Menu\n";
        cout<<"2 For Drink Menu\n";
        cout<<"3 For Check Bill\n";
        cout<<"0 For Exit\n";
        cout<<"Please enter your chioce >> ";
        cin>>choice;
        if(choice == 1){
            int choice_n;
            cout<<"----------Noodle Menu----------\n";
            cout<<"1 Beef Noodle 75 bath\n";
            cout<<"2 Pork Noodle 65 bath\n";
            cout<<"3 Chicken Noodle 60 bath\n";
            cout<<"4 Rice 10 bath\n";
            cout<<"Please enter your choice >> ";
            cin>>choice_n;
            if(choice_n == 1){
                total_n += 75;
                cout<<"Add Beef Noodel 75 bath\n";
            }else if (choice_n == 2){
                total_n += 65;
                cout<<"Add Pork Noodle 65 bath\n";
            }else if(choice_n == 3){
                total_n += 60;
                cout<<"Add Chicken Noodle 60 bath\n";
            }else{choice_n == 3;
                total_n += 10;
                cout<<"Add rice 10 bath\n";
            }
        }else if(choice == 2){
            int choice_d;
            cout<<"----------Drink Menu----------\n";
            cout<<"1 Coffe 40 bath\n";
            cout<<"2 Mathcha Green Tea Latte 55 bath\n";
            cout<<"3 Green Tea 35 bath\n";
            cout<<"4 Coca Cola 35 bath\n";
            cout<<"5 Drinking water 15 bath\n";
            cout<<"Please enter your choice >> ";
            cin>>choice_d;
            if(choice_d == 1){
                total_d += 40;
                cout<<"Add Coffe 40 bath\n";
            }else if(choice_d == 2){
                total_d += 55;
                cout<<"Mathcha Green Tea Latte 55 bath\n";
            }else if (choice_d == 3){
                total_d += 35;
                cout<<"Add Green Tea 35 Bath\n";
            }else if (choice_d == 4){
                total_d += 35;
                cout<<"Add Coca Cola 35 bath\n";
            }else{choice_d == 5;
                total_d += 15;
                cout<<"Add Drinking water 15 bath\n";
            }
        }else if(choice == 3){
            int total= total_n+total_d,cash;
            cout<<"----------Check Bill----------\n";
            cout<<"Total Price "<<total<<" Bath\n";
            cout<<"Recive Price >> ";
            cin>>cash;
            int Change = cash - total;
            cout<<"Change : "<<Change<<" Bath"<<endl;
        }else{choice == 0;
        cout<<"Program Exit";
        cout<<endl;}

    }
    return 0;
}
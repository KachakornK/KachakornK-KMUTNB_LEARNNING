#include <iostream>
using namespace std;
int main(){
    int choice, choice_noodle, choice_drink, total = 0, cash = 0, change = 0;
    do{
    cout << "----- MENU -----" << endl;
    cout << "1 For noodle menu" << endl;
    cout << "2 For drink menu" << endl;
    cout << "3 Check bill" << endl;
    cout << "0 Program exit" << endl;
    cout << "Please input menu >> ";
    cin >> choice;
    if(choice == 1){
    cout << "----- Noodle menu -----" << endl;
    cout << "1 Beef noodle 60 baht" << endl;
    cout << "2 Chicken noodle 55 baht" << endl;
    cout << "3 Pork noodle 50 baht" << endl;
    cout << "4 Rice 10 baht" << endl;
    cout << "Please noodle menu >> ";
    cin >> choice_noodle;
        if(choice_noodle == 1){
            total += 60;
            cout << "Add Beef noodle 60 baht" << endl;
        }
        else if(choice_noodle == 2){
            total += 55;
            cout << "Add Chicken noodle 55 baht" << endl;
        }
        else if(choice_noodle == 3){
            total += 50;
            cout << "Add Pork noodle 50 baht" << endl;
        }
        else if(choice_noodle == 4){
            total += 10;
            cout << "Add Rice 10 baht" << endl;
        }
    }
    else if(choice == 2){
    cout << "----- Drink menu -----" << endl;
    cout << "1 Coffee 40 baht" << endl;
    cout << "2 Matcha green tea latte 65 baht" << endl;
    cout << "3 Green tea 55 bath" << endl;
    cout << "4 Coca cola 20 baht" << endl;
    cout << "5 Drinking water 15 baht" << endl;
    cout << "Please drink menu >> ";
    cin >> choice_drink;
        if(choice_drink == 1){
            total += 40;
            cout << "Add Coffee 40 baht" << endl;
        }
        else if(choice_drink == 2){
            total += 65;
            cout << "Add Matcha green tea latte 65 baht" << endl;
        }
        else if(choice_drink == 3){
            total += 55;
            cout << "Add Green tea 55 bath" << endl;
        }
        else if(choice_drink == 4){
            total += 20;
            cout << "Add Coca cola 20 baht" << endl;
        }
        else if(choice_drink == 5){
            total += 15;
            cout << "Add Drinking water 15 baht" << endl;
        }
    }
    else if(choice == 3){
    cout << "----- Check bill -----" << endl;
    cout << "Total " << total << " baht" << endl;
    cout << "Receive cash >> ";
    cin >> cash; 
    change = cash - total;
    cout << "Change " << change << " baht" << endl;
    total = 0;
    }
    }while (choice != 0);
        cout << "...Program exit..." << endl;
    return(0);
}
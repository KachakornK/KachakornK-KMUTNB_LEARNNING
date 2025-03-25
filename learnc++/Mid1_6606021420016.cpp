#include <iostream>
using namespace std;

int main()
{
    int choice, usd, thb;

    while(true)
    {
        cout << "\n------------------------------\n";
        cout << "------------ MENU ------------\n";
        cout << "1 for USD to THB\n";
        cout << "2 for THB to USD\n";
        cout << "0 for Exit Program\n";
        cout << "Please input choice >> ";
        cin >> choice;

        if(choice == 1)
        {
            cout << "\nUSD to THB     Input USD >> ";
            cin >> usd;
            thb = usd * 35;

            cout << "\nExchange rate = 35 THB Per 1 USD";
            cout << "\nExchange = " << thb << endl;

            int thousand, hundred5, hundred;

            thousand = thb / 1000;
            thb = thb - (thousand * 1000);
            hundred5 = thb / 500;
            thb = thb - (hundred5 * 500);
            hundred = thb / 100;
            thb = thb - (hundred * 100);

            cout << "Cash THB\n";
            if(thousand != 0)
            {
                cout << "\n1000 = " << thousand;
            }
            if(hundred5 != 0)
            {
                cout << "\n500 = " << hundred5;
            }
            if(hundred != 0)
            {
                cout << "\n100 = " << hundred;
            }

            cout << "\nCannot exchange : " << thb << " THB";
            cout << "\n------------------------------\n";
        }
        else if(choice == 2)
        {
            cout << "\nTHB to USD     Input THB >> ";
            cin >> thb;
            usd = thb / 35;

            cout << "\nExchange rate = 35 THB Per 1 USD";
            cout << "\nExchange = " << usd << endl;

            int hundred, ten5, ten;

            hundred = usd / 100;
            usd = usd - (hundred * 100);
            ten5 = usd / 50;
            usd = usd - (ten5 * 50);
            ten = usd / 10;
            usd = usd - (ten * 10);

            cout << "Cash THB\n";
            if(hundred != 0)
            {
                cout << "\n100 = " << hundred;
            }
            if(ten5 != 0)
            {
                cout << "\n50 = " << ten5;
            }
            if(ten != 0)
            {
                cout << "\n10 = " << ten;
            }

            cout << "\nCannot exchange : " << usd << " USD";
            cout << "\n------------------------------\n";
        }
        else if(choice == 0)
        {
            cout << "\nProgram Exit";
            break;
        }
        else
        {
            cout << "\nError! Plese choose any choice\n\n";
        }
    }
    return 0;
}
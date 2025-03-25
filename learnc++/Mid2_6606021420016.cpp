i#include <iostream>
using namespace std;

int main()
{
    for(int day = 1; day <= 5; day++)
    {
        int water_supply, sugar_supply, honey_supply, gekhuay_supply, greentea_supply;
        int water_remaining, sugar_remaining, honey_remaining, gekhuay_remaining, greentea_remaining;

        cout << "\n----- Supply Day " << day << " -----\n";
        cout << "Water(ml) : ";
        cin >> water_supply;
        cout << "Sugar(g) : ";
        cin >> sugar_supply;
        cout << "Honey(g) : ";
        cin >> honey_supply;
        cout << "Gekhuay(g) : ";
        cin >> gekhuay_supply;
        cout << "Greentea(g) : ";
        cin >> greentea_supply;

        if(day == 1)
        {
            water_remaining = water_supply;
            sugar_remaining = sugar_supply;
            honey_remaining = honey_supply;
            gekhuay_remaining = gekhuay_supply;
            greentea_remaining = greentea_supply;
        }
        else
        {
            water_remaining += water_supply;
            sugar_remaining += sugar_supply;
            honey_remaining += honey_supply;
            gekhuay_remaining += gekhuay_supply;
            greentea_remaining += greentea_supply;
        }
            

        int greentea_original, greentea_gekhuay, water = 200, sugar = 50, honey = 75, gekhuay = 20, greentea = 25;
        int water_product, sugar_product, honey_product, gekhuay_product, greentea_product;

        water_product = water_remaining / water;
        honey_product = honey_remaining / honey;
        gekhuay_product = gekhuay_remaining / gekhuay;
        greentea_product = greentea_remaining / greentea;

        greentea_gekhuay = min(min(min(water_product, honey_product), gekhuay_product), greentea_product);
        for(int g = 1; g <= greentea_gekhuay; g++)
        {
            water_remaining = water_remaining - water;
            honey_remaining = honey_remaining - honey;
            gekhuay_remaining = gekhuay_remaining - gekhuay;
            greentea_remaining = greentea_remaining - greentea;
        }

        water_product = water_remaining / water;
        sugar_product = sugar_remaining / sugar;
        greentea_product = greentea_remaining / greentea;

        greentea_original = min(min   (water_product, sugar_product), greentea_product);
        for(int o = 1; o <= greentea_original; o++)
        {
            water_remaining = water_remaining - water;
            sugar_remaining = sugar_remaining - sugar;
            greentea_remaining = greentea_remaining - greentea;
        }

        cout << "\n===============================\n";
        cout << "Greentea Gekhuay&Honey = " << greentea_gekhuay << " Qty\n";
        cout << "Greentea Original = " << greentea_original << " Qty\n";
        cout << "===============================\n";

        cout << "\nWater remaining : " << water_remaining << " ml\n";
        cout << "Sugar remaining : " << sugar_remaining << " g\n";
        cout << "Honey remaining : " << honey_remaining << " g\n";
        cout << "Gekhuay remaining : " << gekhuay_remaining << " g\n";
        cout << "Greentea remaining : " << greentea_remaining << " g\n";
    }
}
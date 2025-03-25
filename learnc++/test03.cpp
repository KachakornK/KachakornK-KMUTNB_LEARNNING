//หาค่าเฉลี่ยตัวแปร ไม่จำกัดจำนวน
#include <iostream>
using namespace std;
int main()
{
    int sum = 0;
    int count = 0;
    int num;

    std::cout << "Enter numbers (enter -1 to stop): ";

    while (true) {
        std::cin >> num;
        
        if (num == -1) {
            break;
        }

        sum += num;
        count++;
    }

    if (count == 0) {
        std::cout << "No numbers entered." << std::endl;
    } else {
        double average = static_cast<double>(sum) / count;
        std::cout << "Average: " << average << std::endl;
    }

    return 0;
}

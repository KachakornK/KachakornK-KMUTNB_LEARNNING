#include <iostream>
using namespace std;
int fibonacci(int n) {
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main() {
    int n;
    cout << "ป้อนจำนวนของลำดับ Fibonacci ที่คุณต้องการ: ";
    cin >> n;

    if (n <= 0) {
        cout << "กรุณาป้อนจำนวนเต็มบวก." <<endl;
    } else {
        cout << "ลำดับ Fibonacci ที่ " << n << " คือ " << fibonacci(n) <<endl;
    }

    return 0;
}

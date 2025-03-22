# โจทย์ที่ 1: ตรวจสอบเลขคู่-เลขคี่
# ให้ผู้ใช้ป้อนตัวเลขเข้ามา 1 ตัว แล้วให้โปรแกรมบอกว่าตัวเลขนั้นเป็น เลขคู่ หรือ เลขคี่

num = int(input ('Enter your number: '))

if num % 2 == 0:
    print('your number is even')
else:
    print('your number is odd')
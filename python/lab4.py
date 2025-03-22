# โจทย์ที่ 4: ตรวจสอบปีอธิกสุรทิน (Leap Year)
# ให้ผู้ใช้ป้อนปี ค.ศ. แล้วให้โปรแกรมบอกว่าปีนั้นเป็น ปีอธิกสุรทิน หรือไม่
# (ปีอธิกสุรทิน คือ ปีที่หาร 4 ลงตัว แต่ถ้าหาร 100 ลงตัวต้องหาร 400 ลงตัวด้วย)

year = int(input('Enter your birth yaer:'))
#                     TRUE            OR        FALSE   
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print('This is a leap year')
else:
    print('This is not a leap year')
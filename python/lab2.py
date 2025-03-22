# โจทย์ที่ 2: ตรวจสอบอายุ
# ให้ผู้ใช้ป้อนอายุของตัวเอง แล้วให้โปรแกรมบอกว่าเป็น เด็ก (ต่ำกว่า 13 ปี), วัยรุ่น (13-19 ปี) หรือ ผู้ใหญ่ (20 ปีขึ้นไป)

age = int(input('Enter your age: '))

if age <13:
    print('You are a child')
elif age >=13 and age <=19:
    print('You are a teenager')
else:
    print('You are an adult')   

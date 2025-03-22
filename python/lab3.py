# โจทย์ที่ 3: ตรวจสอบคะแนนสอบ
# ให้ผู้ใช้ป้อนคะแนนสอบ (0-100) แล้วให้โปรแกรมแสดงผลเกรดตามเกณฑ์ดังนี้:
# 80-100 → A
# 70-79 → B
# 60-69 → C
# 50-59 → D
# ต่ำกว่า 50 → F

grade = int(input('Enter your score: '))

if grade >=80 and grade <=100:
    print('Your grade is A')
elif grade >=70 and grade <= 79:
    print('Your grade is B')
elif grade >=60 and grade <= 69:
    print('Your grade is C')
elif grade >=50 and grade <= 59:
    print('Your grade is D')
else:
    print('Your grade is F')
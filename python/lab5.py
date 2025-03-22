# โจทย์ที่ 5: ตรวจสอบรหัสผ่าน
# ให้ผู้ใช้ป้อนรหัสผ่าน ถ้ารหัสถูกต้องให้แสดงข้อความ "เข้าสู่ระบบสำเร็จ" ถ้าผิดให้แสดง "รหัสผ่านไม่ถูกต้อง"
# (กำหนดให้รหัสผ่านที่ถูกต้องคือ "python123")



ps = input('Enter your password: ')

if ps == 'python123':
    print('Login successful!')
else:
    print('Please try again')
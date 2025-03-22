def cal_weight_loss(cyclingHours, joggingHours, swimmingHours):
    caloriesPerHours = { 
        # แคลอรี่ที่เผาผลาญได้/ชม
        "cycling": 200,
        "jogging": 475,
        "swimming": 275
    }
    # คำนวณแคลอรี่ทั้งหมดที่เผาผลาญ
    totalCalories = (cyclingHours * caloriesPerHours["cycling"] +
                     joggingHours * caloriesPerHours["jogging"] +
                     swimmingHours * caloriesPerHours["swimming"])
    # จำนวนแคลอรี่ที่เผาผลาญได้ต่อวัน
    caloriesPerPound = 3500
    poundLoss = totalCalories / caloriesPerPound
    return poundLoss

# แสดงผลลัพธ์
cycling_hours = float(input("Enter your spent cycling: "))
jogging_hours = float(input("Enter your spent jogging: "))
swimming_hours = float(input("Enter your spent swimming: "))

poundloss = cal_weight_loss(cycling_hours, jogging_hours, swimming_hours)

print(f"You cycling for: {cycling_hours} Hours")
print(f"You jogging for: {jogging_hours} Hours")
print(f"You swimming for: {swimming_hours} Hours")
print(f"Your calories was burn {poundloss:.2f} pounds.")

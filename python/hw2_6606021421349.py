def calculate_bmi(weight, height):
   
    bmi = weight / (height/100) ** 2
    
   
    return bmi


weight = float(input("Please enter your weight (kg): "))
height = float(input("Please enter your height (m): "))

bmi = calculate_bmi(weight, height)

print(f"your BMI is: {bmi:.2f}")

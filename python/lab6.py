# Write code below 💖

import random

dice_1 = 0
dice_2 = 0 
total  = 0
userInput = 1

while total == 0:
    dice_1 = random.randint(1,6)
    dice_2 = random.randint(1,6)

    print(f"Dice 1: {dice_1}")
    print(f"Dice 2: {dice_2}")
    userInput = int(input("What is the total (2-12)? "))
    total  = dice_1 + dice_2

    print(f"Total: {total}")

    if userInput == total:
        print("You got It!")
    else:
        total = 0
  
  
  

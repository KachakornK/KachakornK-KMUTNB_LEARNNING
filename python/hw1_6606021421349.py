def buynintendo(money):
    # กำหนดราคาของ Nintendo Wii และ Nintendo Switch
    nw_price = 7130
    ns_price = 11700

    # หารจำนวนเต็ม เพื่อหา จำนวนเครื่องที่ซื้อได้
    nw_count = money // nw_price
    ns_count = money // ns_price

    # เงินที่เหลือหลังจากซื้อ Nintendo Wii
    remaining_money = money % nw_price

    # คำนวณเงินที่ต้องเพิ่มเพื่อซื้อสินค้าชิ้นต่อไป
    expentFornw = nw_price - remaining_money if remaining_money < nw_price else 0
    expentForns = ns_price - (money % ns_price) if (money % ns_price) < ns_price else 0

    # แสดงผลลัพธ์
    print(f"You can buy {int(nw_count):d} Nintendo Wii.")
    print(f"You can buy {int(ns_count):d} Nintendo Switch.")
    print(f"You need {expentFornw:.2f} Bath to buy an addition Nintendo Will.")
    print(f"You need {expentForns:.2f} Bath to buy an addition Nintendo Switch.")

money = float(input("Enter your amount of money (Bath) "))
buynintendo(money)
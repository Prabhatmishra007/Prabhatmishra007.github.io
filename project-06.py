#Shopping Cart as a List
cart=["Laptop","Charger","tablet"]
#Adding Items
cart.append("earphone")
print(cart)
#Removing Items
cart.remove("Charger")
print(cart)
cart.pop(0)
print(cart)
#Viewing the Cart
for item in cart:
  print(item)
#Counting Items
print(len(cart))
#Calculating Total
prices=[20000,1500]
total=0
for price in prices:
  total=total+price
print(total)
#Clearing the Cart
cart.clear()
print(cart)
import math
def add(a,b):
  return a+b
def diff(a,b):
  return a-b
def multiply(a,b):
  return a*b
def div(a,b):
  return a/b
def power(a,b):
  return a**b
def square_root(a):
  return math.sqrt(a)
while True:
  print("=======Calculator Menu =======")
  print("1. Addition ")
  print("2. Substraction ")
  print("3. Multiply ")
  print("4. Division ")
  print("5. Power ")
  print("6. Square root ")
  print("7. Exit the Program ")
  choice =input("Enter your choice ")
  if choice =="7":
    print("Thank You")
    break
  if choice =="6":
    a=float(input("Enter a number "))
    print("Square root : ",square_root(a))
    continue
  a=int(input("Enter the first number "))
  b=int(input("Enter the second number "))
  if choice=="1":
    print("Sum :",add(a,b))
  elif choice =="2":
    print("Difference :",diff(a,b))
  elif choice =="3":
    print("Multiply :",multiply(a,b))
  elif choice =="4":
    if b!=0:
      print("Divide :",div(a,b))
    else:
      print("Can not Divide by Zero")
  elif choice =="5":
    print("Power ",power(a,b))
  else:
    print("Enter valid choice ")
    continue
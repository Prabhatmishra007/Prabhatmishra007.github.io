password = input("Enter your password ")
is_upper = False
is_lower = False
is_digit = False
for ch in password:
  if ch.isupper():
    is_upper=True
  elif ch.islower():
    is_lower = True
  elif ch.isdigit():
    is_digit = True
if len(password)<6:
  print("weak password")
elif len(password)>=8 and is_lower==True and is_upper==True and is_digit == True:
  print("Strong password")
else:
  print("medium password")
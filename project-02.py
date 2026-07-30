age = int(input("Enter your current age "))
if age >=60:
  print("Senior Citizen ")
  print("Eligible for Voting")
elif age >=18:
  print("Adult")
  print("Eligible for voting")
  print("Eligible for DL")
elif age >=16:
  print("Eligible for Learner's Licence")
else:
  print("Not Eligible for DL")
  print("Not Eligible for Vote")
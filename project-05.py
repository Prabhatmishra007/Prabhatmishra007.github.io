name=input("Enter your name ")
maths= float(input("Enter your Maths Marks "))
sci=float(input("Enter your Science Marks "))
eng = float(input("Enter your English Marks "))
print("----------------------------------")
print("----------------------------------")
print("Student Performance Analyzer")
print("----------------------------------")
print("----------------------------------")
print("Name ",name)
print("Maths ",maths)
print("Science ",sci)
print("English ",eng)
print("----------------------------------")
print(f"Total {maths+sci+eng}")
print(f"Average {(maths+sci+eng)/3}")
per=((maths+sci+eng)/300)*100
print(f"Percenatge {per} ")
if per > 100:
  print("Enter a valid percentage ")
elif per >90:
  print("A+ ")
elif per >80:
  print("A ")
elif per >70:
  print("B+ ")
elif per >60:
  print("B ")
elif per >50:
  print("C+ ")
elif per >40:
  print("C ")
elif per >33.33:
  print("D ")
else:
  print("Fail ")
if per>33.33:
  print("Result: Pass ")
else:
  print("Result: Fail")
  print("----------------------------------")
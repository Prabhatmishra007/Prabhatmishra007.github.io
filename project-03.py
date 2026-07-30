#Pattern 1
rows=5
for i in range(1,rows+1):# i =5
  for j in range(1,i+1):# 1,2,3,4,5
    print(j, end=" ")
  print()
#pattern 2
for i in range(1,rows+1): # i=3
  for j in range(i):# range(2)- 0,1,2 
    print(i, end=" ")
  print()

# Pattern 3
for i in range(rows,0,-1): # range(5,0,-1) i =1
  for j in range(1,i+1):# j = 1
    print(j, end=" ")
  print()
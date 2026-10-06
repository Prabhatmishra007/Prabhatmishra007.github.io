contacts={}
while True:
  print("======Contact Directory======")
  print("Choose one option :")
  print("1. Add Contact ")
  print("2. Search a contact ")
  print("3. Update a contact ")
  print("4. Delete a contact ")
  print("5. View All contact ")
  print("6. Exit program ")
  choice = input("Enter your choice ")
  if choice =="1":
    name=input("Enter the name ")
    phone=int(input("Enter the contact no. "))
    contacts[name]=phone
    print("Contact Saved")
  elif choice =="2":
    name=input("Enter the name to search ")
    if name in contacts:
      print("phone ",contacts[name])
    else:
      print("Name does not exist ")
  elif choice =="3":
    name=input("Enter the name ")
    if name in contacts:
      phone=int(input("Enter the updated phone no "))
      contacts[name]=phone
      print("Contact updated ")
    else:
      print("contact does not exist")
  elif choice =="4":
    name=input("Enter the name ")
    if name in contacts:
      contacts.pop(name)
      print("Contact Deleted")
    else:
      print("Contact does not exist ")
  elif choice =="5":
    for name,phone in contacts.items():
      print(name,"-> ",phone)
  elif choice =="6":
    print("Thank you ")
    break
  else:
    print("Invalid Choice ")
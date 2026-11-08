/* py2ai.in — Python Lab question bank (Days 1–57)
   Generated: each expected output was produced by running a reference
   solution, so every question is verified solvable.
   Test types: {in, out} feeds stdin; {call, out} runs your code, then the call. */
window.PY2AI_LAB = {
 "1": {
  "topic": "Python Setup & First Program",
  "qs": [
   {
    "title": "Say hello",
    "prompt": "Print exactly <code>Hello, Python!</code>",
    "starter": "# Use print() to show: Hello, Python!\n",
    "tests": [
     {
      "in": "",
      "out": "Hello, Python!\n"
     }
    ]
   },
   {
    "title": "Three lines",
    "prompt": "Print these three lines, in this order:<br><code>I am learning Python</code><br><code>Day 1 of 100</code><br><code>Let's go!</code>",
    "starter": "# One print() per line\n",
    "tests": [
     {
      "in": "",
      "out": "I am learning Python\nDay 1 of 100\nLet's go!\n"
     }
    ]
   },
   {
    "title": "Draw a box",
    "prompt": "Use <code>print()</code> to draw this 5-wide box of stars:<pre>*****\n*   *\n*****</pre>",
    "starter": "# Top row, middle row (3 spaces inside), bottom row\n",
    "tests": [
     {
      "in": "",
      "out": "*****\n*   *\n*****\n"
     }
    ]
   }
  ]
 },
 "2": {
  "topic": "Variables",
  "qs": [
   {
    "title": "Profile in one line",
    "prompt": "Create three variables: <code>name = \"Asha\"</code>, <code>age = 21</code> and <code>city = \"Bangalore\"</code>. Print them in one line with a single <code>print()</code>.",
    "starter": "# Create name, age and city\n# Print all three with one print(), separated by commas\n",
    "tests": [
     {
      "in": "",
      "out": "Asha 21 Bangalore\n"
     }
    ]
   },
   {
    "title": "Swap two variables",
    "prompt": "Start with <code>a = \"left\"</code> and <code>b = \"right\"</code>. Swap their values, then print <code>a</code> and then <code>b</code> on separate lines.",
    "starter": "# a = \"left\", b = \"right\"\n# Swap them\n# print(a) then print(b)\n",
    "tests": [
     {
      "in": "",
      "out": "right\nleft\n"
     }
    ]
   },
   {
    "title": "Reassign a variable",
    "prompt": "Create <code>score = 10</code>. Print it. Then change <code>score</code> to <code>25</code> and print it again.",
    "starter": "# Create score, print it\n# Give score a new value, print again\n",
    "tests": [
     {
      "in": "",
      "out": "10\n25\n"
     }
    ]
   }
  ]
 },
 "3": {
  "topic": "Data Types",
  "qs": [
   {
    "title": "Four types",
    "prompt": "Print the type of <code>42</code>, <code>3.14</code>, <code>\"hi\"</code> and <code>True</code>, one per line.",
    "starter": "# Use type() inside print()\n",
    "tests": [
     {
      "in": "",
      "out": "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>\n"
     }
    ]
   },
   {
    "title": "Same digit, three types",
    "prompt": "Print the type of <code>7</code>, <code>\"7\"</code> and <code>7.0</code>, one per line. Notice how the quotes and the dot change the type.",
    "starter": "# type(7), type(\"7\"), type(7.0)\n",
    "tests": [
     {
      "in": "",
      "out": "<class 'int'>\n<class 'str'>\n<class 'float'>\n"
     }
    ]
   },
   {
    "title": "Student record types",
    "prompt": "Create <code>marks = 95</code>, <code>percent = 95.5</code>, <code>grade = \"A\"</code>, <code>passed = True</code>. Print each value followed by its type on one line, like <code>95 &lt;class 'int'&gt;</code>.",
    "starter": "# Create the four variables\n# print(value, type(value)) for each\n",
    "tests": [
     {
      "in": "",
      "out": "95 <class 'int'>\n95.5 <class 'float'>\nA <class 'str'>\nTrue <class 'bool'>\n"
     }
    ]
   }
  ]
 },
 "4": {
  "topic": "Input & Output",
  "qs": [
   {
    "title": "Greet the user",
    "prompt": "Read a name and print <code>Hello, NAME!</code>",
    "starter": "# Read the name with input()\n# Join the text with + and print it\n",
    "tests": [
     {
      "in": "Prabhu",
      "out": "Hello, Prabhu!\n"
     },
     {
      "in": "Asha",
      "out": "Hello, Asha!\n"
     },
     {
      "in": "Py2AI",
      "out": "Hello, Py2AI!\n"
     }
    ]
   },
   {
    "title": "City and country",
    "prompt": "Read a city, then a country (two lines). Print them as <code>City, Country</code>.",
    "starter": "# Two input() calls\n# Print with a comma and a space between\n",
    "tests": [
     {
      "in": "Bangalore\nIndia",
      "out": "Bangalore, India\n"
     },
     {
      "in": "Paris\nFrance",
      "out": "Paris, France\n"
     }
    ]
   },
   {
    "title": "Join with dashes",
    "prompt": "Read three words (one per line) and print them on one line joined by dashes, like <code>red-green-blue</code>. Try the <code>sep</code> option of <code>print()</code>.",
    "starter": "# Read three words\n# print(a, b, c, sep=...)\n",
    "tests": [
     {
      "in": "red\ngreen\nblue",
      "out": "red-green-blue\n"
     },
     {
      "in": "day\nby\nday",
      "out": "day-by-day\n"
     }
    ]
   }
  ]
 },
 "5": {
  "topic": "Type Conversion",
  "qs": [
   {
    "title": "Add two numbers",
    "prompt": "Read two whole numbers (one per line) and print their sum.",
    "starter": "# input() gives text — convert with int()\n# Print the sum\n",
    "tests": [
     {
      "in": "4\n5",
      "out": "9\n"
     },
     {
      "in": "100\n-30",
      "out": "70\n"
     },
     {
      "in": "0\n0",
      "out": "0\n"
     }
    ]
   },
   {
    "title": "Years to months",
    "prompt": "Read a number of years and print how many months that is.",
    "starter": "# Convert the input to int\n# 1 year = 12 months\n",
    "tests": [
     {
      "in": "2",
      "out": "24\n"
     },
     {
      "in": "10",
      "out": "120\n"
     },
     {
      "in": "0",
      "out": "0\n"
     }
    ]
   },
   {
    "title": "Drop the decimals",
    "prompt": "Read a price like <code>99.99</code>. Convert it to a float, then to an int, and print the int.",
    "starter": "# float(...) first, then int(...)\n",
    "tests": [
     {
      "in": "99.99",
      "out": "99\n"
     },
     {
      "in": "5.5",
      "out": "5\n"
     },
     {
      "in": "120.0",
      "out": "120\n"
     }
    ]
   }
  ]
 },
 "6": {
  "topic": "Operators",
  "qs": [
   {
    "title": "Quotient and remainder",
    "prompt": "Read two whole numbers <code>a</code> and <code>b</code>. Print <code>a // b</code> and <code>a % b</code> on separate lines.",
    "starter": "# Read a and b as int\n# Floor division and modulus\n",
    "tests": [
     {
      "in": "17\n5",
      "out": "3\n2\n"
     },
     {
      "in": "20\n4",
      "out": "5\n0\n"
     },
     {
      "in": "7\n10",
      "out": "0\n7\n"
     }
    ]
   },
   {
    "title": "Seconds to minutes",
    "prompt": "Read a number of seconds and print the minutes and leftover seconds on one line, like <code>2 5</code> for 125.",
    "starter": "# minutes = seconds // 60\n# leftover = seconds % 60\n",
    "tests": [
     {
      "in": "125",
      "out": "2 5\n"
     },
     {
      "in": "60",
      "out": "1 0\n"
     },
     {
      "in": "59",
      "out": "0 59\n"
     },
     {
      "in": "3600",
      "out": "60 0\n"
     }
    ]
   },
   {
    "title": "Power up",
    "prompt": "Read a base and an exponent (two lines) and print base raised to that power.",
    "starter": "# Use the ** operator\n",
    "tests": [
     {
      "in": "2\n10",
      "out": "1024\n"
     },
     {
      "in": "5\n3",
      "out": "125\n"
     },
     {
      "in": "9\n0",
      "out": "1\n"
     }
    ]
   }
  ]
 },
 "7": {
  "topic": "Project · Personal Profile Generator",
  "qs": [
   {
    "title": "Profile card",
    "prompt": "Read a name, an age and a city (three lines). Print:<pre>Name: NAME\nAge: AGE\nCity: CITY</pre>",
    "starter": "# Read the three values\n# Print each with its label\n",
    "tests": [
     {
      "in": "Asha\n21\nBangalore",
      "out": "Name: Asha\nAge: 21\nCity: Bangalore\n"
     },
     {
      "in": "Ravi\n30\nPune",
      "out": "Name: Ravi\nAge: 30\nCity: Pune\n"
     }
    ]
   },
   {
    "title": "Age from birth year",
    "prompt": "Read a birth year. Assume the current year is 2026. Print <code>You are N years old</code>.",
    "starter": "# current year is 2026\n# age = 2026 - birth year\n",
    "tests": [
     {
      "in": "2002",
      "out": "You are 24 years old\n"
     },
     {
      "in": "1990",
      "out": "You are 36 years old\n"
     },
     {
      "in": "2026",
      "out": "You are 0 years old\n"
     }
    ]
   },
   {
    "title": "Hobby line",
    "prompt": "Read a name and a hobby. Print <code>NAME loves HOBBY.</code> (with a full stop at the end, no space before it).",
    "starter": "# Use + to join so there is no space before the full stop\n",
    "tests": [
     {
      "in": "Asha\npainting",
      "out": "Asha loves painting.\n"
     },
     {
      "in": "Ravi\ncricket",
      "out": "Ravi loves cricket.\n"
     }
    ]
   }
  ]
 },
 "8": {
  "topic": "Comparison Operators",
  "qs": [
   {
    "title": "Is a bigger?",
    "prompt": "Read two whole numbers <code>a</code> and <code>b</code>. Print the result of <code>a &gt; b</code>.",
    "starter": "# Read two ints\n# print(a > b)\n",
    "tests": [
     {
      "in": "5\n3",
      "out": "True\n"
     },
     {
      "in": "2\n9",
      "out": "False\n"
     },
     {
      "in": "4\n4",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Exactly 100?",
    "prompt": "Read a whole number and print whether it equals 100.",
    "starter": "# Use == to compare\n",
    "tests": [
     {
      "in": "100",
      "out": "True\n"
     },
     {
      "in": "99",
      "out": "False\n"
     },
     {
      "in": "-100",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Same word?",
    "prompt": "Read two words and print whether they are different (<code>True</code> if different). Case matters.",
    "starter": "# Use !=\n",
    "tests": [
     {
      "in": "cat\ncat",
      "out": "False\n"
     },
     {
      "in": "cat\nCat",
      "out": "True\n"
     },
     {
      "in": "dog\ncat",
      "out": "True\n"
     }
    ]
   }
  ]
 },
 "9": {
  "topic": "Logical Operators",
  "qs": [
   {
    "title": "Working age",
    "prompt": "Read an age. Print whether it is between 18 and 60, both included.",
    "starter": "# Combine two comparisons with and\n",
    "tests": [
     {
      "in": "25",
      "out": "True\n"
     },
     {
      "in": "17",
      "out": "False\n"
     },
     {
      "in": "60",
      "out": "True\n"
     },
     {
      "in": "61",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Out of range",
    "prompt": "Read a number. Print whether it is below 0 <b>or</b> above 100.",
    "starter": "# Use or\n",
    "tests": [
     {
      "in": "-5",
      "out": "True\n"
     },
     {
      "in": "50",
      "out": "False\n"
     },
     {
      "in": "101",
      "out": "True\n"
     },
     {
      "in": "0",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Is it odd?",
    "prompt": "Read a whole number. Print <code>True</code> if it is odd. Use <code>not</code> with an even check.",
    "starter": "# even check: n % 2 == 0\n# flip it with not\n",
    "tests": [
     {
      "in": "7",
      "out": "True\n"
     },
     {
      "in": "10",
      "out": "False\n"
     },
     {
      "in": "0",
      "out": "False\n"
     }
    ]
   }
  ]
 },
 "10": {
  "topic": "If Statements",
  "qs": [
   {
    "title": "Positive check",
    "prompt": "Read a number. If it is greater than 0, print <code>Positive</code>. Always print <code>Done</code> at the end.",
    "starter": "# if ...:\n#     print(\"Positive\")\n# print(\"Done\") — outside the if\n",
    "tests": [
     {
      "in": "5",
      "out": "Positive\nDone\n"
     },
     {
      "in": "-3",
      "out": "Done\n"
     },
     {
      "in": "0",
      "out": "Done\n"
     }
    ]
   },
   {
    "title": "Top marks",
    "prompt": "Read marks. If they are 90 or more, print <code>Excellent!</code>. Otherwise print nothing.",
    "starter": "# Just one if — no else today\n",
    "tests": [
     {
      "in": "95",
      "out": "Excellent!\n"
     },
     {
      "in": "90",
      "out": "Excellent!\n"
     },
     {
      "in": "70",
      "out": ""
     }
    ]
   },
   {
    "title": "Weather note",
    "prompt": "Read a temperature. If it is above 35 print <code>Hot day</code>. If it is below 10 print <code>Cold day</code>. Otherwise print nothing.",
    "starter": "# Two separate if statements\n",
    "tests": [
     {
      "in": "40",
      "out": "Hot day\n"
     },
     {
      "in": "5",
      "out": "Cold day\n"
     },
     {
      "in": "20",
      "out": ""
     },
     {
      "in": "35",
      "out": ""
     }
    ]
   }
  ]
 },
 "11": {
  "topic": "If Else",
  "qs": [
   {
    "title": "Even or odd",
    "prompt": "Read a whole number and print <code>Even</code> or <code>Odd</code>.",
    "starter": "# if n % 2 == 0 ... else ...\n",
    "tests": [
     {
      "in": "4",
      "out": "Even\n"
     },
     {
      "in": "7",
      "out": "Odd\n"
     },
     {
      "in": "0",
      "out": "Even\n"
     },
     {
      "in": "-3",
      "out": "Odd\n"
     }
    ]
   },
   {
    "title": "Can they vote?",
    "prompt": "Read an age. Print <code>Can vote</code> if it is 18 or more, otherwise <code>Cannot vote</code>.",
    "starter": "# if / else\n",
    "tests": [
     {
      "in": "18",
      "out": "Can vote\n"
     },
     {
      "in": "17",
      "out": "Cannot vote\n"
     },
     {
      "in": "45",
      "out": "Can vote\n"
     }
    ]
   },
   {
    "title": "Larger of two",
    "prompt": "Read two whole numbers and print the larger one. If they are equal, print either.",
    "starter": "# Compare a and b\n",
    "tests": [
     {
      "in": "3\n9",
      "out": "9\n"
     },
     {
      "in": "12\n4",
      "out": "12\n"
     },
     {
      "in": "6\n6",
      "out": "6\n"
     }
    ]
   }
  ]
 },
 "12": {
  "topic": "Elif",
  "qs": [
   {
    "title": "Grade it",
    "prompt": "Read marks (0–100). Print <code>A</code> for 90+, <code>B</code> for 75–89, <code>C</code> for 50–74, otherwise <code>F</code>.",
    "starter": "# if / elif / elif / else — check the highest band first\n",
    "tests": [
     {
      "in": "95",
      "out": "A\n"
     },
     {
      "in": "75",
      "out": "B\n"
     },
     {
      "in": "60",
      "out": "C\n"
     },
     {
      "in": "49",
      "out": "F\n"
     }
    ]
   },
   {
    "title": "Sign of a number",
    "prompt": "Read a number. Print <code>Positive</code>, <code>Negative</code> or <code>Zero</code>.",
    "starter": "# Three branches\n",
    "tests": [
     {
      "in": "8",
      "out": "Positive\n"
     },
     {
      "in": "-2",
      "out": "Negative\n"
     },
     {
      "in": "0",
      "out": "Zero\n"
     }
    ]
   },
   {
    "title": "Traffic light",
    "prompt": "Read a colour. <code>red</code> → <code>Stop</code>, <code>yellow</code> → <code>Wait</code>, <code>green</code> → <code>Go</code>, anything else → <code>Invalid</code>.",
    "starter": "# Compare the text with ==\n",
    "tests": [
     {
      "in": "red",
      "out": "Stop\n"
     },
     {
      "in": "yellow",
      "out": "Wait\n"
     },
     {
      "in": "green",
      "out": "Go\n"
     },
     {
      "in": "blue",
      "out": "Invalid\n"
     }
    ]
   }
  ]
 },
 "13": {
  "topic": "Nested If",
  "qs": [
   {
    "title": "Positive even or odd",
    "prompt": "Read a number. If it is positive, print <code>Positive Even</code> or <code>Positive Odd</code>. Otherwise print <code>Not positive</code>.",
    "starter": "# Outer if: n > 0\n# Inner if: even or odd\n",
    "tests": [
     {
      "in": "4",
      "out": "Positive Even\n"
     },
     {
      "in": "7",
      "out": "Positive Odd\n"
     },
     {
      "in": "0",
      "out": "Not positive\n"
     },
     {
      "in": "-6",
      "out": "Not positive\n"
     }
    ]
   },
   {
    "title": "Club entry",
    "prompt": "Read an age, then <code>yes</code> or <code>no</code> for whether they have an ID. Under 18 → <code>Too young</code>. 18+ with ID → <code>Entry allowed</code>. 18+ without ID → <code>Show ID</code>.",
    "starter": "# Check age first, then the ID inside\n",
    "tests": [
     {
      "in": "20\nyes",
      "out": "Entry allowed\n"
     },
     {
      "in": "20\nno",
      "out": "Show ID\n"
     },
     {
      "in": "16\nyes",
      "out": "Too young\n"
     }
    ]
   },
   {
    "title": "Largest of three",
    "prompt": "Read three whole numbers and print the largest. Use nested <code>if</code>s.",
    "starter": "# Compare a with b first, then the winner with c\n",
    "tests": [
     {
      "in": "3\n9\n5",
      "out": "9\n"
     },
     {
      "in": "10\n2\n7",
      "out": "10\n"
     },
     {
      "in": "1\n2\n8",
      "out": "8\n"
     },
     {
      "in": "4\n4\n4",
      "out": "4\n"
     }
    ]
   }
  ]
 },
 "14": {
  "topic": "Project · Age Eligibility System",
  "qs": [
   {
    "title": "Age group",
    "prompt": "Read an age. Print <code>Child</code> (0–12), <code>Teen</code> (13–17), <code>Adult</code> (18–59) or <code>Senior</code> (60+).",
    "starter": "# if / elif chain\n",
    "tests": [
     {
      "in": "8",
      "out": "Child\n"
     },
     {
      "in": "13",
      "out": "Teen\n"
     },
     {
      "in": "17",
      "out": "Teen\n"
     },
     {
      "in": "30",
      "out": "Adult\n"
     },
     {
      "in": "60",
      "out": "Senior\n"
     }
    ]
   },
   {
    "title": "Eligibility report",
    "prompt": "Read an age. Print three lines:<pre>Vote: Yes/No        (18+)\nSchool: Yes/No      (5–17)\nSenior discount: Yes/No   (60+)</pre>",
    "starter": "# Three separate checks, each prints Yes or No\n",
    "tests": [
     {
      "in": "10",
      "out": "Vote: No\nSchool: Yes\nSenior discount: No\n"
     },
     {
      "in": "25",
      "out": "Vote: Yes\nSchool: No\nSenior discount: No\n"
     },
     {
      "in": "65",
      "out": "Vote: Yes\nSchool: No\nSenior discount: Yes\n"
     },
     {
      "in": "3",
      "out": "Vote: No\nSchool: No\nSenior discount: No\n"
     }
    ]
   },
   {
    "title": "Valid age?",
    "prompt": "Read an age. If it is below 0 or above 120, print <code>Invalid age</code>, else <code>Valid age</code>.",
    "starter": "# Use or\n",
    "tests": [
     {
      "in": "-1",
      "out": "Invalid age\n"
     },
     {
      "in": "0",
      "out": "Valid age\n"
     },
     {
      "in": "120",
      "out": "Valid age\n"
     },
     {
      "in": "130",
      "out": "Invalid age\n"
     }
    ]
   }
  ]
 },
 "15": {
  "topic": "For Loops",
  "qs": [
   {
    "title": "Letter by letter",
    "prompt": "Read a word and print each character on its own line.",
    "starter": "# for ch in word:\n",
    "tests": [
     {
      "in": "code",
      "out": "c\no\nd\ne\n"
     },
     {
      "in": "Py",
      "out": "P\ny\n"
     }
    ]
   },
   {
    "title": "Count vowels",
    "prompt": "Read a word in lowercase and print how many vowels (a, e, i, o, u) it has.",
    "starter": "# Start a counter at 0\n# Loop over the letters, add 1 for each vowel\n",
    "tests": [
     {
      "in": "python",
      "out": "1\n"
     },
     {
      "in": "education",
      "out": "5\n"
     },
     {
      "in": "rhythm",
      "out": "0\n"
     }
    ]
   },
   {
    "title": "Reverse with a loop",
    "prompt": "Read a word and print it reversed. Build the result in a loop — put each new letter in front.",
    "starter": "# rev = \"\"\n# for each ch: rev = ch + rev\n",
    "tests": [
     {
      "in": "python",
      "out": "nohtyp\n"
     },
     {
      "in": "level",
      "out": "level\n"
     },
     {
      "in": "ab",
      "out": "ba\n"
     }
    ]
   }
  ]
 },
 "16": {
  "topic": "While Loops",
  "qs": [
   {
    "title": "Countdown",
    "prompt": "Read a whole number <code>n</code> (1 or more) and print from <code>n</code> down to 1, one per line.",
    "starter": "# while n >= 1: print, then decrease\n",
    "tests": [
     {
      "in": "5",
      "out": "5\n4\n3\n2\n1\n"
     },
     {
      "in": "1",
      "out": "1\n"
     },
     {
      "in": "3",
      "out": "3\n2\n1\n"
     }
    ]
   },
   {
    "title": "Sum 1 to n",
    "prompt": "Read <code>n</code> and print the sum 1 + 2 + … + n using a <code>while</code> loop.",
    "starter": "# total = 0, i = 1\n# loop while i <= n\n",
    "tests": [
     {
      "in": "5",
      "out": "15\n"
     },
     {
      "in": "100",
      "out": "5050\n"
     },
     {
      "in": "1",
      "out": "1\n"
     }
    ]
   },
   {
    "title": "Count the digits",
    "prompt": "Read a whole number (1 or more) and print how many digits it has. Use <code>// 10</code> in a loop.",
    "starter": "# Keep doing n = n // 10 and count the steps\n",
    "tests": [
     {
      "in": "7",
      "out": "1\n"
     },
     {
      "in": "12345",
      "out": "5\n"
     },
     {
      "in": "1000",
      "out": "4\n"
     }
    ]
   }
  ]
 },
 "17": {
  "topic": "Range",
  "qs": [
   {
    "title": "1 to n",
    "prompt": "Read <code>n</code> and print 1 to n, one per line.",
    "starter": "# range(1, n + 1)\n",
    "tests": [
     {
      "in": "5",
      "out": "1\n2\n3\n4\n5\n"
     },
     {
      "in": "1",
      "out": "1\n"
     }
    ]
   },
   {
    "title": "Even numbers",
    "prompt": "Read <code>n</code> and print the even numbers from 2 up to n (included if even). Use the step of <code>range</code>.",
    "starter": "# range(start, stop, step)\n",
    "tests": [
     {
      "in": "10",
      "out": "2\n4\n6\n8\n10\n"
     },
     {
      "in": "7",
      "out": "2\n4\n6\n"
     },
     {
      "in": "1",
      "out": ""
     }
    ]
   },
   {
    "title": "Times table",
    "prompt": "Read <code>n</code> and print its table from 1 to 10 like <code>3 x 1 = 3</code>.",
    "starter": "# for i in range(1, 11): print(n, \"x\", i, \"=\", n * i)\n",
    "tests": [
     {
      "in": "3",
      "out": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n"
     },
     {
      "in": "12",
      "out": "12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120\n"
     }
    ]
   }
  ]
 },
 "18": {
  "topic": "Break",
  "qs": [
   {
    "title": "Stop at a multiple of 7",
    "prompt": "Read <code>n</code>. Print numbers from 1 to n, but stop as soon as you reach a multiple of 7 (don't print it).",
    "starter": "# Loop 1..n, break when i % 7 == 0\n",
    "tests": [
     {
      "in": "10",
      "out": "1\n2\n3\n4\n5\n6\n"
     },
     {
      "in": "5",
      "out": "1\n2\n3\n4\n5\n"
     },
     {
      "in": "20",
      "out": "1\n2\n3\n4\n5\n6\n"
     }
    ]
   },
   {
    "title": "First vowel",
    "prompt": "Read a lowercase word. Print <code>First vowel: X</code> for the first vowel, or <code>No vowel</code> if there isn't one.",
    "starter": "# Use a flag variable, break once you find one\n",
    "tests": [
     {
      "in": "python",
      "out": "First vowel: o\n"
     },
     {
      "in": "strength",
      "out": "First vowel: e\n"
     },
     {
      "in": "rhythm",
      "out": "No vowel\n"
     },
     {
      "in": "apple",
      "out": "First vowel: a\n"
     }
    ]
   },
   {
    "title": "Sum until zero",
    "prompt": "Keep reading numbers (one per line) until you read <code>0</code>. Print the sum of the numbers before the 0.",
    "starter": "# while True: read, break on 0, else add\n",
    "tests": [
     {
      "in": "5\n10\n3\n0",
      "out": "18\n"
     },
     {
      "in": "0",
      "out": "0\n"
     },
     {
      "in": "-4\n4\n9\n0",
      "out": "9\n"
     }
    ]
   }
  ]
 },
 "19": {
  "topic": "Continue",
  "qs": [
   {
    "title": "Skip multiples of 3",
    "prompt": "Read <code>n</code> and print 1 to n, skipping multiples of 3.",
    "starter": "# if i % 3 == 0: continue\n",
    "tests": [
     {
      "in": "10",
      "out": "1\n2\n4\n5\n7\n8\n10\n"
     },
     {
      "in": "3",
      "out": "1\n2\n"
     }
    ]
   },
   {
    "title": "Remove the spaces",
    "prompt": "Read a sentence and print it with all spaces removed, on one line.",
    "starter": "# Loop over letters, continue on a space\n# print(ch, end=\"\") — then print() at the end\n",
    "tests": [
     {
      "in": "hello world",
      "out": "helloworld\n"
     },
     {
      "in": "  a b  c ",
      "out": "abc\n"
     },
     {
      "in": "py2ai",
      "out": "py2ai\n"
     }
    ]
   },
   {
    "title": "Sum the positives",
    "prompt": "Read <code>n</code>, then n numbers (one per line). Print the sum of only the positive ones.",
    "starter": "# Loop n times, read a number, continue if it's not positive\n",
    "tests": [
     {
      "in": "4\n5\n-2\n10\n-7",
      "out": "15\n"
     },
     {
      "in": "3\n-1\n-2\n-3",
      "out": "0\n"
     },
     {
      "in": "1\n0",
      "out": "0\n"
     }
    ]
   }
  ]
 },
 "20": {
  "topic": "Nested Loops",
  "qs": [
   {
    "title": "Star triangle",
    "prompt": "Read <code>n</code> and print a right triangle of stars. Row <code>i</code> has <code>i</code> stars.",
    "starter": "# Outer loop: rows. Inner loop: stars, print(\"*\", end=\"\")\n# print() after each row\n",
    "tests": [
     {
      "in": "4",
      "out": "*\n**\n***\n****\n"
     },
     {
      "in": "1",
      "out": "*\n"
     }
    ]
   },
   {
    "title": "Multiplication grid",
    "prompt": "Read <code>n</code> and print an n × n grid. Row <code>i</code> shows <code>i*1 i*2 … i*n</code> separated by single spaces.",
    "starter": "# Two loops. print(value, end=\" \")\n",
    "tests": [
     {
      "in": "3",
      "out": "1 2 3 \n2 4 6 \n3 6 9 \n"
     },
     {
      "in": "5",
      "out": "1 2 3 4 5 \n2 4 6 8 10 \n3 6 9 12 15 \n4 8 12 16 20 \n5 10 15 20 25 \n"
     }
    ]
   },
   {
    "title": "Number triangle",
    "prompt": "Read <code>n</code>. Row <code>i</code> prints <code>1 2 … i</code> separated by spaces.",
    "starter": "# Inner loop runs 1..i\n",
    "tests": [
     {
      "in": "4",
      "out": "1 \n1 2 \n1 2 3 \n1 2 3 4 \n"
     },
     {
      "in": "2",
      "out": "1 \n1 2 \n"
     }
    ]
   }
  ]
 },
 "21": {
  "topic": "Project · Number Pattern Studio",
  "qs": [
   {
    "title": "Upside-down triangle",
    "prompt": "Read <code>n</code>. Print n stars on the first row, one fewer on each row after, down to 1.",
    "starter": "# Count rows down from n to 1\n",
    "tests": [
     {
      "in": "4",
      "out": "****\n***\n**\n*\n"
     },
     {
      "in": "2",
      "out": "**\n*\n"
     }
    ]
   },
   {
    "title": "Floyd's triangle",
    "prompt": "Read <code>n</code> rows. Print consecutive numbers: <code>1</code> / <code>2 3</code> / <code>4 5 6</code> …",
    "starter": "# Keep a counter outside the loops\n",
    "tests": [
     {
      "in": "4",
      "out": "1 \n2 3 \n4 5 6 \n7 8 9 10 \n"
     },
     {
      "in": "1",
      "out": "1 \n"
     }
    ]
   },
   {
    "title": "Pyramid",
    "prompt": "Read <code>n</code>. Row <code>i</code> has <code>n - i</code> spaces then <code>2*i - 1</code> stars, so it forms a centred pyramid.",
    "starter": "# First print the spaces, then the stars\n",
    "tests": [
     {
      "in": "3",
      "out": "  *\n ***\n*****\n"
     },
     {
      "in": "5",
      "out": "    *\n   ***\n  *****\n *******\n*********\n"
     }
    ]
   }
  ]
 },
 "22": {
  "topic": "Strings Intro",
  "qs": [
   {
    "title": "Length",
    "prompt": "Read a line of text and print how many characters it has (spaces count).",
    "starter": "# len()\n",
    "tests": [
     {
      "in": "python",
      "out": "6\n"
     },
     {
      "in": "hello world",
      "out": "11\n"
     },
     {
      "in": "a",
      "out": "1\n"
     }
    ]
   },
   {
    "title": "Full name",
    "prompt": "Read a first name and a last name. Print <code>Full name: FIRST LAST</code> and on the next line <code>Length: N</code> (length of the full name with the space).",
    "starter": "# Join with a space, then len()\n",
    "tests": [
     {
      "in": "Asha\nSharma",
      "out": "Full name: Asha Sharma\nLength: 11\n"
     },
     {
      "in": "Ravi\nK",
      "out": "Full name: Ravi K\nLength: 6\n"
     }
    ]
   },
   {
    "title": "Repeat it",
    "prompt": "Read a word and a number <code>n</code>. Print the word repeated n times with nothing in between.",
    "starter": "# A string times a number repeats it\n",
    "tests": [
     {
      "in": "ha\n3",
      "out": "hahaha\n"
     },
     {
      "in": "py\n1",
      "out": "py\n"
     },
     {
      "in": "ab\n0",
      "out": "\n"
     }
    ]
   }
  ]
 },
 "23": {
  "topic": "Indexing",
  "qs": [
   {
    "title": "First and last",
    "prompt": "Read a word and print its first character, then its last character, on separate lines.",
    "starter": "# word[0] and word[-1]\n",
    "tests": [
     {
      "in": "python",
      "out": "p\nn\n"
     },
     {
      "in": "a",
      "out": "a\na\n"
     },
     {
      "in": "Py2AI",
      "out": "P\nI\n"
     }
    ]
   },
   {
    "title": "Middle letter",
    "prompt": "Read a word and print the character at index <code>len(word) // 2</code>.",
    "starter": "# Work out the middle index first\n",
    "tests": [
     {
      "in": "hello",
      "out": "l\n"
     },
     {
      "in": "code",
      "out": "d\n"
     },
     {
      "in": "a",
      "out": "a\n"
     }
    ]
   },
   {
    "title": "Same ends?",
    "prompt": "Read a word. Print <code>Yes</code> if its first and last characters are the same, otherwise <code>No</code>. Case matters.",
    "starter": "# Compare word[0] with word[-1]\n",
    "tests": [
     {
      "in": "level",
      "out": "Yes\n"
     },
     {
      "in": "python",
      "out": "No\n"
     },
     {
      "in": "Anna",
      "out": "No\n"
     },
     {
      "in": "x",
      "out": "Yes\n"
     }
    ]
   }
  ]
 },
 "24": {
  "topic": "Slicing",
  "qs": [
   {
    "title": "First three",
    "prompt": "Read a word and print its first three characters.",
    "starter": "# word[:3]\n",
    "tests": [
     {
      "in": "python",
      "out": "pyt\n"
     },
     {
      "in": "hi",
      "out": "hi\n"
     },
     {
      "in": "programming",
      "out": "pro\n"
     }
    ]
   },
   {
    "title": "Reverse with a slice",
    "prompt": "Read a word and print it reversed using a slice.",
    "starter": "# A step of -1 walks backwards\n",
    "tests": [
     {
      "in": "python",
      "out": "nohtyp\n"
     },
     {
      "in": "racecar",
      "out": "racecar\n"
     },
     {
      "in": "ab",
      "out": "ba\n"
     }
    ]
   },
   {
    "title": "Palindrome",
    "prompt": "Read a lowercase word. Print <code>Palindrome</code> if it reads the same backwards, else <code>Not palindrome</code>.",
    "starter": "# Compare the word with its reverse\n",
    "tests": [
     {
      "in": "level",
      "out": "Palindrome\n"
     },
     {
      "in": "python",
      "out": "Not palindrome\n"
     },
     {
      "in": "a",
      "out": "Palindrome\n"
     },
     {
      "in": "abba",
      "out": "Palindrome\n"
     }
    ]
   }
  ]
 },
 "25": {
  "topic": "String Methods",
  "qs": [
   {
    "title": "Shout it",
    "prompt": "Read a sentence and print it in uppercase.",
    "starter": "# .upper()\n",
    "tests": [
     {
      "in": "hello world",
      "out": "HELLO WORLD\n"
     },
     {
      "in": "Py2AI rocks",
      "out": "PY2AI ROCKS\n"
     }
    ]
   },
   {
    "title": "Count the a's",
    "prompt": "Read a sentence. Convert it to lowercase and print how many times <code>a</code> appears.",
    "starter": "# .lower() then .count(\"a\")\n",
    "tests": [
     {
      "in": "Banana",
      "out": "3\n"
     },
     {
      "in": "A cat sat",
      "out": "3\n"
     },
     {
      "in": "python",
      "out": "0\n"
     }
    ]
   },
   {
    "title": "Clean it up",
    "prompt": "Read a sentence. Remove spaces at both ends, then replace every remaining space with <code>_</code>.",
    "starter": "# .strip() then .replace(\" \", \"_\")\n",
    "tests": [
     {
      "in": "  hello world  ",
      "out": "hello_world\n"
     },
     {
      "in": "one two three",
      "out": "one_two_three\n"
     },
     {
      "in": "solo",
      "out": "solo\n"
     }
    ]
   }
  ]
 },
 "26": {
  "topic": "String Formatting",
  "qs": [
   {
    "title": "Introduce yourself",
    "prompt": "Read a name and an age. Print <code>My name is NAME and I am AGE years old.</code> using <code>.format()</code>.",
    "starter": "# \"...{}...{}...\".format(name, age)\n",
    "tests": [
     {
      "in": "Asha\n21",
      "out": "My name is Asha and I am 21 years old.\n"
     },
     {
      "in": "Ravi\n30",
      "out": "My name is Ravi and I am 30 years old.\n"
     }
    ]
   },
   {
    "title": "Two decimals",
    "prompt": "Read a price and print <code>Price: X</code> with exactly two decimal places.",
    "starter": "# \"{:.2f}\".format(...)\n",
    "tests": [
     {
      "in": "12.5",
      "out": "Price: 12.50\n"
     },
     {
      "in": "99",
      "out": "Price: 99.00\n"
     },
     {
      "in": "3.14159",
      "out": "Price: 3.14\n"
     }
    ]
   },
   {
    "title": "Bill line",
    "prompt": "Read an item name, a quantity and a unit price. Print <code>QTY x ITEM = TOTAL</code> with the total to two decimals.",
    "starter": "# Convert qty to int and price to float\n",
    "tests": [
     {
      "in": "Pen\n3\n10",
      "out": "3 x Pen = 30.00\n"
     },
     {
      "in": "Notebook\n2\n45.5",
      "out": "2 x Notebook = 91.00\n"
     }
    ]
   }
  ]
 },
 "27": {
  "topic": "f-Strings",
  "qs": [
   {
    "title": "Show the sum",
    "prompt": "Read two whole numbers and print <code>a + b = sum</code> using an f-string.",
    "starter": "# f\"{a} + {b} = {a + b}\"\n",
    "tests": [
     {
      "in": "4\n5",
      "out": "4 + 5 = 9\n"
     },
     {
      "in": "10\n-3",
      "out": "10 + -3 = 7\n"
     }
    ]
   },
   {
    "title": "Circle area",
    "prompt": "Read a radius. Using π = 3.14, print <code>Area: X</code> with two decimals.",
    "starter": "# area = 3.14 * r * r\n# f\"{area:.2f}\"\n",
    "tests": [
     {
      "in": "1",
      "out": "Area: 3.14\n"
     },
     {
      "in": "2.5",
      "out": "Area: 19.62\n"
     },
     {
      "in": "10",
      "out": "Area: 314.00\n"
     }
    ]
   },
   {
    "title": "Score row",
    "prompt": "Read a name and a score. Print the name left-aligned in 10 characters, then <code>|</code>, then the score right-aligned in 5.",
    "starter": "# f\"{name:<10}|{score:>5}\"\n",
    "tests": [
     {
      "in": "Asha\n95",
      "out": "Asha      |   95\n"
     },
     {
      "in": "Ravi\n7",
      "out": "Ravi      |    7\n"
     }
    ]
   }
  ]
 },
 "28": {
  "topic": "Project · Password Strength Checker",
  "qs": [
   {
    "title": "Long enough?",
    "prompt": "Read a password. Print <code>Strong</code> if it has 8 or more characters, else <code>Weak</code>.",
    "starter": "# len(password) >= 8\n",
    "tests": [
     {
      "in": "hello123",
      "out": "Strong\n"
     },
     {
      "in": "abc",
      "out": "Weak\n"
     },
     {
      "in": "12345678",
      "out": "Strong\n"
     }
    ]
   },
   {
    "title": "Character counts",
    "prompt": "Read a password. Print <code>Upper: X</code>, <code>Lower: Y</code>, <code>Digits: Z</code> on three lines.",
    "starter": "# Loop through and use .isupper() .islower() .isdigit()\n",
    "tests": [
     {
      "in": "Py2AI2026",
      "out": "Upper: 3\nLower: 1\nDigits: 5\n"
     },
     {
      "in": "hello!",
      "out": "Upper: 0\nLower: 5\nDigits: 0\n"
     },
     {
      "in": "ABC",
      "out": "Upper: 3\nLower: 0\nDigits: 0\n"
     }
    ]
   },
   {
    "title": "Strength meter",
    "prompt": "Read a password. <code>Strong</code> if 8+ characters <b>and</b> it has an uppercase, a lowercase and a digit. Otherwise <code>Medium</code> if 6+ characters. Otherwise <code>Weak</code>.",
    "starter": "# Use three True/False flags while looping\n",
    "tests": [
     {
      "in": "Hello2026",
      "out": "Strong\n"
     },
     {
      "in": "hellohello",
      "out": "Medium\n"
     },
     {
      "in": "Ab1",
      "out": "Weak\n"
     },
     {
      "in": "ABCdef",
      "out": "Medium\n"
     }
    ]
   }
  ]
 },
 "29": {
  "topic": "Major Project · Report Card (Part 1)",
  "qs": [
   {
    "title": "Total and average",
    "prompt": "Read three marks (one per line). Print <code>Total: X</code> and <code>Average: Y</code> (two decimals).",
    "starter": "# Add them up, divide by 3\n",
    "tests": [
     {
      "in": "80\n90\n70",
      "out": "Total: 240\nAverage: 80.00\n"
     },
     {
      "in": "100\n99\n98",
      "out": "Total: 297\nAverage: 99.00\n"
     },
     {
      "in": "35\n40\n41",
      "out": "Total: 116\nAverage: 38.67\n"
     }
    ]
   },
   {
    "title": "Grade from average",
    "prompt": "Read an average (can have decimals). Print <code>Grade: A</code> (90+), <code>B</code> (75+), <code>C</code> (50+), otherwise <code>F</code>.",
    "starter": "# float(input()) then if / elif\n",
    "tests": [
     {
      "in": "92.5",
      "out": "Grade: A\n"
     },
     {
      "in": "75",
      "out": "Grade: B\n"
     },
     {
      "in": "74.99",
      "out": "Grade: C\n"
     },
     {
      "in": "10",
      "out": "Grade: F\n"
     }
    ]
   },
   {
    "title": "Pass or fail",
    "prompt": "Read three marks. Print <code>Result: Pass</code> if every mark is 35 or more, else <code>Result: Fail</code>.",
    "starter": "# All three must be >= 35\n",
    "tests": [
     {
      "in": "40\n50\n60",
      "out": "Result: Pass\n"
     },
     {
      "in": "34\n90\n90",
      "out": "Result: Fail\n"
     },
     {
      "in": "35\n35\n35",
      "out": "Result: Pass\n"
     }
    ]
   }
  ]
 },
 "30": {
  "topic": "Major Project · Report Card (Part 2)",
  "qs": [
   {
    "title": "Full report card",
    "prompt": "Read a name and three marks. Print:<pre>Name: NAME\nTotal: X\nAverage: Y   (two decimals)\nGrade: G     (A 90+, B 75+, C 50+, else F)</pre>",
    "starter": "# Reuse your Day 29 logic\n",
    "tests": [
     {
      "in": "Asha\n80\n90\n85",
      "out": "Name: Asha\nTotal: 255\nAverage: 85.00\nGrade: B\n"
     },
     {
      "in": "Ravi\n40\n50\n45",
      "out": "Name: Ravi\nTotal: 135\nAverage: 45.00\nGrade: F\n"
     }
    ]
   },
   {
    "title": "Best subject",
    "prompt": "Read three marks. Print <code>Highest: X</code>.",
    "starter": "# Compare with if, keep the biggest\n",
    "tests": [
     {
      "in": "70\n95\n80",
      "out": "Highest: 95\n"
     },
     {
      "in": "50\n50\n50",
      "out": "Highest: 50\n"
     },
     {
      "in": "99\n1\n2",
      "out": "Highest: 99\n"
     }
    ]
   },
   {
    "title": "Class average",
    "prompt": "Read <code>n</code>, then n marks. Print <code>Class average: X</code> with two decimals.",
    "starter": "# Loop n times, add each mark\n",
    "tests": [
     {
      "in": "3\n70\n80\n90",
      "out": "Class average: 80.00\n"
     },
     {
      "in": "4\n100\n0\n55\n61",
      "out": "Class average: 54.00\n"
     }
    ]
   }
  ]
 },
 "31": {
  "topic": "Lists",
  "qs": [
   {
    "title": "Make a list",
    "prompt": "Read three words (one per line), put them in a list and print the list.",
    "starter": "# my_list = [a, b, c]\n",
    "tests": [
     {
      "in": "red\ngreen\nblue",
      "out": "['red', 'green', 'blue']\n"
     },
     {
      "in": "x\ny\nz",
      "out": "['x', 'y', 'z']\n"
     }
    ]
   },
   {
    "title": "First and last item",
    "prompt": "Read <code>n</code>, then n whole numbers (one per line). Store them in a list and print the first and last items on separate lines.",
    "starter": "# Start with an empty list and append in a loop\n# list[0], list[-1]\n",
    "tests": [
     {
      "in": "4\n5\n8\n2\n9",
      "out": "5\n9\n"
     },
     {
      "in": "1\n42",
      "out": "42\n42\n"
     }
    ]
   },
   {
    "title": "Numbers from one line",
    "prompt": "Read one line of numbers separated by spaces. Turn them into a list of ints, print the list, then print its length.",
    "starter": "# input().split() gives a list of text pieces\n# Convert each to int\n",
    "tests": [
     {
      "in": "3 1 4 1 5",
      "out": "[3, 1, 4, 1, 5]\n5\n"
     },
     {
      "in": "10",
      "out": "[10]\n1\n"
     },
     {
      "in": "-2 0 2",
      "out": "[-2, 0, 2]\n3\n"
     }
    ]
   }
  ]
 },
 "32": {
  "topic": "List Methods",
  "qs": [
   {
    "title": "Append 100",
    "prompt": "Read a line of space-separated numbers into a list of ints. Append <code>100</code> and print the list.",
    "starter": "# .append()\n",
    "tests": [
     {
      "in": "1 2 3",
      "out": "[1, 2, 3, 100]\n"
     },
     {
      "in": "7",
      "out": "[7, 100]\n"
     }
    ]
   },
   {
    "title": "Sort the words",
    "prompt": "Read a line of words separated by spaces. Sort them alphabetically and print the list.",
    "starter": "# .split() then .sort()\n",
    "tests": [
     {
      "in": "pear apple mango",
      "out": "['apple', 'mango', 'pear']\n"
     },
     {
      "in": "b a c a",
      "out": "['a', 'a', 'b', 'c']\n"
     }
    ]
   },
   {
    "title": "Remove a value",
    "prompt": "Read a line of numbers, then a number <code>x</code>. If <code>x</code> is in the list, remove its first occurrence and print the list. Otherwise print <code>Not found</code>.",
    "starter": "# Check with in, then .remove(x)\n",
    "tests": [
     {
      "in": "1 2 3 2\n2",
      "out": "[1, 3, 2]\n"
     },
     {
      "in": "4 5 6\n9",
      "out": "Not found\n"
     },
     {
      "in": "8\n8",
      "out": "[]\n"
     }
    ]
   }
  ]
 },
 "33": {
  "topic": "List Traversal",
  "qs": [
   {
    "title": "Double each",
    "prompt": "Read a line of numbers and print each number doubled, one per line.",
    "starter": "# for n in nums: print(n * 2)\n",
    "tests": [
     {
      "in": "1 2 3",
      "out": "2\n4\n6\n"
     },
     {
      "in": "-4 0",
      "out": "-8\n0\n"
     }
    ]
   },
   {
    "title": "Sum with a loop",
    "prompt": "Read a line of numbers and print their sum. Use a loop, not <code>sum()</code>.",
    "starter": "# total = 0, add each number\n",
    "tests": [
     {
      "in": "1 2 3 4",
      "out": "10\n"
     },
     {
      "in": "10 -10",
      "out": "0\n"
     },
     {
      "in": "7",
      "out": "7\n"
     }
    ]
   },
   {
    "title": "Index and value",
    "prompt": "Read a line of words and print each as <code>INDEX: WORD</code>.",
    "starter": "# range(len(words)) or enumerate()\n",
    "tests": [
     {
      "in": "apple banana cherry",
      "out": "0: apple\n1: banana\n2: cherry\n"
     },
     {
      "in": "solo",
      "out": "0: solo\n"
     }
    ]
   }
  ]
 },
 "34": {
  "topic": "List Operations",
  "qs": [
   {
    "title": "Join two lists",
    "prompt": "Read two lines of numbers. Combine them into one list (first line first) and print it.",
    "starter": "# list1 + list2\n",
    "tests": [
     {
      "in": "1 2\n3 4",
      "out": "[1, 2, 3, 4]\n"
     },
     {
      "in": "5\n6 7 8",
      "out": "[5, 6, 7, 8]\n"
     }
    ]
   },
   {
    "title": "Is it there?",
    "prompt": "Read a line of numbers, then a number <code>x</code>. Print <code>Yes</code> if x is in the list, else <code>No</code>.",
    "starter": "# The in keyword\n",
    "tests": [
     {
      "in": "1 2 3\n2",
      "out": "Yes\n"
     },
     {
      "in": "1 2 3\n5",
      "out": "No\n"
     }
    ]
   },
   {
    "title": "Max, min, sum",
    "prompt": "Read a line of numbers. Print <code>Max: X</code>, <code>Min: Y</code>, <code>Sum: Z</code>.",
    "starter": "# max(), min(), sum()\n",
    "tests": [
     {
      "in": "3 9 1 4",
      "out": "Max: 9\nMin: 1\nSum: 17\n"
     },
     {
      "in": "-5 -2",
      "out": "Max: -2\nMin: -5\nSum: -7\n"
     },
     {
      "in": "6",
      "out": "Max: 6\nMin: 6\nSum: 6\n"
     }
    ]
   }
  ]
 },
 "35": {
  "topic": "List Challenges",
  "qs": [
   {
    "title": "Second largest",
    "prompt": "Read a line of numbers (at least two different values). Print the second largest <b>distinct</b> value.",
    "starter": "# Remove duplicates, sort, pick from the end\n",
    "tests": [
     {
      "in": "4 9 2 9 7",
      "out": "7\n"
     },
     {
      "in": "1 2",
      "out": "1\n"
     },
     {
      "in": "5 5 3",
      "out": "3\n"
     }
    ]
   },
   {
    "title": "Remove duplicates",
    "prompt": "Read a line of numbers. Print a list with duplicates removed, keeping the first-seen order.",
    "starter": "# Build a new list, only add numbers not already in it\n",
    "tests": [
     {
      "in": "1 2 1 3 2",
      "out": "[1, 2, 3]\n"
     },
     {
      "in": "4 4 4",
      "out": "[4]\n"
     },
     {
      "in": "9 8 7",
      "out": "[9, 8, 7]\n"
     }
    ]
   },
   {
    "title": "Even vs odd",
    "prompt": "Read a line of numbers. Print <code>Even: X</code> and <code>Odd: Y</code> — how many of each.",
    "starter": "# Two counters\n",
    "tests": [
     {
      "in": "1 2 3 4 5",
      "out": "Even: 2\nOdd: 3\n"
     },
     {
      "in": "2 4",
      "out": "Even: 2\nOdd: 0\n"
     },
     {
      "in": "7",
      "out": "Even: 0\nOdd: 1\n"
     }
    ]
   }
  ]
 },
 "36": {
  "topic": "Practice",
  "qs": [
   {
    "title": "Reverse the list",
    "prompt": "Read a line of numbers and print the list reversed.",
    "starter": "# .reverse() or a slice\n",
    "tests": [
     {
      "in": "1 2 3",
      "out": "[3, 2, 1]\n"
     },
     {
      "in": "5",
      "out": "[5]\n"
     }
    ]
   },
   {
    "title": "Running total",
    "prompt": "Read a line of numbers. Print a list where each item is the sum of all numbers up to that point.",
    "starter": "# Keep a running total and append it each step\n",
    "tests": [
     {
      "in": "1 2 3 4",
      "out": "[1, 3, 6, 10]\n"
     },
     {
      "in": "5 -5 5",
      "out": "[5, 0, 5]\n"
     },
     {
      "in": "10",
      "out": "[10]\n"
     }
    ]
   },
   {
    "title": "Rotate left",
    "prompt": "Read a line of numbers, then <code>k</code>. Rotate the list left by k places and print it. (k can be bigger than the length.)",
    "starter": "# k = k % len(nums)\n# nums[k:] + nums[:k]\n",
    "tests": [
     {
      "in": "1 2 3 4 5\n2",
      "out": "[3, 4, 5, 1, 2]\n"
     },
     {
      "in": "1 2 3\n4",
      "out": "[2, 3, 1]\n"
     },
     {
      "in": "7 8\n0",
      "out": "[7, 8]\n"
     }
    ]
   }
  ]
 },
 "37": {
  "topic": "Project · Shopping Cart System",
  "qs": [
   {
    "title": "Cart total",
    "prompt": "Read <code>n</code>, then n lines of <code>ITEM PRICE</code> (price is a whole number). Print <code>Total: X</code>.",
    "starter": "# .split() each line into item and price\n",
    "tests": [
     {
      "in": "3\nPen 10\nBook 120\nBag 500",
      "out": "Total: 630\n"
     },
     {
      "in": "1\nApple 30",
      "out": "Total: 30\n"
     }
    ]
   },
   {
    "title": "Remove from cart",
    "prompt": "Read a line of items, then one item to remove. Remove it if present. Print the cart list, then <code>Items: N</code>.",
    "starter": "# if item in cart: cart.remove(item)\n",
    "tests": [
     {
      "in": "milk bread eggs\nbread",
      "out": "['milk', 'eggs']\nItems: 2\n"
     },
     {
      "in": "milk bread\njam",
      "out": "['milk', 'bread']\nItems: 2\n"
     }
    ]
   },
   {
    "title": "Itemised bill",
    "prompt": "Read <code>n</code>, then n lines of <code>ITEM QTY PRICE</code>. For each print <code>ITEM: QTY x PRICE = LINE_TOTAL</code>, then <code>Grand total: X</code>.",
    "starter": "# Multiply qty and price per line, keep a grand total\n",
    "tests": [
     {
      "in": "2\nPen 3 10\nBook 1 120",
      "out": "Pen: 3 x 10 = 30\nBook: 1 x 120 = 120\nGrand total: 150\n"
     },
     {
      "in": "1\nTea 4 15",
      "out": "Tea: 4 x 15 = 60\nGrand total: 60\n"
     }
    ]
   }
  ]
 },
 "38": {
  "topic": "Tuples",
  "qs": [
   {
    "title": "Make a tuple",
    "prompt": "Read three whole numbers (one per line), store them in a tuple and print it.",
    "starter": "# (a, b, c)\n",
    "tests": [
     {
      "in": "1\n2\n3",
      "out": "(1, 2, 3)\n"
     },
     {
      "in": "9\n0\n-1",
      "out": "(9, 0, -1)\n"
     }
    ]
   },
   {
    "title": "Unpack a point",
    "prompt": "Read a line <code>X Y</code>. Store it as a tuple of ints, unpack it, and print <code>x = X, y = Y</code>.",
    "starter": "# point = (..., ...)\n# x, y = point\n",
    "tests": [
     {
      "in": "3 4",
      "out": "x = 3, y = 4\n"
     },
     {
      "in": "-1 10",
      "out": "x = -1, y = 10\n"
     }
    ]
   },
   {
    "title": "Count and find",
    "prompt": "Read a line of numbers into a tuple, then a number <code>x</code>. If x is present print <code>Count: C</code> and <code>Index: I</code> (first position). Otherwise print <code>Not found</code>.",
    "starter": "# .count(x) and .index(x)\n",
    "tests": [
     {
      "in": "1 2 3 2 2\n2",
      "out": "Count: 3\nIndex: 1\n"
     },
     {
      "in": "4 5\n6",
      "out": "Not found\n"
     }
    ]
   }
  ]
 },
 "39": {
  "topic": "Sets",
  "qs": [
   {
    "title": "Unique words",
    "prompt": "Read a line of words and print how many unique words it has.",
    "starter": "# set() removes duplicates\n",
    "tests": [
     {
      "in": "a b a c b",
      "out": "3\n"
     },
     {
      "in": "one",
      "out": "1\n"
     },
     {
      "in": "x x x",
      "out": "1\n"
     }
    ]
   },
   {
    "title": "Sorted unique numbers",
    "prompt": "Read a line of numbers. Print the unique values as a sorted list.",
    "starter": "# sorted(set(...))\n",
    "tests": [
     {
      "in": "3 1 3 2 1",
      "out": "[1, 2, 3]\n"
     },
     {
      "in": "5 5",
      "out": "[5]\n"
     }
    ]
   },
   {
    "title": "Unique letters",
    "prompt": "Read a word and print <code>Unique letters: N</code>.",
    "starter": "# A set of the word's characters\n",
    "tests": [
     {
      "in": "banana",
      "out": "Unique letters: 3\n"
     },
     {
      "in": "abc",
      "out": "Unique letters: 3\n"
     },
     {
      "in": "aaaa",
      "out": "Unique letters: 1\n"
     }
    ]
   }
  ]
 },
 "40": {
  "topic": "Set Operations",
  "qs": [
   {
    "title": "Common numbers",
    "prompt": "Read two lines of numbers. Print the numbers found in both, as a sorted list.",
    "starter": "# set1 & set2\n",
    "tests": [
     {
      "in": "1 2 3 4\n3 4 5",
      "out": "[3, 4]\n"
     },
     {
      "in": "1 2\n3 4",
      "out": "[]\n"
     }
    ]
   },
   {
    "title": "All numbers",
    "prompt": "Read two lines of numbers. Print every number that appears in either line, as a sorted list.",
    "starter": "# set1 | set2\n",
    "tests": [
     {
      "in": "1 2 3\n3 4",
      "out": "[1, 2, 3, 4]\n"
     },
     {
      "in": "5 5\n5",
      "out": "[5]\n"
     }
    ]
   },
   {
    "title": "In one, not both",
    "prompt": "Read two lines of numbers. Print the numbers that are in exactly one of the lines, as a sorted list.",
    "starter": "# set1 ^ set2\n",
    "tests": [
     {
      "in": "1 2 3\n2 3 4",
      "out": "[1, 4]\n"
     },
     {
      "in": "1 2\n1 2",
      "out": "[]\n"
     }
    ]
   }
  ]
 },
 "41": {
  "topic": "Dictionaries",
  "qs": [
   {
    "title": "Marks dictionary",
    "prompt": "Read <code>n</code>, then n lines of <code>NAME MARKS</code>. Build a dictionary (marks as int) and print it.",
    "starter": "# d[name] = int(marks)\n",
    "tests": [
     {
      "in": "2\nAsha 90\nRavi 75",
      "out": "{'Asha': 90, 'Ravi': 75}\n"
     },
     {
      "in": "1\nZed 0",
      "out": "{'Zed': 0}\n"
     }
    ]
   },
   {
    "title": "Letter counter",
    "prompt": "Read a word and print a dictionary of how many times each letter appears (in first-seen order).",
    "starter": "# if ch in d: add 1, else set to 1\n",
    "tests": [
     {
      "in": "banana",
      "out": "{'b': 1, 'a': 3, 'n': 2}\n"
     },
     {
      "in": "abc",
      "out": "{'a': 1, 'b': 1, 'c': 1}\n"
     }
    ]
   },
   {
    "title": "Capital lookup",
    "prompt": "Read <code>n</code>, then n lines of <code>COUNTRY CAPITAL</code>, then one country to look up. Print its capital or <code>Unknown</code>.",
    "starter": "# Build the dict, then check with in\n",
    "tests": [
     {
      "in": "2\nIndia Delhi\nFrance Paris\nFrance",
      "out": "Paris\n"
     },
     {
      "in": "1\nJapan Tokyo\nItaly",
      "out": "Unknown\n"
     }
    ]
   }
  ]
 },
 "42": {
  "topic": "Dictionary Methods",
  "qs": [
   {
    "title": "Keys and values",
    "prompt": "Read <code>n</code>, then n lines of <code>KEY VALUE</code>. Print the list of keys, then the list of values.",
    "starter": "# list(d.keys()), list(d.values())\n",
    "tests": [
     {
      "in": "2\na 1\nb 2",
      "out": "['a', 'b']\n['1', '2']\n"
     },
     {
      "in": "3\nx red\ny green\nz blue",
      "out": "['x', 'y', 'z']\n['red', 'green', 'blue']\n"
     }
    ]
   },
   {
    "title": "Safe lookup",
    "prompt": "Read pairs as above, then a key. Print its value using <code>.get()</code>, or <code>Not found</code> if missing.",
    "starter": "# d.get(key, default)\n",
    "tests": [
     {
      "in": "2\na 1\nb 2\nb",
      "out": "2\n"
     },
     {
      "in": "1\na 1\nz",
      "out": "Not found\n"
     }
    ]
   },
   {
    "title": "Update and list",
    "prompt": "Read pairs as above, then a line <code>KEY VALUE</code> to set (update or add). Print every item as <code>KEY: VALUE</code>.",
    "starter": "# d[key] = value, then loop over d.items()\n",
    "tests": [
     {
      "in": "2\na 1\nb 2\na 9",
      "out": "a: 9\nb: 2\n"
     },
     {
      "in": "1\na 1\nc 3",
      "out": "a: 1\nc: 3\n"
     }
    ]
   }
  ]
 },
 "43": {
  "topic": "Nested Dictionaries",
  "qs": [
   {
    "title": "Student lookup",
    "prompt": "Read <code>n</code>, then n lines of <code>NAME MATH SCIENCE</code>. Store as <code>{name: {\"math\": m, \"science\": s}}</code>. Then read a name and print <code>Math: M</code> and <code>Science: S</code>.",
    "starter": "# Outer dict keyed by name, inner dict for subjects\n",
    "tests": [
     {
      "in": "2\nAsha 90 85\nRavi 70 60\nRavi",
      "out": "Math: 70\nScience: 60\n"
     },
     {
      "in": "1\nZoe 100 99\nZoe",
      "out": "Math: 100\nScience: 99\n"
     }
    ]
   },
   {
    "title": "Totals",
    "prompt": "Same input (without the final name). Print each student as <code>NAME: TOTAL</code> in input order.",
    "starter": "# Loop over the outer dict, add the inner values\n",
    "tests": [
     {
      "in": "2\nAsha 90 85\nRavi 70 60",
      "out": "Asha: 175\nRavi: 130\n"
     },
     {
      "in": "3\nA 1 2\nB 3 4\nC 5 6",
      "out": "A: 3\nB: 7\nC: 11\n"
     }
    ]
   },
   {
    "title": "Topper",
    "prompt": "Same input. Print <code>Topper: NAME</code> for the highest total (first one wins a tie).",
    "starter": "# Track the best total and its name\n",
    "tests": [
     {
      "in": "2\nAsha 90 85\nRavi 70 60",
      "out": "Topper: Asha\n"
     },
     {
      "in": "3\nA 50 50\nB 60 40\nC 10 10",
      "out": "Topper: A\n"
     }
    ]
   }
  ]
 },
 "44": {
  "topic": "Project · Phone Contact Directory",
  "qs": [
   {
    "title": "Find a number",
    "prompt": "Read <code>n</code>, then n lines of <code>NAME PHONE</code>, then a name to search. Print the phone or <code>Contact not found</code>.",
    "starter": "# Dictionary lookup\n",
    "tests": [
     {
      "in": "2\nAsha 98450\nRavi 99001\nAsha",
      "out": "98450\n"
     },
     {
      "in": "1\nAsha 98450\nMeena",
      "out": "Contact not found\n"
     }
    ]
   },
   {
    "title": "Delete a contact",
    "prompt": "Read contacts as above, then a name to delete (if present). Print the remaining names in alphabetical order, one per line.",
    "starter": "# del c[name] or .pop(name, None)\n",
    "tests": [
     {
      "in": "3\nRavi 1\nAsha 2\nZoe 3\nZoe",
      "out": "Asha\nRavi\n"
     },
     {
      "in": "2\nB 1\nA 2\nX",
      "out": "A\nB\n"
     }
    ]
   },
   {
    "title": "Search by letter",
    "prompt": "Read contacts, then a letter. Print every contact whose name starts with that letter (ignore case) as <code>NAME: PHONE</code>, in input order. If none, print <code>No matches</code>.",
    "starter": "# name.lower().startswith(letter.lower())\n",
    "tests": [
     {
      "in": "3\nAsha 1\nRavi 2\namit 3\na",
      "out": "Asha: 1\namit: 3\n"
     },
     {
      "in": "2\nAsha 1\nRavi 2\nz",
      "out": "No matches\n"
     }
    ]
   }
  ]
 },
 "45": {
  "topic": "Functions",
  "qs": [
   {
    "title": "Welcome function",
    "prompt": "Define a function <code>greet()</code> that prints <code>Welcome to Py2AI!</code>. Don't call it — the tests will.",
    "starter": "# def greet():\n#     ...\n",
    "tests": [
     {
      "call": "greet()",
      "out": "Welcome to Py2AI!\n"
     },
     {
      "call": "greet()\ngreet()",
      "out": "Welcome to Py2AI!\nWelcome to Py2AI!\n"
     }
    ]
   },
   {
    "title": "Divider line",
    "prompt": "Define <code>print_line()</code> that prints 20 dashes.",
    "starter": "# def print_line():\n",
    "tests": [
     {
      "call": "print_line()",
      "out": "--------------------\n"
     },
     {
      "call": "print_line()\nprint('Py2AI')\nprint_line()",
      "out": "--------------------\nPy2AI\n--------------------\n"
     }
    ]
   },
   {
    "title": "Table of 5",
    "prompt": "Define <code>table_of_5()</code> that prints the 5 times table from <code>5 x 1 = 5</code> to <code>5 x 10 = 50</code>.",
    "starter": "# A loop inside the function\n",
    "tests": [
     {
      "call": "table_of_5()",
      "out": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n"
     }
    ]
   }
  ]
 },
 "46": {
  "topic": "Parameters",
  "qs": [
   {
    "title": "Greet by name",
    "prompt": "Define <code>greet(name)</code> that prints <code>Hello, NAME!</code>",
    "starter": "# def greet(name):\n",
    "tests": [
     {
      "call": "greet('Asha')",
      "out": "Hello, Asha!\n"
     },
     {
      "call": "greet('Py2AI')",
      "out": "Hello, Py2AI!\n"
     }
    ]
   },
   {
    "title": "Any times table",
    "prompt": "Define <code>print_table(n)</code> that prints n's table from 1 to 10 like <code>n x i = product</code>.",
    "starter": "# Use the parameter inside the loop\n",
    "tests": [
     {
      "call": "print_table(3)",
      "out": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n"
     },
     {
      "call": "print_table(12)",
      "out": "12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120\n"
     }
    ]
   },
   {
    "title": "Describe a person",
    "prompt": "Define <code>describe(name, age)</code> that prints <code>NAME is AGE years old</code>.",
    "starter": "# Two parameters\n",
    "tests": [
     {
      "call": "describe('Asha', 21)",
      "out": "Asha is 21 years old\n"
     },
     {
      "call": "describe('Ravi', 30)",
      "out": "Ravi is 30 years old\n"
     }
    ]
   }
  ]
 },
 "47": {
  "topic": "Return Values",
  "qs": [
   {
    "title": "Square",
    "prompt": "Define <code>square(n)</code> that <b>returns</b> n × n.",
    "starter": "# return, not print\n",
    "tests": [
     {
      "call": "print(square(4))",
      "out": "16\n"
     },
     {
      "call": "print(square(-3))",
      "out": "9\n"
     },
     {
      "call": "print(square(0) + square(2))",
      "out": "4\n"
     }
    ]
   },
   {
    "title": "Is it even?",
    "prompt": "Define <code>is_even(n)</code> that returns <code>True</code> or <code>False</code>.",
    "starter": "# return n % 2 == 0\n",
    "tests": [
     {
      "call": "print(is_even(4))",
      "out": "True\n"
     },
     {
      "call": "print(is_even(7))",
      "out": "False\n"
     },
     {
      "call": "print(is_even(0))",
      "out": "True\n"
     }
    ]
   },
   {
    "title": "Largest of three",
    "prompt": "Define <code>max_of_three(a, b, c)</code> that returns the largest value.",
    "starter": "# Use if / elif, or max()\n",
    "tests": [
     {
      "call": "print(max_of_three(1, 9, 5))",
      "out": "9\n"
     },
     {
      "call": "print(max_of_three(-1, -9, -5))",
      "out": "-1\n"
     },
     {
      "call": "print(max_of_three(7, 7, 2))",
      "out": "7\n"
     }
    ]
   }
  ]
 },
 "48": {
  "topic": "Scope",
  "qs": [
   {
    "title": "Global counter",
    "prompt": "Create a global <code>count = 0</code>. Define <code>increment()</code> that adds 1 to the global <code>count</code>.",
    "starter": "# count = 0\n# def increment():\n#     global ...\n",
    "tests": [
     {
      "call": "increment()\nincrement()\nprint(count)",
      "out": "2\n"
     },
     {
      "call": "for i in range(5):\n    increment()\nprint(count)",
      "out": "5\n"
     }
    ]
   },
   {
    "title": "Keep pi local",
    "prompt": "Define <code>area(r)</code> that returns the circle area using a <b>local</b> variable <code>pi = 3.14</code>. Don't create <code>pi</code> outside the function.",
    "starter": "# pi lives inside the function only\n",
    "tests": [
     {
      "call": "print(area(1))",
      "out": "3.14\n"
     },
     {
      "call": "print(area(10))",
      "out": "314.0\n"
     },
     {
      "call": "area(2)\nprint('pi' in globals())",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Local vs global",
    "prompt": "Create a global <code>x = \"global\"</code>. Define <code>get_local()</code> that sets its own <code>x = \"local\"</code> and returns it. The global must stay unchanged.",
    "starter": "# No global keyword this time\n",
    "tests": [
     {
      "call": "print(get_local())\nprint(x)",
      "out": "local\nglobal\n"
     }
    ]
   }
  ]
 },
 "49": {
  "topic": "Default Arguments",
  "qs": [
   {
    "title": "Greeting with a default",
    "prompt": "Define <code>greet(name, msg=\"Hello\")</code> that returns <code>MSG, NAME!</code>",
    "starter": "# Default value in the def line\n",
    "tests": [
     {
      "call": "print(greet('Asha'))",
      "out": "Hello, Asha!\n"
     },
     {
      "call": "print(greet('Ravi', 'Welcome'))",
      "out": "Welcome, Ravi!\n"
     }
    ]
   },
   {
    "title": "Power with default",
    "prompt": "Define <code>power(base, exp=2)</code> that returns base ** exp.",
    "starter": "# exp defaults to 2\n",
    "tests": [
     {
      "call": "print(power(5))",
      "out": "25\n"
     },
     {
      "call": "print(power(2, 10))",
      "out": "1024\n"
     },
     {
      "call": "print(power(9, 0))",
      "out": "1\n"
     }
    ]
   },
   {
    "title": "Make a line",
    "prompt": "Define <code>make_line(char=\"-\", length=10)</code> that returns the character repeated <code>length</code> times.",
    "starter": "# Both parameters have defaults\n",
    "tests": [
     {
      "call": "print(make_line())",
      "out": "----------\n"
     },
     {
      "call": "print(make_line('*'))",
      "out": "**********\n"
     },
     {
      "call": "print(make_line('=', 4))",
      "out": "====\n"
     }
    ]
   }
  ]
 },
 "50": {
  "topic": "Keyword Arguments",
  "qs": [
   {
    "title": "Introduce",
    "prompt": "Define <code>intro(name, age, city)</code> that returns <code>NAME, AGE, from CITY</code>. Tests call it with keyword arguments in any order.",
    "starter": "# def intro(name, age, city):\n",
    "tests": [
     {
      "call": "print(intro(city='Pune', name='Ravi', age=30))",
      "out": "Ravi, 30, from Pune\n"
     },
     {
      "call": "print(intro('Asha', city='Bangalore', age=21))",
      "out": "Asha, 21, from Bangalore\n"
     }
    ]
   },
   {
    "title": "Bill calculator",
    "prompt": "Define <code>bill(price, qty=1, discount=0)</code> that returns <code>price * qty - discount</code>.",
    "starter": "# Defaults plus keyword calls\n",
    "tests": [
     {
      "call": "print(bill(100))",
      "out": "100\n"
     },
     {
      "call": "print(bill(price=100, discount=10, qty=2))",
      "out": "190\n"
     },
     {
      "call": "print(bill(50, discount=5))",
      "out": "45\n"
     }
    ]
   },
   {
    "title": "Format a name",
    "prompt": "Define <code>format_name(first, last, upper=False)</code> that returns <code>First Last</code>, or all caps when <code>upper=True</code>.",
    "starter": "# Build the string, then .upper() if needed\n",
    "tests": [
     {
      "call": "print(format_name('Asha', 'Sharma'))",
      "out": "Asha Sharma\n"
     },
     {
      "call": "print(format_name(last='K', first='Ravi', upper=True))",
      "out": "RAVI K\n"
     }
    ]
   }
  ]
 },
 "51": {
  "topic": "Project · Scientific Calculator",
  "qs": [
   {
    "title": "Four operations",
    "prompt": "Define <code>calculate(a, op, b)</code> for <code>+ - * /</code>. Division by zero returns <code>\"Error\"</code>. Any other operator returns <code>\"Invalid\"</code>.",
    "starter": "# if / elif on op\n",
    "tests": [
     {
      "call": "print(calculate(6, '+', 2))",
      "out": "8\n"
     },
     {
      "call": "print(calculate(6, '/', 4))",
      "out": "1.5\n"
     },
     {
      "call": "print(calculate(6, '/', 0))",
      "out": "Error\n"
     },
     {
      "call": "print(calculate(6, '%', 2))",
      "out": "Invalid\n"
     },
     {
      "call": "print(calculate(3, '*', -4))",
      "out": "-12\n"
     }
    ]
   },
   {
    "title": "Factorial",
    "prompt": "Define <code>factorial(n)</code> that returns n! using a loop. <code>factorial(0)</code> is 1.",
    "starter": "# result = 1, multiply up to n\n",
    "tests": [
     {
      "call": "print(factorial(5))",
      "out": "120\n"
     },
     {
      "call": "print(factorial(0))",
      "out": "1\n"
     },
     {
      "call": "print(factorial(10))",
      "out": "3628800\n"
     }
    ]
   },
   {
    "title": "Hypotenuse",
    "prompt": "Define <code>hypotenuse(a, b)</code> that returns √(a² + b²) rounded to 2 decimals. Use <code>** 0.5</code> for the square root.",
    "starter": "# round(value, 2)\n",
    "tests": [
     {
      "call": "print(hypotenuse(3, 4))",
      "out": "5.0\n"
     },
     {
      "call": "print(hypotenuse(1, 1))",
      "out": "1.41\n"
     },
     {
      "call": "print(hypotenuse(5, 12))",
      "out": "13.0\n"
     }
    ]
   }
  ]
 },
 "52": {
  "topic": "Lambda Functions",
  "qs": [
   {
    "title": "Square lambda",
    "prompt": "Create <code>square</code> as a lambda that returns x × x.",
    "starter": "# square = lambda x: ...\n",
    "tests": [
     {
      "call": "print(square(5))",
      "out": "25\n"
     },
     {
      "call": "print(square(-2))",
      "out": "4\n"
     }
    ]
   },
   {
    "title": "Keep the evens",
    "prompt": "Define <code>evens(nums)</code> that returns a list of the even numbers, using <code>filter()</code> and a lambda.",
    "starter": "# list(filter(lambda n: ..., nums))\n",
    "tests": [
     {
      "call": "print(evens([1, 2, 3, 4, 6]))",
      "out": "[2, 4, 6]\n"
     },
     {
      "call": "print(evens([1, 3]))",
      "out": "[]\n"
     }
    ]
   },
   {
    "title": "Sort by marks",
    "prompt": "Define <code>sort_by_marks(pairs)</code>. It takes a list of <code>(name, marks)</code> tuples and returns them sorted by marks, highest first.",
    "starter": "# sorted(pairs, key=lambda p: ..., reverse=True)\n",
    "tests": [
     {
      "call": "print(sort_by_marks([('Asha', 80), ('Ravi', 95), ('Zoe', 70)]))",
      "out": "[('Ravi', 95), ('Asha', 80), ('Zoe', 70)]\n"
     },
     {
      "call": "print(sort_by_marks([('A', 1)]))",
      "out": "[('A', 1)]\n"
     }
    ]
   }
  ]
 },
 "53": {
  "topic": "List Comprehensions",
  "qs": [
   {
    "title": "Squares list",
    "prompt": "Define <code>squares(n)</code> that returns <code>[1, 4, 9, …, n²]</code> using a list comprehension.",
    "starter": "# [i * i for i in range(...)]\n",
    "tests": [
     {
      "call": "print(squares(5))",
      "out": "[1, 4, 9, 16, 25]\n"
     },
     {
      "call": "print(squares(1))",
      "out": "[1]\n"
     },
     {
      "call": "print(squares(0))",
      "out": "[]\n"
     }
    ]
   },
   {
    "title": "Long words",
    "prompt": "Define <code>long_words(words, k)</code> that returns the words longer than k characters.",
    "starter": "# Comprehension with an if\n",
    "tests": [
     {
      "call": "print(long_words(['hi', 'python', 'code', 'ai'], 3))",
      "out": "['python', 'code']\n"
     },
     {
      "call": "print(long_words(['a', 'b'], 5))",
      "out": "[]\n"
     }
    ]
   },
   {
    "title": "Flatten",
    "prompt": "Define <code>flatten(matrix)</code> that turns a list of lists into one flat list.",
    "starter": "# Two for clauses in one comprehension\n",
    "tests": [
     {
      "call": "print(flatten([[1, 2], [3], [4, 5, 6]]))",
      "out": "[1, 2, 3, 4, 5, 6]\n"
     },
     {
      "call": "print(flatten([[], [7]]))",
      "out": "[7]\n"
     }
    ]
   }
  ]
 },
 "54": {
  "topic": "Practice Problems",
  "qs": [
   {
    "title": "Word count",
    "prompt": "Define <code>count_words(sentence)</code> that returns the number of words (split on spaces).",
    "starter": "# len(sentence.split())\n",
    "tests": [
     {
      "call": "print(count_words('I love Python'))",
      "out": "3\n"
     },
     {
      "call": "print(count_words('  lots   of   space  '))",
      "out": "3\n"
     },
     {
      "call": "print(count_words(''))",
      "out": "0\n"
     }
    ]
   },
   {
    "title": "Prime check",
    "prompt": "Define <code>is_prime(n)</code> that returns <code>True</code> if n is prime. Numbers below 2 are not prime.",
    "starter": "# Try dividing by 2 up to n - 1 (or up to √n)\n",
    "tests": [
     {
      "call": "print(is_prime(7))",
      "out": "True\n"
     },
     {
      "call": "print(is_prime(1))",
      "out": "False\n"
     },
     {
      "call": "print(is_prime(21))",
      "out": "False\n"
     },
     {
      "call": "print([n for n in range(20) if is_prime(n)])",
      "out": "[2, 3, 5, 7, 11, 13, 17, 19]\n"
     }
    ]
   },
   {
    "title": "FizzBuzz list",
    "prompt": "Define <code>fizzbuzz(n)</code> that returns a list for 1..n: <code>\"Fizz\"</code> for multiples of 3, <code>\"Buzz\"</code> for 5, <code>\"FizzBuzz\"</code> for both, else the number as text.",
    "starter": "# Check 15 first\n",
    "tests": [
     {
      "call": "print(fizzbuzz(5))",
      "out": "['1', '2', 'Fizz', '4', 'Buzz']\n"
     },
     {
      "call": "print(fizzbuzz(15)[-1])",
      "out": "FizzBuzz\n"
     },
     {
      "call": "print(fizzbuzz(0))",
      "out": "[]\n"
     }
    ]
   }
  ]
 },
 "55": {
  "topic": "Problem Solving",
  "qs": [
   {
    "title": "Two sum",
    "prompt": "Define <code>two_sum(nums, target)</code> that returns <code>[i, j]</code> (i &lt; j) for the first pair adding to target, scanning i then j. Return <code>[]</code> if none.",
    "starter": "# Nested loops over indexes\n",
    "tests": [
     {
      "call": "print(two_sum([2, 7, 11, 15], 9))",
      "out": "[0, 1]\n"
     },
     {
      "call": "print(two_sum([3, 2, 4], 6))",
      "out": "[1, 2]\n"
     },
     {
      "call": "print(two_sum([1, 2], 7))",
      "out": "[]\n"
     }
    ]
   },
   {
    "title": "Anagram",
    "prompt": "Define <code>is_anagram(a, b)</code>. Ignore case and spaces. Return <code>True</code> if they use the same letters.",
    "starter": "# Clean both, then compare sorted letters\n",
    "tests": [
     {
      "call": "print(is_anagram('listen', 'silent'))",
      "out": "True\n"
     },
     {
      "call": "print(is_anagram('Dormitory', 'dirty room'))",
      "out": "True\n"
     },
     {
      "call": "print(is_anagram('abc', 'abd'))",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Most frequent",
    "prompt": "Define <code>most_frequent(nums)</code> that returns the value that appears most. On a tie, return the smallest.",
    "starter": "# Count with a dict, then pick the best\n",
    "tests": [
     {
      "call": "print(most_frequent([1, 3, 3, 2, 1, 3]))",
      "out": "3\n"
     },
     {
      "call": "print(most_frequent([5, 4, 5, 4]))",
      "out": "4\n"
     },
     {
      "call": "print(most_frequent([9]))",
      "out": "9\n"
     }
    ]
   }
  ]
 },
 "56": {
  "topic": "Debugging",
  "qs": [
   {
    "title": "Fix the average",
    "prompt": "This <code>average(nums)</code> gives wrong answers. Find the bug and fix it.",
    "starter": "# Bug hunt: the total is wrong\ndef average(nums):\n    total = 0\n    for n in nums:\n        total = n\n    return total / len(nums)\n",
    "tests": [
     {
      "call": "print(average([2, 4, 6]))",
      "out": "4.0\n"
     },
     {
      "call": "print(average([5]))",
      "out": "5.0\n"
     },
     {
      "call": "print(average([1, 2]))",
      "out": "1.5\n"
     }
    ]
   },
   {
    "title": "Fix the leap year",
    "prompt": "A year is a leap year if it's divisible by 4, except years divisible by 100 — unless they're also divisible by 400. Fix <code>is_leap(year)</code>.",
    "starter": "# Bug hunt: 2000 should be a leap year\ndef is_leap(year):\n    return year % 4 == 0 and year % 100 != 0\n",
    "tests": [
     {
      "call": "print(is_leap(2024))",
      "out": "True\n"
     },
     {
      "call": "print(is_leap(1900))",
      "out": "False\n"
     },
     {
      "call": "print(is_leap(2000))",
      "out": "True\n"
     },
     {
      "call": "print(is_leap(2023))",
      "out": "False\n"
     }
    ]
   },
   {
    "title": "Fix reverse words",
    "prompt": "<code>reverse_words(s)</code> should return the words in reverse order, but it returns something odd. Fix it.",
    "starter": "# Bug hunt: what does .reverse() return?\ndef reverse_words(s):\n    words = s.split()\n    return \" \".join(words.reverse())\n",
    "tests": [
     {
      "call": "print(reverse_words('I love Python'))",
      "out": "Python love I\n"
     },
     {
      "call": "print(reverse_words('one'))",
      "out": "one\n"
     }
    ]
   }
  ]
 },
 "57": {
  "topic": "Code Organization",
  "qs": [
   {
    "title": "Bill in small pieces",
    "prompt": "Write three functions:<br><code>get_total(prices)</code> → sum of prices<br><code>apply_discount(total, percent)</code> → total minus that percent<br><code>final_bill(prices, percent)</code> → uses both, rounded to 2 decimals",
    "starter": "# Small functions, each doing one job\n# final_bill should call the other two\n",
    "tests": [
     {
      "call": "print(get_total([100, 50, 25]))",
      "out": "175\n"
     },
     {
      "call": "print(apply_discount(200, 10))",
      "out": "180.0\n"
     },
     {
      "call": "print(final_bill([99.99, 0.01], 15))",
      "out": "85.0\n"
     },
     {
      "call": "print(final_bill([10, 20], 0))",
      "out": "30.0\n"
     }
    ]
   },
   {
    "title": "Username maker",
    "prompt": "Write <code>clean_name(name)</code> → trims spaces and capitalises (<code>\" asha \"</code> → <code>\"Asha\"</code>). Then <code>make_username(first, last)</code> → first letter of the cleaned first name + cleaned last name, all lowercase.",
    "starter": "# Reuse clean_name inside make_username\n",
    "tests": [
     {
      "call": "print(clean_name('  asha  '))",
      "out": "Asha\n"
     },
     {
      "call": "print(clean_name('RAVI'))",
      "out": "Ravi\n"
     },
     {
      "call": "print(make_username(' asha ', 'SHARMA '))",
      "out": "asharma\n"
     }
    ]
   },
   {
    "title": "Grade report",
    "prompt": "Write <code>is_valid(score)</code> (0–100), <code>grade(score)</code> (A 90+, B 75+, C 50+, else F) and <code>report(scores)</code> → a list of grades, with <code>\"Invalid\"</code> for bad scores.",
    "starter": "# report() loops and calls the other two\n",
    "tests": [
     {
      "call": "print(is_valid(101))",
      "out": "False\n"
     },
     {
      "call": "print(grade(75))",
      "out": "B\n"
     },
     {
      "call": "print(report([95, 80, 55, 10, -5, 120]))",
      "out": "['A', 'B', 'C', 'F', 'Invalid', 'Invalid']\n"
     }
    ]
   }
  ]
 }
};

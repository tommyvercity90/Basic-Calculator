# Basic Calculator

 A simple and responsive calculator built using **HTML5, CSS3, and JavaScript**. This project is designed to practice JavaScript event handling, arithmetic operations, and DOM manipulation.

 ## Features

 - Addition (`+`)
- Subtraction (`−`)
- Multiplication (`×`)
- Division (`÷`)
- Decimal number support
- Clear (`C`) functionality
- Equals (`=`) functionality
- Divide-by-zero error handling
- Responsive calculator interface
- CSS Grid-based button layout
- Does not use `eval()`

 ## Technologies Used

 - **HTML5** – Creates the calculator structure and interface
- **CSS3** – Provides styling, layout, and CSS Grid
- **JavaScript** – Handles button events, calculations, and DOM manipulation

 ## Project Structure

```
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

 ## How to Run

 1. Download or clone this project.
2. Make sure all four files are in the same folder.
3. Open `index.html` in any modern web browser.
4. Use the calculator buttons to perform calculations.

 ## How It Works

 The calculator keeps track of three main values:

 - `currentNumber` – Stores the number currently being entered.
- `previousNumber` – Stores the previous number used in a calculation.
- `selectedOperator` – Stores the selected arithmetic operator.

 When the `=` button is pressed, JavaScript performs the selected operation using a `switch` statement.

 For example:

```
switch (selectedOperator) {
    case "+":
        result = firstNumber + secondNumber;
        break;

    case "-":
        result = firstNumber - secondNumber;
        break;

    case "*":
        result = firstNumber * secondNumber;
        break;

    case "/":
        result = firstNumber / secondNumber;
        break;
}
```

 ## Divide-by-Zero Handling

 The calculator prevents division by zero. If the user tries to divide a number by zero, the display shows:

```
Error
```

 Example:

```
10 ÷ 0 = Error
```

 ## Learning Objectives

 This project helps practice:

 - JavaScript event listeners
- DOM selection and manipulation
- Handling button clicks
- Arithmetic operations
- Variables and state management
- Conditional statements
- `switch` statements
- CSS Grid
- Basic responsive UI design

 ## Future Improvements

 Possible improvements include:

 - Add keyboard support
- Add backspace functionality
- Add percentage (`%`) functionality
- Add positive/negative (`±`) functionality
- Add calculation history
- Improve mobile responsiveness
- Add dark/light theme switching

-  ## License

 This project is created for educational and practice purposes.

 ## License

 This project is created for educational and practice purposes.

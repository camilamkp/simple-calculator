//A simple calculator just using Javascript.

/*
switch(expression) 
{
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/

function calculator(a, b, operator)
{
    switch(operator)
    {
        case '+':
            return a + b;
            //break; // brauche ich eig nicht??? aber warum?
        case '-':
            return a - b;
            
        case '*':
            return a * b;
            
        case '/':
            return a / b;
            
        default:
            return 'xXxXx Err0r - 404';
    }
}
console.log(calculator(2, 3, '+'));
console.log(calculator(2, 3, '*'));
console.log(calculator(5, 3, '-'));
console.log(calculator(9, 3, '/'));
console.log(calculator(-987, 3, '.'));



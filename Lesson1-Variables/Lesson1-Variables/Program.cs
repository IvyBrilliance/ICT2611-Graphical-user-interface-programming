// Hello world:
//Console.WriteLine("Hello world");
//Console.WriteLine(name);

// Declare varibles:
//string name = "Daniel";
//int age = 40;
//double price = 20.50234234;
//bool isStudent = false;
//char grade = 'B';
//decimal money = 23.56m;

// string interpolation:
//name = "Kim";

int value = 12;
int value2 = 2;

// declare a function:
// create a functin that multipies values:
int CalculateMultiple(int value, int value2)
{
    return value * value2;
}

int valueTotal = CalculateMultiple(value, value2);
//Console.WriteLine($"The value total is : {valueTotal}");

// Write a small program:
// This program is going to get the total fees of the student, and  name, and number of months, 
// and it will do calculations:

string name;
int months;
decimal fee;
decimal total;

// Get user input:
Console.WriteLine("Hello, please enter your name.");
name = Console.ReadLine();

Console.WriteLine("How many months will you attend?");
months = int.Parse(Console.ReadLine());

Console.WriteLine("What is the school fees?");
fee = decimal.Parse(Console.ReadLine());

// Execute the calcuation:
decimal calculateTotalFees(decimal fee, int months)
{
    return fee * months;
}
total = calculateTotalFees(fee, months);

Console.WriteLine($"Your name is : {name}, your fee is {fee}, and the number of months" +
    $" are {months}, and int total we get : {total} ");





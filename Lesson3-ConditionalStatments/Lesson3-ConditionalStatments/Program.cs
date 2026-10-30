// Conditional statments:

bool isPublished = false; // true or false
//Console.WriteLine(isPublished);

// if statment:

// if else statement:
if (isPublished)
{
    //Console.WriteLine("IT is published!");
}else
{ // if isPublished is NOT true:
    //Console.WriteLine("It is NOT published");
}

// Different comparison operators:
// == equal to 
// != is not equal to 
// > greater than ...
// < smaller than
// <= smaller or equal than
// >= greater or equal than

//int views = 1500;
//bool isTrue = (views == 1500);
//bool isTrue = (1000 != 1001);
//Console.WriteLine(isTrue);

// Else if statement:
int views = 12;

if (views >= 1000)
{
    //Console.WriteLine("Popular article.");
}else if(views >= 500)
{
    //Console.WriteLine("Growing article.");
}
else if( (views > 100) &&  (views <499) ) // logical operators
{
    //Console.WriteLine("Newer article.");
}
else
{
   // Console.WriteLine("Just released");
}

// Logical operators:
isPublished = true;
bool isDeleted = false;

// && and
// || or
// ! not


if((2 < 3) || (4 == 6))  
{
    Console.WriteLine("Diplay article");
}
else
{
    Console.WriteLine("Article unavailabe");
}








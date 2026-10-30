// Arrays:

// marks:

//Console.WriteLine(marks[0]);
//Console.WriteLine(marks[1]);

// Blog website:
// storing articles...
string[] articles = new string[3];

// add elements inside of our array:
articles[0] = "Learning c#";
articles[1] = "Understanding APIs";
articles[2] = "Connecting to database.";
//Console.WriteLine(articles[1]);

// Get the length of the array:
//Console.WriteLine(articles.Length);

// Iterate through teh arrays using a for loop:
for (int i = 0; i < articles.Length; i++)
{
    Console.WriteLine(articles[i]);
}

// ForEach loop:
foreach (string article in articles)
{
    Console.WriteLine(article);
}

// Sorting an array:
int[] marks = { 91, 66, 996, 87, };
Array.Sort(marks);
Array.Reverse(marks);
Console.WriteLine(marks[0]);

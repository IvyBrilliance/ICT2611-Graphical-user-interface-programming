// Strings:

string title = "Hello world";

//Console.WriteLine(title);

// length of string:
//Console.WriteLine(title.Length);

// Access individual charectors:
//Console.WriteLine(title[1]);

// Convert strings to uppercase and lowercase:
string upperCaseString = title.ToUpper();
string lowerCaseString = title.ToLower();

//Console.WriteLine(lowerCaseString);

// Removing unnecessary spaces:
string titleWithSpaces = "   Learning C#   ";
//Console.WriteLine(titleWithSpaces);

string titleWithoutSpaces = titleWithSpaces.Trim();
//Console.WriteLine(titleWithoutSpaces);

// Searching within strings:
title = "Understanding classes in c#";
bool containsTheLetter = title.Contains( "u".ToUpper() );
//Console.WriteLine(containsTheLetter);

// StartsWith() & EndsWith();
string filename = "article.txt";
bool startsWithIt = filename.StartsWith("art");
bool endsWithIt = filename.EndsWith("txt");
//Console.WriteLine(endsWithIt);

// IndexOf():
// Index of returns the position where a substing first appears.
title = "Hello";
int position = title.IndexOf("l");
//Console.WriteLine(position);

// Extracting substrings:
string text = "The quick fox";
string result = text.Substring(4,5);

Console.WriteLine(result);







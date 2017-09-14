var questionsOpt1 = [];
var questionsOpt2 = [];

function addQuestions(valueQuestion, arrChoices, valueAnswer, option) {

	var quest = { 
		question: valueQuestion,
	    choices: {
    		a: arrChoices[0],
    		b: arrChoices[1],
    		c: arrChoices[2],
    		d: arrChoices[3]
    	},
	    correctAnswer: valueAnswer
	};

  	if (option == 1) {
  		questionsOpt1.push(quest)
  	} else {
		questionsOpt2.push(quest)
  	}
}

// Question about C Programming
addQuestions("We can insert pre written code in a C program by using", 
	["#read","#get","#include", "#put"], "c", 1);

addQuestions("The first expression in a for loop is", 
	["Step value of loop","Value of the counter variable","Any of above", "None of above"], "b", 1);

addQuestions("Break statement is used for", 
	["Quit a program","Quit the current iteration","Both of above", "None of above"], "b", 1);

addQuestions("Continue statement used for", 
	["To continue to the next line of code","To stop the current iteration and begin the next iteration from the beginning","To handle run time error", "None of above"], "b", 1);

addQuestions("Due to variable scope in c", 
	["Variables created in a function cannot be used another function","Variables created in a function can be used in another function","Variables created in a function can only be used in the main function", "None of above"], "a", 1);

addQuestions("Difference between calloc() and malloc()", 
	["calloc() takes a single argument while malloc() needs two arguments","malloc() takes a single argument while calloc() needs two arguments","malloc() initializes the allocated memory to ZERO", "calloc() initializes the allocated memory to NULL"], "b", 1);

addQuestions("Which of the following below is/are valid C keywords", 
	["integer","int","null", "none of above"], "b", 1);

addQuestions("Total number of keywords in C are", 
	["30","32","48", "132"], "b", 1);

addQuestions("rand() function returns", 
	["float value","integer value","any type", "none of above"], "b", 1);

addQuestions("The compiler in C ignores all text till the end of line using", 
	["//","/","*/", "none of above"], "a", 1);

addQuestions("Which operator in c can't be overloaded", 
	["%","+","::", "-"], "a", 1);

addQuestions("What is the purpose of getc()", 
	["read a character from STDIN","read a character from a file","read all file", "read file random"], "b", 1);

addQuestions("Difference between structure and union is", 
	["We can define functions within structures but not within a union","We can define functions within union but not within a structure","The way memory is allocated", "There is no difference"], "c", 1);

addQuestions("What among following is true about stack", 
	["stack cannot reuse its memory","all elements are of different datatypes","all operation done at one end", "none of above"], "c", 1);

addQuestions("A member is a", 
	["Variable in a structure","Datatype of structure","Structure pointer", "None of above"], "a", 1);

addQuestions("Structures can be used", 
	["to hold different datatypes","have pointers to structures","to assign to one another", "all of above"], "d", 1);

addQuestions("UML meaning is", 
	["Unique modeling language","Unified modeling language","Unified modern language", "Unified master laqnguage"], "b", 1);

addQuestions("printf() belongs to which library of c", 
	["stdlib.h","stdio.h","stdout.h", "stdoutput.h"], "b", 1);

addQuestions("A variable in c", 
	["must have a valid datatype","can't have a name same as keyword","must have a name starting with a character", "All of above"], "d", 1);

addQuestions("What is correct order of precedence in C", 
	["Addition, Division, Modulus","Addition, Modulus, Division","Multiplication, Substration, Modulus", "Modulus, Multiplication, Substration"], "d", 1);


// Question about C++ Programming
addQuestions("All members of class have which access to its members", 
	["private","public","protected", "depends"], "a", 2);

addQuestions("Constructor is", 
	["A class automatically called whenever a new object of this class is created","A class automatically called whenever a new object of this class is destroyed","A function automatically called whenever a new object of this class is created", "A function automatically called whenever a new object of this class is destroyed"], "c", 2);

addQuestions("Declaring pointer more than one can cause", 
	["Trap","abort a program","error", "none of above"], "a", 2);

addQuestions("Meaning of deed copy is", 
	["A deep copy creates a copy of the dynamically allocated objects too","A deep copy just copies the values of the data as they are","A deep copy creates a copy of the statically allocated objects too", "Both A and C"], "a", 2);

addQuestions("Which is not a correct variable type", 
	["float","int","double", "real"], "d", 2);

addQuestions("Difference between static and dynamic memory allocation is", 
	["In static memory allocation memory to be allocated in preknown","In dynamic memory allocation memory to be allocated in preknown","There is no differnece", "Not exact difference is mentioned"], "a", 2);

addQuestions("Expression x.y represents as", 
	["member x of object y","member y of object x","member y of object pointed by x", "all of above"], "b", 2);

addQuestions("Which of the following cannot be inherited from the base class", 
	["Constructor","Friend","Both A and B cannot be inherited", "Both A and B can be inherited"], "c", 2);

addQuestions("Cout is declared in the _____ standard file within the std namespace", 
	["outstream","stdin","iostream", "None of above"], "c", 2);

addQuestions("Dereference operator is also called as", 
	["pointer","Reference operator","Offset operator", "Deoffset operator"], "c", 2);

addQuestions("Which class has only one unique value for all the objects of class", 
	["this","friend","static", "none of above"], "c", 2);

addQuestions("Which of the following functions below can be used Allocate space for array in memory", 
	["calloc()","malloc()","realloc()", "All of above"], "a", 2);

addQuestions("Which type of variables can be referred from anywhere in the c++ code", 
	["All variables","Local variables","Universal variables", "Global variables"], "d", 2);

addQuestions("What is the value of sizeof(char)", 
	["1","2","4", "8"], "a", 2);

addQuestions("If value has not type, then the pointer pointing to this value will be known as", 
	["Empty pointer","Null pointer","Void pointer", "None of above"], "c", 2);

addQuestions("Which arithmetic operation can be done in pointer", 
	["Multiplication","Division","Addition", "None of above"], "c", 2);

addQuestions("Inline functions are invoked at", 
	["Run time","Compile time","Debug time", "None of above"], "b", 2);

addQuestions("What is the size of int datatype for 32 bit system", 
	["1 byte","2 byte","4 byte", "8 byte"], "c", 2);

addQuestions("How we define our name for constants", 
	["#constant","#define","#define_constant", "#constant_define"], "b", 2);

addQuestions("C++ programs must contain", 
	["start()","system()","main()", "program()"], "c", 2);

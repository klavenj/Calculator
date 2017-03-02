// JavaScript Document

//Global Variables 
var firstNum = " " , //Holds the first number pressed
	secondNum = " ", //holds the second number pressed
	operation = " ", //holds the basic math operation + - x /
	total = " ";  //holds the answer
	
	
//First function will be to clear content
function Clear()
{
	firstNum = " " ; 
	secondNum = " "; 
	operation = " "; 
	total = " ";
	document.getElementById().value;
	
	
}
//This function simply calls the previous "clear()" function and we will load it when the page loads.
//Init function
function Init()    
{
	Clear();
}

//This function will be activated when the user clicks any of the numbered keys on the calculator. It retrieves the button element
 function add(val) { 
 		
		//This will add the elements and put it to the screen
		document.getElementById('screen').value += val;
		
}

//This will add solution to screen 
function solution(val) { 

		document.getElementById('screen').value = val 
}

//This will do the math of the elements
 function e() { 
 		
		//this will catch the error if any 
		try {   
		
				//This will evaluate the strings from the buttons
			    solution(eval(document.getElementById('screen').value)) 
	
		} catch(e) { 
			 s('Error') 
    } 
}

"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let D;
    let x1;
    let x2;
    let x;
    D = b*b-4*a*c;
    if (D < 0) {
    	x = [];
    }
    else if (D == 0) {
    	x1 = (-b+Math.sqrt(D))/(2*a);
    	x = [x1];
    }

    else if (D > 0) {
    	x1 = (-b+Math.sqrt(D))/(2*a);
    	x2 = (-b-Math.sqrt(D))/(2*a);
    	x = [x1, x2];
      }
 
    // return x;
      return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let result = 0;
    let averageMark;
    if (marks.length == 0) {
    	averageMark = 0;
    	return averageMark;
    }
  	if (marks.length >= 5) {
  		 console.log("Количество оценок больше 5!");
  		 marks = marks.slice (0, 5);
  		 }  
	  for (let i = 0; i < marks.length; i++) {
	     result = result + marks[i];
	    	}
	  averageMark = result / marks.length; 

    return averageMark;
    
}

function askDrink(name,dateOfBirthday){
	// код для задачи №3 писать здесь
	let curDate;
	let age;
	let result;
	curDate = new Date ();
	age = curDate.getFullYear() - dateOfBirthday.getFullYear();
	
	result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	return result;
}
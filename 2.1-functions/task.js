"use strict";
////////////////////////////////////////////////////////////////// task 1 - begin //////////////////////////////////////////////////////////////////
function getSolutions(a, b, c) {
	let D = b*b - 4*a*c;
	if (D < 0) {
		return {D, roots: []};
	}
	else if (D == 0) {
		let x1 = -b/2*a;
		return {D, roots: [x1]};
		}
	else if (D > 0) {
		let x1 = (-b + Math.sqrt(D))/2*a;
		let x2 = (-b - Math.sqrt(D))/2*a;
		return {D, roots: [x1, x2]};
	}
}

function getSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if(result.D < 0) {
		console.log("Уравнение не имеет вещественных корней");
	}
	else if(result.D == 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	}
	else if(result.D > 0) {
		console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

getSolutionsMessage(1, 2, 3);
getSolutionsMessage(7, 20, -3);
getSolutionsMessage(2, 4, 2);
////////////////////////////////////////////////////////////////// task 1 - end //////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////// task 2 - begin //////////////////////////////////////////////////////////////////

function getAverageMark(marks) {
	if (marks.length == 0)
		{
			return 0;
		}
	else {
		let avgSum = 0;
			for (let mark of marks) {
				avgSum += mark;
			}
			return avgSum / marks.length;
		}
}

function getAverageScore(data) {
	let disciplines = {};
	let avgDisciplines = [];
	let disEmpty = 0;
	for (let discipline in data)
	{
		if (data[discipline].length == 0) {
			disEmpty = 1;
		}
		
		disciplines[discipline] = (getAverageMark(data[discipline])); 
		avgDisciplines.push(disciplines[discipline]);
		
	}

	if (disEmpty == 1) {
		disciplines.average = 0;
	}
	else {	
	disciplines.average = (getAverageMark(avgDisciplines));
	}
	return disciplines;
}

getAverageScore({algebra: [2,4,5,2,3,4], 
				geometry: [2,4,5], 
				russian: [3,3,4,5], 
				physics: [5, 5], 
				music: [2, 2, 6], 
				english: [4, 4, 3], 
				poetry: [5, 3, 4], 
				chemistry: [2], 
				french: [4, 4]});

getAverageScore({algebra: [], 
				geometry: [], 
				russian: [], 
				physics: [], 
				music: [], 
				english: [], 
				poetry: [], 
				chemistry: [], 
				french: []});

////////////////////////////////////////////////////////////////// task 2 - end //////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////// task 3 - begin //////////////////////////////////////////////////////////////////

function getDecodedValue(secret) {
	if (secret == 0) {
		return "Родриго";
	}

	else if (secret == 1) {
		return "Эмильо"
	}
}



function getPersonData(secretData) {
	let decoder = {};
	for(let key in secretData) {

			if(key == "aaa") {
				decoder.firstName = getDecodedValue(secretData[key]);
		
			}
			if (key =="bbb") {
				decoder.lastName = getDecodedValue(secretData[key]);
			}
		}

	return decoder;
}


console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));


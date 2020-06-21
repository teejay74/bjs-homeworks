"use strict";

String.prototype.isPalindrome = function() {
	// код для задачи №1 писать здесь
    // return averageMark

	let checkText = this.replace(/\s+/g,'').toLowerCase();
	let checkTextRevers = checkText.split('').reverse().join('');

	if(checkText === checkTextRevers) {
		return true;
	}
	else {
		return false;
	}
}


function getAverageMark(marks) {
	// код для задачи №2 писать здесь
    // return averageMark
    let sumMark = 0;
    for (let mark of marks) {
    	sumMark += mark;
    }
    let averageMark = Math.round(sumMark / marks.length);
    return averageMark;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
	let now = +new Date();
	birthday = +new Date(birthday);
	let diff = now - birthday;
	let age = diff / (24 * 3600 * 365.25 * 1000);
		if (age >= 18) {
			return true;
		}
		else {
			return false;
		}

	console.log(birthday);

	 }



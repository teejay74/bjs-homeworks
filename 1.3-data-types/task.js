"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
   let msg = [];
   if(isNaN(percent)) {
   		msg.push(`Параметр "Процентная ставка" содержит неправильное значение ${window.percent.value}`);
  	   }
   if(isNaN(contribution)) {
   		msg.push(`Параметр "Начальный взнос" содержит неправильное значение ${window.contribution.value}`);
  	  }

    if(isNaN(amount)) {
   		msg.push(`Параметр "Общая стоимость" содержит неправильное значение ${window.amount.value}`);
  	  }
  	if(isNaN(date)) {
   		msg.push(`Параметр "Срок ипотеки" содержит неправильное значение ${window.date.value}`);
  	  }
  	if(msg.length != 0) {
  		return msg;
  	}


  
   //Не забывайте, что вы должны работать с числами: если параметр функции будет строкой, то попытайтесь преобразовать в число. 
   //Во всех остальных случаях возвращайте строку: “Параметр <название параметра> содержит неправильное значение <значение параметра>”.

    let S = amount - contribution;
    let P = (percent / 100) / 12;
    let curDate = new Date();
  	let n = date.getMonth() - curDate.getMonth() + (12 * (date.getFullYear() - curDate.getFullYear()));
  	let totalAmount = S*(P+P/(((1+P)**n)-1))*n;
	return totalAmount.toFixed(2);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}
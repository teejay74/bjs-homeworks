"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  let msg = [];
  if (isNaN(percent)) {
    msg.push(
      `Параметр "Процентная ставка" содержит неправильное значение ${window.percent.value}`
    );
  }
  if (isNaN(contribution)) {
    msg.push(
      `Параметр "Начальный взнос" содержит неправильное значение ${window.contribution.value}`
    );
  }

  if (isNaN(amount)) {
    msg.push(
      `Параметр "Общая стоимость" содержит неправильное значение ${window.amount.value}`
    );
  }
  if (isNaN(date)) {
    msg.push(
      `Параметр "Срок ипотеки" содержит неправильное значение ${window.date.value}`
    );
  }
  if (msg.length != 0) {
    return msg;
  }

  let S = amount - contribution;
  let P = percent / 100 / 12;
  let curDate = new Date();
  let n =
    date.getMonth() -
    curDate.getMonth() +
    12 * (date.getFullYear() - curDate.getFullYear());
  let totalAmount = S * (P + P / ((1 + P) ** n - 1)) * n;
  if (totalAmount == 0) {
    totalAmount = Math.trunc(totalAmount);
  } else {
    totalAmount = +totalAmount.toFixed(2);
  }
  return totalAmount;
}

function getGreeting(name) {
  let greeting;
  let greetingName = name;
  if (greetingName == "" || greetingName == undefined) {
    greetingName = "Аноним";
  }
  // код для задачи №2 писать здесь
  console.log(greetingName);
  return (greeting = `Привет, мир! Меня зовут ${greetingName}`);
}

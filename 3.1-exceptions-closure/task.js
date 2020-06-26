"use strict";
const parseCount = (parNum) => {
	let result = parseInt(parNum);
	if(isNaN(result)) throw new Error("Невалидное значение");
	return result;
}

const validateCount = (valNum) => {
		try {
		return parseCount(valNum);
		}
		catch(e) {
		return e;
		}
	
}



////////////////////////////////////////Task 2 - begin
class Triangle {
	constructor(a, b ,c) {
		this.a = a;
		this.b = b;
		this.c = c; 
		if((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < this.a) throw new Error("Треугольник с такими сторонами не существует");
		
	}
	getPerimeter() {
		let P = this.a + this.b + this.c;
		return P;
	}

	getArea() {
		let p = (this.a + this.b + this.c) / 2;
		let S = +Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
		return S;
	}
	
}

class TriangleError {
	constructor(msg) {
		this.msg = msg;
	}

	getPerimeter() {
		return this.msg;
	}

	getArea() {
		return this.msg;
	}


}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}

	catch(e) 
	{
		let msg = "Ошибка! Неправильный треугольник";
		return new TriangleError(msg);
		
	}

}




//Ошибка! Треугольник не существует

//triangle.getPerimeter()
//triangle.getArea()
//В случае перехвата исключения возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".

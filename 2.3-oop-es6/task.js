"use strict";

///////////////////////////////////////Task 1 - begin////////////////////////////////////////////////
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    return (this.state = this.state * 1.5);
  }

  set state(n) {
    if (n < 0) {
      this._state = 0;
    } else if (n > 100) {
      this._state = 100;
    } else {
      this._state = n;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100
//100

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
console.log(picknick);

///////////////////////////////////////Task 2 - end////////////////////////////////////////////////

///////////////////////////////////////Task 2 - begin////////////////////////////////////////////////

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state >= 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        return this.books.splice(i, 1)[0];
      }
     
    }
    return null;
    
  }
}

///////////////////////////////////////Task 2 - end////////////////////////////////////////////////

///////////////////////////////////////Task 3 - begin////////////////////////////////////////////////
class StudentLog {
  constructor(studentname) {
    this.studentname = studentname;
    this.gradeBook = {};
  }

  getName() {
    return this.studentname;
  }

  addGrade(grade, subject) {
    let checkMark = false;
    if (grade > 0 && grade <= 5) {
      checkMark = true;
    } else {
      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету ${subject}. Допускаются только числа от 1 до 5.`
      );
    }
    if (typeof this.gradeBook[subject] == "undefined") {
      this.gradeBook[subject] = [];
      if (checkMark) {
        this.gradeBook[subject].push(grade);
      }
    } else {
      if (checkMark) {
        this.gradeBook[subject].push(grade);
      }
    }

    return this.gradeBook[subject].length;
	}

	getAverageBySubject(subject) {

		if (typeof this.gradeBook[subject] == "undefined") {
			return 0;
		}
		else {
			let sumAvg = 0;
			for(let mark of this.gradeBook[subject]) 
				{
					sumAvg += mark;
				}
			return sumAvg / this.gradeBook[subject].length;
		}

	}

	getTotalAverage() {
		let sumAvg = 0;
		let counter = 0;
		for(let subj in this.gradeBook) {
			for(let mark of this.gradeBook[subj]) {
				counter++;
				sumAvg += mark;
			}

		}
		if(counter == 0) {
			return 0;
		}
		else {
			return sumAvg / counter;
		}
	}


}

///////////////////////////////////////Task 3 - end////////////////////////////////////////////////

const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(library.findBookBy("name", "Властелин колец")); //null

console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Мурзилка");

console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

const log = new StudentLog("Олег Никифоров");
console.log(log.getName());
// console.log(log.addGrade(3, "algebra"));
console.log(log.addGrade("отлично!", "math"));
console.log(log.addGrade(4, "algebra"));
console.log(log.addGrade(5, "geometry"));
console.log(log.addGrade(25, "geometry"));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage());



// const publibrary = new Library("Публичная Библиотека");
// publibrary.addBook(new DetectiveBook("Мальтийский Сокол", "Дэшел Хэммет", 1930, 458));
// publibrary.addBook(new FantasticBook("Стивен Кинг", "Сияние", 1977, 668));
// publibrary.addBook(new NovelBook("Фрэнк Перетти", "Пронзая тьму", 1989, 124));
// publibrary.addBook(new Magazine("CHIP", 1919, 30));



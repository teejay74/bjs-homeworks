"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) throw new Error("id не определен");

    if (this.alarmCollection.find((alarmCollection) => alarmCollection.id === id)
    ) {console.error("Такой id уже существует!");
    } else {
      this.alarmCollection.push({ time, callback, id });
    }
  }

  removeClock(id) {
    const removedID = this.alarmCollection.findIndex(
      (alarmCollection) => alarmCollection.id === id
    );
    if (removedID == -1) {
      return false;
    }
    {
      this.alarmCollection.splice(removedID, 1);
      return true;
    }
  }

  getCurrentFormattedTime() {
    let now = new Date();
    let HH = now.getHours();
    if (HH < 10) HH = "0" + HH;
    let MM = now.getMinutes();
    if (MM < 10) MM = "0" + MM;
    return `${HH}:${MM}`;
  }

  start() {
    const cheackClock = (timer) => {
      if (this.getCurrentFormattedTime() === timer.time) {
        timer.callback();
      }
    };
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((element) => cheackClock(element));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(
      `Печать всех будильников в количестве: ${this.alarmCollection.length}`
    );
    return this.alarmCollection.forEach((element) =>
      console.log(`Будильник №${element.id} заведен на ${element.time}`)
    );
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.getCurrentFormattedTime();
  phoneAlarm.addClock(
    phoneAlarm.getCurrentFormattedTime(),
    () => console.log("Пора вставать"),
    1);
  phoneAlarm.addClock(
    "22:01",
    () => {
      console.log("Давай, вставай уже!");
      phoneAlarm.removeClock(2);
    },
    2);
  phoneAlarm.addClock(
    "22:02",
    () => {
      console.log("Вставай, а то проспишь!!");
      phoneAlarm.clearAlarms();
      phoneAlarm.printAlarms();
    },
    3);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

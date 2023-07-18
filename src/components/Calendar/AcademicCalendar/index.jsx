import React, { useState } from "react";

import styles from "./index.module.css";
import { eventsData, days } from "./constant";

const AcademicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const todayFormatted = today.toISOString().slice(0, 10);

  // Dummy event data
  const [events, setEvents] = useState(eventsData);

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDayIndex = new Date(year, month, numDays).getDay();

    const calendarDays = [];

    const totalCells = 35; // Total number of cells in a 5x7 grid

    // Calculate the number of empty cells at the beginning of the month
    const startEmptyCells = firstDayIndex;

    // Calculate the number of empty cells at the end of the month
    const endEmptyCells = totalCells - (startEmptyCells + numDays);

    // Add empty cells at the beginning of the month
    for (let i = 0; i < startEmptyCells; i++) {
      calendarDays.push(
        <div
          key={`empty-start-${i}`}
          className={`${styles["calendar-day"]} ${styles.empty}`}
        >
          {i + 1}
        </div>
      );
    }

    // Add date cards for each day of the month
    for (let i = 1; i <= numDays; i++) {
      const date = new Date(year, month, i + 1);
      const formattedDate = date.toISOString().slice(0, 10);

      const cellDate = new Date(year, month, i);
      const formattedCellDate = cellDate.toISOString().slice(0, 10);

      const dateEvents = events.filter((event) => event.date === formattedDate);

      const isToday = todayFormatted === formattedDate;

      console.log("isToday: ", todayFormatted);

      calendarDays.push(
        <div key={i} className={`${styles["calendar-day"]}`}>
          <div
            className={`t-1 fw-bold ${styles.date} ${isToday && styles.active}`}
          >
            <span>{i}</span>
          </div>
          {/* Display events for the day */}
          {dateEvents.map((event) => (
            <div key={event.id} className={`${styles.event}`}>
              <span> {event.event}</span>
            </div>
          ))}
        </div>
      );
    }

    // Add empty cells at the end of the month
    for (let i = 1; i <= endEmptyCells; i++) {
      calendarDays.push(
        <div
          key={`empty-end-${i}`}
          className={`${styles["calendar-day"]} ${styles.empty}`}
        >
          {i}
        </div>
      );
    }

    console.log("lastDayIndex: ", lastDayIndex);
    console.log(calendarDays);
    return calendarDays;
  };

  return (
    <div className={`${styles.container} section-padding my-5 custom-calendar`}>
      <div className={`${styles["calendar-header"]}`}>
        <div className={`${styles["month-year"]}`}>
          {currentDate
            .toLocaleString("default", {
              month: "long",
              year: "numeric",
            })
            .split(" ")
            .map((item) => (
              <span>{item}</span>
            ))}
        </div>
      </div>
      <div className={`${styles.days} d-flex`}>
        {days.map((item, i) => {
          return (
            <span className="text-dark t-2 fw-medium" key={i}>
              {item}
            </span>
          );
        })}
      </div>
      <div className={`${styles["calendar-grid"]}`}>{renderCalendar()}</div>
      <div className={`${styles["calendar-header"]}`}>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
    </div>
  );
};

export default AcademicCalendar;

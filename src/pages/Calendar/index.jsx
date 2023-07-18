import React from "react";

import Header from "../../components/partials/Header";
import ContactBanner from "../../components/partials/ContactBanner";
import AcademicCalendar from "../../components/Calendar/AcademicCalendar";

const Calendar = () => {
  return (
    <>
      <Header title={"Academic Calendar"} />
      <AcademicCalendar />
      <ContactBanner />
    </>
  );
};

export default Calendar;

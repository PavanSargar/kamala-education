import React from "react";

import Header from "../../components/partials/Header";
import ContactBanner from "../../components/partials/ContactBanner";
import Documents from "../../components/Resources/Documents";

const Resources = () => {
  return (
    <>
      <Header title={"RESOURCES"} />
      <Documents />
      <ContactBanner />
    </>
  );
};

export default Resources;

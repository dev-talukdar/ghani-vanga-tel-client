import React from "react";
import Service from "../components/Home/Service";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Manufacture from "../components/Home/Manufacture";
import Partner from "../components/Home/Partner";
import WeFocus from "../components/Home/WeFocus";
import Testimonial from "../components/Home/Testimonial";
import OurApproach from "../components/Home/OurApproach";
import TeamMember from "../components/Home/TeamMember";
import FreeConsultation from "../components/Home/FreeConsultation";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <OurApproach />
      <WeFocus />
      <Testimonial />
      <Manufacture />
      <TeamMember />
      <FreeConsultation />
      <Partner />
    </div>
  );
};

export default MainPage;

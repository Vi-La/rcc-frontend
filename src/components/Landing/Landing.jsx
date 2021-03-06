import React from "react";
import SlideShow from "../SlideShow/SlideShow";
import Mission from "../Mission/Mission";
import Community from "../Community/Community";
import Country from "../Navigation/Contacts/Contacts";
import Testmonials from "../Testmonials/Testmonials";
import Signup from "../ChritianLife/ChritianLife";
import Team from "../Team/Team";
import Contactus from "../Contactus/Contactus";
import Footer from "../Footer/Footer";
import Layout from "../../hoc/Layout/Layout";

const Landing = () => {
  return (
    <div>
      <Country />
      <Layout />
      <SlideShow />
      <Mission />
      <Community />
      <Testmonials />
      <Signup />
      <Team />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Landing;

import React from "react";
import FormYourSerach from "../organisms/FormYourSerach";
import { HomePageLayout } from "../templates/HomePageLayout";
import HeaderApp from "../organisms/HeaderApp";

const Home = () => {
  return (
    <HomePageLayout>
      <HeaderApp />
      <FormYourSerach />
    </HomePageLayout>
  );
};

export default Home;

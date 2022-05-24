import React from "react";
import ImageContainer from "../components/ImageContainer";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import { CustomThemeProvider } from "../core/theme/CustomThemeProvider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <CustomThemeProvider>
        <OrderForm />
      </CustomThemeProvider>
    </div>
  );
};

export default Home;

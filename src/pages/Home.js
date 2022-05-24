import React from "react";
import ImageContainer from "../components/ImageContainer";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import { CustomThemeProvider } from "../core/theme/CustomThemeProvider";
import ErrorBoundary from "../core/util/Error/ErrorBoundary";
import OrderView from "../components/OrderView";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <CustomThemeProvider>
        <OrderForm />
      </CustomThemeProvider>
      <ErrorBoundary>
        <OrderView />
      </ErrorBoundary>
    </div>
  );
};

export default Home;

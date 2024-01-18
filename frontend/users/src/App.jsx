import React from "react";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import Profile from './pages/Profile/Profile';
import ProfileLayout from "./layouts/ProfileLayout";
import Buying from "./pages/Profile/Buying";
import Products from './pages/Products/Index';
import Details from './pages/Detail/Index';
import { AppProvider } from "./context/context";

function App() {
  return (
    <>
      <AppProvider>
        <Layout />
      </AppProvider>
      
    </>
  );
}

export default App;

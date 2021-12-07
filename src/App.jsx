import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";
import Layout from "./layout";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

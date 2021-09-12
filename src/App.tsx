import * as React from "react";
import { GenerateFud } from "./pages/GenerateFud";
import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <Layout>
      <GenerateFud />
    </Layout>
  );
};

import React from "react";
import "./App.css";

import { DataProvider } from "./DataProvider";
import { Layout } from "../Layout";

function App() {
  return (
    <div>
      <DataProvider>{(data) => <Layout data={data} />}</DataProvider>
    </div>
  );
}

export default App;

import React from "react";
import { DataProvider } from "./App/DataProvider";

import { ItemPage } from "./ItemPage";

export const Body = ({ data }: { data: DataProvider }) => {
  // Router would exist here
  return <ItemPage data={data} />;
};

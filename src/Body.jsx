import React from "react";

import { ItemPage } from "./ItemPage";

export const Body = ({ data }) => {
  // Router would exist here
  return <ItemPage data={data} />;
};

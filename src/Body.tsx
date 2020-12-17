import React from "react";
import { DataProvider } from "./App/DataProvider";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { ItemPage } from "./ItemPage";

export const Body = ({ data }: { data: DataProvider }) => {
  // Router would exist here
  return (
    <DndProvider backend={HTML5Backend}>
      <ItemPage data={data} />
    </DndProvider>
  );
};

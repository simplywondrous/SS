import React from "react";

import { makeStyles } from "@material-ui/styles";

import { ItemDrawer } from "./ItemDrawer/ItemDrawer";
import { DataProvider } from "../App/DataProvider";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    marginRight: "10px",
  },
  header: {
    height: "75px",
    display: "flex",
    backgroundColor: "green",
  },
  addBtn: {
    marginLeft: "auto",
  },
  display: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export const ItemPage = ({ data }: { data: DataProvider }) => {
  const { root, header, addBtn, display } = useStyles();

  return (
    <div className={root}>
      <div className={header}>
        <div className={addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={display}>
        {/* Populate with drawers, with unsorted last */}
        {data.drawers
          .sort((a, b) => a.position - b.position)
          .map((drawer) => (
            <ItemDrawer drawer={drawer} />
          ))}
      </div>
    </div>
  );
};

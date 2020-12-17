import React from "react";

import { makeStyles } from "@material-ui/styles";

import { Drawer } from "./Drawer";

const useStyles = makeStyles(() => ({
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
}));

export const ItemPage = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={classes.display}>
        {/* Populate with drawers, with unsorted last */}
        {data.drawers
          .sort((a, b) => a.position - b.position)
          .map((drawer) => {
            return (
              <>
                <Drawer drawer={drawer} onDragStart={handleDragStart} />
              </>
            );
          })}
      </div>
    </div>
  );
};

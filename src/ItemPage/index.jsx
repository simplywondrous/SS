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

export const ItemPage = ({ data, cursor }) => {
  const classes = useStyles();
  // console.log(data.drawers)

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("Over")
    e.dataTransfer.dropEffect = "onDragOver";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const target = e.dataTransfer.getData("text/plain");
    // Instead of below, would then do placing drawer logic
    console.log("Dropped!", target);
    // Update drawer position in db
    // data.drawers.findIndex(); // Wouldn't need this step if include position in HTML element
  };

  const DrawerDropZone = () => (
    <div
      style={{
        padding: "15px",
        backgroundColor: "red",
        height: "100px",
        width: "100px",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    />
  );

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={classes.display}>
        {/* Populate with drawers, with unsorted last */}
        <DrawerDropZone />
        {data.drawers
          .sort((a, b) => a.position - b.position)
          .map((drawer) => {
            return (
              <>
                <Drawer drawer={drawer} cursor={cursor} />
                <DrawerDropZone />
              </>
            );
          })}
      </div>
    </div>
  );
};

import React, { useState } from "react";

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
  const [draggedDrawer, setDraggedDrawer] = useState(null);
  const classes = useStyles();

  const handleDragStart = (drawer) => {
    // Hide current drawer
    // drop zone expands to size of drawer on hover over
    // offsetWidth and offsetHeight of node
    setDraggedDrawer(drawer)
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("Over")
    e.dataTransfer.dropEffect = "onDragOver";
  };

  const handleDragDrop = (e) => {
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
        height: draggedDrawer.offsetHeight,
        width: draggedDrawer.offsetWidth,
      }}
      onDrop={handleDragDrop}
      onDragOver={handleDragOver}
    />
  )

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={classes.display}>
        {/* Populate with drawers, with unsorted last */}
        {draggedDrawer && <DrawerDropZone />}
        {data.drawers
          .sort((a, b) => a.position - b.position)
          .map((drawer) => {
            return (
              <>
                {!draggedDrawer && <Drawer drawer={drawer} onDragStart={handleDragStart} />}
                {draggedDrawer && <DrawerDropZone />}
              </>
            );
          })}
      </div>
    </div>
  );
};

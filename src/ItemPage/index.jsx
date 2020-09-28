import React from "react";

import { makeStyles } from "@material-ui/styles";

import { Drawer } from "./Drawer";

const useStyles = makeStyles((theme) => ({
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
  // console.log(data.drawers)

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={classes.display}>
        {/* Populate with drawers, with unsorted last */}
        {data.drawers.map((drawer) => {
          return (
            <DrawerDropZone>
              <Drawer drawer={drawer} />
            </DrawerDropZone>
          );
        })}
      </div>
    </div>
  );
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "onDragOver";
};

const handleDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  // Instead of below, would then render that drawer
  console.log("Dropped!");
  e.target.appendChild(document.getElementById(data));
};

const DrawerDropZone = ({ children }) => (
  <div
    styles={{ padding: "15px", backgroundColor: "red" }}
    ondrop={handleDrop}
    ondragover={handleDragOver}
  >
    {children}
  </div>
);

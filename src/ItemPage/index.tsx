import React, { useCallback, useState } from "react";

import { makeStyles } from "@material-ui/styles";

import { ItemDrawer } from "./ItemDrawer/ItemDrawer";
import { Drawer } from "../App/types";
import { handleDragItemReorder } from "./drag-helpers";

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

export const ItemPage = ({ drawers: data }: { drawers: Drawer[] }) => {
  const [drawers, setDrawers] = useState(data);

  const handleDrawerDrag = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newDrawers = handleDragItemReorder(drawers, dragIndex, hoverIndex);
      setDrawers(newDrawers);
    },
    [drawers]
  );

  const { root, header, addBtn, display } = useStyles();
  return (
    <div className={root}>
      <div className={header}>
        <div className={addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={display}>
        {/* TODO: Populate with drawers, with unsorted last */}
        {drawers.map((drawer, index) => (
          <ItemDrawer
            drawer={drawer}
            onDrag={handleDrawerDrag}
            key={drawer.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

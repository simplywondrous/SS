import React, { useCallback, useState } from "react";

import { makeStyles } from "@material-ui/styles";

import { ItemDrawer } from "./ItemDrawer/ItemDrawer";
import { DataProvider } from "../App/DataProvider";
import { Drawer } from "../App/types";

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

const date = new Date();
const testData = [
  {
    id: "drawer-one",
    position: 0,
    name: "Drawer 1",
    items: [
      {
        id: "an-id",
        user: "User",
        name: "Name",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer",
        notes: "Notes",
      },
      {
        id: "an-id-2",
        user: "User",
        name: "Name 2",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer",
        notes: "Notes",
      },
      {
        id: "an-id-4",
        user: "User",
        name: "Name 4",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer",
        notes: "Notes",
      },
      {
        id: "an-id-5",
        user: "User",
        name: "Name 5",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer",
        notes: "Notes",
      },
      {
        id: "an-id-6",
        user: "User",
        name: "Name 6",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer",
        notes: "Notes",
      },
    ],
  },
  {
    id: "drawer-two",
    position: 1,
    name: "Drawer 2",
    items: [
      {
        id: "an-id-3",
        user: "User",
        name: "Name 3",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer 2",
        notes: "Notes",
      },
    ],
  },
  {
    id: "drawer-three",
    position: 2,
    name: "Drawer 3",
    items: [
      {
        id: "an-id-3",
        user: "User",
        name: "Name 3",
        image: undefined,
        brand: "Brand",
        year: "Year",
        expiration: date,
        openedOn: date,
        finishedOn: date,
        drawer: "Drawer 2",
        notes: "Notes",
      },
    ],
  },
];

export const ItemPage = ({ data }: { data: DataProvider }) => {
  const [drawers, setDrawers] = useState(
    // data.drawers.sort((a, b) => a.position - b.position) TODO - use when setting position in state
    testData
  );

  const handleDrawerDrag = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newDrawerOrder = drawers;
      const draggedDrawer = newDrawerOrder.splice(dragIndex, 1);
      newDrawerOrder.splice(hoverIndex, 0, draggedDrawer[0]);

      setDrawers([...newDrawerOrder]);
    },
    [drawers]
  );

  console.log(drawers);

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

import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import OpenIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/ExpandMore";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { Typography } from "@material-ui/core";

import { ItemPortal } from "../ItemPortal";
import { Item } from "./Item";

const drawerStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px 0px 10px",
    padding: "5px 15px",
  },
  heading: {
    // Name and Edit Btn
    display: "flex",
    alignItems: "center",
    marginLeft: "-10px",
  },
  editBtn: {
    marginLeft: "auto",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
  portal: {
    height: "auto",
  },
}));

export const Drawer = ({ drawer, cursor }) => {
  const [expanded, setExpanded] = useState(false);
  const [itemPortalId, setItemPortalId] = useState(null);
  // TODO probably moving this later as it relates to items too?

  const handleDragStart = (e) => {
    console.log("Drag Start!", e);
    e.dataTransfer.setData("text/plain", e.target);
    e.dataTransfer.dropEffect = "move";
  };

  const handleItemClick = (id) => {
    id === itemPortalId ? setItemPortalId(null) : setItemPortalId(id);
  };

  const classes = drawerStyles();
  return (
    <div
      className={classes.root}
      draggable
      onDragStart={(e) => e.preventDefault()}
    >
      <div className={classes.heading}>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <CloseIcon /> : <OpenIcon />}
        </IconButton>
        <Typography>{drawer.name}</Typography>
        <button className={classes.editBtn}>Edit Contents</button>
        <IconButton
          disableRipple
          onMouseDown={cursor.setCursorGrab}
          // onMouseLeave={cursor.setCursorGrabbing}
          draggable
          onDragStart={handleDragStart}
          id={drawer.id}
          style={{ cursor: cursor.current }}
        >
          <DragHandleIcon />
        </IconButton>
      </div>
      {expanded && (
        <div>
          <div className={classes.content}>
            {drawer.items.map((item) => {
              return (
                <Item item={item} handleClick={handleItemClick} key={item.id} />
              );
            })}
          </div>
          <div className={classes.portal}>
            {itemPortalId && (
              <ItemPortal
                item={drawer.items.find((item) => item.id === itemPortalId)}
                // shown={itemPortalId !== null}
                // Right now shown is managed by the page -
                // in the future maybe the portal manages it for animation?
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

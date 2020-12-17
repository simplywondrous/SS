import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import OpenIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/ExpandMore";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { Typography } from "@material-ui/core";

import { useDrag } from "react-dnd";

import { ItemPortal } from "../ItemPortal";
import { ItemCard } from "../ItemCard";
import { CursorContext } from "../../Layout";

import { useStyles } from "./styles";

import { Drawer, Item } from "../../App/types";

type DragType = "drawer";

interface DragItem {
  item: {
    id: Drawer["id"];
    type: DragType;
  };
}

export const ItemDrawer = ({ drawer }: { drawer: Drawer }) => {
  const [expanded, setExpanded] = useState(false); // If drawer is open
  const [expandedItemPortalId, setExpandedItemPortalId] = useState<
    Item["id"] | undefined
  >(undefined);

  const drawerDragType: DragType = "drawer";
  const [collectedProps, drag] = useDrag({
    item: { drawerId: drawer.id, type: drawerDragType },
  });

  const handleItemClick = (id: Item["id"]) => {
    id === expandedItemPortalId
      ? setExpandedItemPortalId(undefined)
      : setExpandedItemPortalId(id);
  };

  const expandedItemPortal = drawer.items.find(
    (item) => item.id === expandedItemPortalId
  )!; // Should always find item

  const { root, heading, editBtn, content, portal } = useStyles();
  return (
    <div className={root} ref={drag}>
      <div className={heading}>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <CloseIcon /> : <OpenIcon />}
        </IconButton>
        <Typography>{drawer.name}</Typography>
        <button className={editBtn}>Edit Contents</button>
        <IconButton disableRipple id={drawer.id}>
          <DragHandleIcon />
        </IconButton>
      </div>
      {expanded && (
        <>
          <div className={content}>
            {drawer.items.map((item) => (
              <ItemCard
                item={item}
                handleClick={handleItemClick}
                key={item.id}
              />
            ))}
          </div>
          <div className={portal}>
            {expandedItemPortalId && <ItemPortal item={expandedItemPortal} />}
          </div>
        </>
      )}
    </div>
  );
};

/**
 *  // shown={itemPortalId !== null}
    // Right now shown is managed by the page -
    // in the future maybe the portal manages it for animation?
 */

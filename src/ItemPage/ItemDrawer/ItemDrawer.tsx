import React, { useRef, useState } from "react";

import { DropTargetMonitor, useDrag, useDrop, XYCoord } from "react-dnd";

import { ItemPortal } from "../ItemPortal";
import { ItemCard } from "../ItemCard";
import { CursorContext } from "../../Layout";

import { useStyles } from "./styles";

import { Drawer, Item } from "../../App/types";
import { DragType } from "../types";
import { ItemDrawerHeading } from "./ItemDrawerHeading";

interface ItemDrawerProps {
  drawer: Drawer;
  index: number;
  onDrag: (dragIndex: number, hoverIndex: number) => void;
}

interface DraggedDrawerData {
  id: string;
  index: number;
  type: typeof DragType.DRAWER;
}

export const ItemDrawer = ({ drawer, index, onDrag }: ItemDrawerProps) => {
  const [expanded, setExpanded] = useState(false); // If drawer is open
  const [expandedItemPortalId, setExpandedItemPortalId] = useState<
    Item["id"] | undefined
  >(undefined);
  const dragRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { items: drawerItems, name: drawerName, id: drawerId } = drawer;
  const { root, content, portal } = useStyles();

  const drawerDragType = DragType.DRAWER;

  const [, drop] = useDrop({
    accept: DragType.DRAWER,
    hover: (dragged: DraggedDrawerData, monitor: DropTargetMonitor) => {
      if (!drawerRef.current) return;
      const dragIndex = dragged.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = drawerRef.current?.getBoundingClientRect();
      const hoverMidY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // vertical middle of this rect
      const mousePos = monitor.getClientOffset();
      if (!mousePos) throw Error;
      const hoverMouseY = (mousePos as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      if (dragIndex < hoverIndex && hoverMouseY < hoverMidY) return; // Dragging downwards
      if (dragIndex > hoverIndex && hoverMouseY > hoverMidY) return; // Dragging upwards

      onDrag(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      dragged.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag<DraggedDrawerData, any, any>({
    item: { id: drawerId, index, type: drawerDragType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    begin: () => setExpanded(false),
  });

  const handleItemClick = (id: Item["id"]) => {
    id === expandedItemPortalId
      ? setExpandedItemPortalId(undefined)
      : setExpandedItemPortalId(id);
  };

  const expandedItem = drawerItems.find(
    (item) => item.id === expandedItemPortalId
  );

  const items = drawerItems.map((item) => (
    <ItemCard item={item} handleClick={handleItemClick} key={item.id} />
  ));

  drag(dragRef);
  drop(drawerRef);
  preview(drawerRef);
  return (
    <div
      className={root}
      ref={drawerRef}
      style={{ opacity: isDragging ? 0.4 : 1, border: "1px dashed gray" }}
    >
      <ItemDrawerHeading
        drawerName={drawerName}
        drawerId={drawerId}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        dragRef={dragRef}
      />
      {expanded && (
        <>
          <div className={content}>{items}</div>
          <div className={portal}>
            {expandedItem && <ItemPortal item={expandedItem} />}
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

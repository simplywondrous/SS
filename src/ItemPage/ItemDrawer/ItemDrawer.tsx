import React, { useCallback, useRef, useState } from "react";

import { useDrag, useDrop } from "react-dnd";

import { ItemPortal } from "../ItemPortal";
import { ItemCard } from "../ItemCard/ItemCard";

import { useStyles } from "./styles";

import { Drawer, Item } from "../../App/types";
import { ItemDrawerHeading } from "./ItemDrawerHeading";
import {
  DraggedDrawerData,
  DragType,
  handleDragItemReorder,
  handleHoverItem,
} from "../drag-helpers";

interface ItemDrawerProps {
  drawer: Drawer;
  index: number;
  onDrag: (dragIndex: number, hoverIndex: number) => void;
}

export const ItemDrawer = ({ drawer, index, onDrag }: ItemDrawerProps) => {
  const [expanded, setExpanded] = useState(false); // If drawer is open
  const [expandedItemPortalId, setExpandedItemPortalId] = useState<
    Item["id"] | undefined
  >(undefined);
  const [drawerItems, setDrawerItems] = useState(drawer.items);
  const dragRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const { name: drawerName, id: drawerId } = drawer;
  const { root, content, portal } = useStyles();

  const [, drop] = useDrop({
    accept: DragType.DRAWER,
    hover: (dragged: DraggedDrawerData, monitor) =>
      handleHoverItem(
        dragged,
        monitor,
        drawerRef.current,
        index,
        onDrag,
        "vertical"
      ),
  });

  const [{ isDragging }, drag, preview] = useDrag<
    DraggedDrawerData,
    unknown,
    { isDragging: boolean }
  >({
    item: { id: drawerId, index, type: DragType.DRAWER },
    options: { dropEffect: "grabbing" },
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

  const handleItemCardDrag = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newDrawerItems = handleDragItemReorder(
        drawerItems,
        dragIndex,
        hoverIndex
      );
      setDrawerItems(newDrawerItems);
      setExpandedItemPortalId(undefined);
    },
    [drawerItems]
  );

  const expandedItem = drawerItems.find(
    (item) => item.id === expandedItemPortalId
  );

  const items = drawerItems.map((item, index) => (
    <ItemCard
      item={item}
      handleClick={handleItemClick}
      key={item.id}
      index={index}
      onDrag={handleItemCardDrag}
    />
  ));

  drag(dragRef);
  drop(drawerRef);
  preview(null);
  return (
    <div
      className={root}
      ref={drawerRef}
      style={{
        opacity: isDragging ? 0.4 : 1, // TODO: replace with moving animation
        border: "1px dashed gray",
      }}
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

/** TODO
 *  // shown={itemPortalId !== null}
    // Right now shown is managed by the page -
    // in the future maybe the portal manages it for animation?
 */

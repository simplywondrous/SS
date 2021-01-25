import React, { useState } from "react";

import { ItemPortal } from "../ItemPortal";
import { ItemCard } from "../ItemCard/ItemCard";

import { useStyles } from "./styles";

import { Drawer, Item } from "../../App/types";
import { ItemDrawerHeading } from "./ItemDrawerHeading";

interface ItemDrawerProps {
  drawer: Drawer;
  index: number;
  onDrag: (dragIndex: number, hoverIndex: number) => void;
}

export const ItemDrawer = ({ drawer, index }: ItemDrawerProps) => {
  const [expanded, setExpanded] = useState(false); // If drawer is open
  const [expandedItemPortalId, setExpandedItemPortalId] = useState<
    Item["id"] | undefined
  >(undefined);
  const [drawerItems, setDrawerItems] = useState(drawer.items);

  const { name: drawerName, id: drawerId } = drawer;
  const { root, content, portal } = useStyles();

  const handleItemClick = (id: Item["id"]) => {
    id === expandedItemPortalId
      ? setExpandedItemPortalId(undefined)
      : setExpandedItemPortalId(id);
  };

  const expandedItem = drawerItems.find(
    (item) => item.id === expandedItemPortalId
  );

  const items = drawerItems.map((item, index) => (
    <ItemCard
      item={item}
      handleClick={handleItemClick}
      key={item.id}
      index={index}
    />
  ));

  return (
    <div
      className={root}
      style={{
        // TODO: replace with moving animation
        border: "1px dashed gray",
      }}
    >
      <ItemDrawerHeading
        drawerName={drawerName}
        drawerId={drawerId}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
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

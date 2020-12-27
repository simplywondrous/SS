import React, { useRef } from "react";

import { useDrag, useDrop } from "react-dnd";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

// @ts-ignore TODO get this linting error figured out w/ custom.d.ts
import pic from "../../pic.png";
import { Item } from "../../App/types";
import { useStyles } from "./styles";
import {
  DraggedItemCardData,
  DragType,
  handleHoverItem,
} from "../drag-helpers";

interface ItemCardProps {
  item: Item;
  index: number;
  handleClick: (id: Item["id"]) => void;
  onDrag: (dragIndex: number, hoverIndex: number) => void;
}

export const ItemCard = ({
  item,
  index,
  handleClick,
  onDrag,
}: ItemCardProps) => {
  const cardRef = useRef(null);
  const { id, name } = item;

  const [, drop] = useDrop({
    accept: DragType.ITEMCARD,
    hover: (dragged: DraggedItemCardData, monitor) => {
      handleHoverItem(
        dragged,
        monitor,
        cardRef.current,
        index,
        onDrag,
        "horizontal"
      );
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { id, index, type: DragType.ITEMCARD },
    options: { dropEffect: "grabbing" },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  drag(drop(cardRef));
  const { root, image, overlay, content } = useStyles();
  return (
    <Card
      className={root}
      ref={cardRef}
      style={{ opacity: isDragging ? 0.4 : 1 }} // TODO: replace with moving animation
    >
      <CardActionArea onClick={() => handleClick(id)}>
        <CardMedia className={image} image={pic} />
        <div className={overlay}>
          <div className={content}>{name}</div>
        </div>
      </CardActionArea>
    </Card>
  );
};

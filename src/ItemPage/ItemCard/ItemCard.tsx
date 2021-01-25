import React from "react";

import { Card, CardActionArea, CardMedia } from "@material-ui/core";

// @ts-ignore TODO get this linting error figured out w/ custom.d.ts
import pic from "../../pic.png";
import { Item } from "../../App/types";
import { useStyles } from "./styles";

interface ItemCardProps {
  item: Item;
  index: number;
  handleClick: (id: Item["id"]) => void;
}

export const ItemCard = ({ item, index, handleClick }: ItemCardProps) => {
  const { id, name } = item;

  const { root, image, overlay, content } = useStyles();
  return (
    <Card className={root}>
      <CardActionArea onClick={() => handleClick(id)}>
        <CardMedia className={image} image={pic} />
        <div className={overlay}>
          <div className={content}>{name}</div>
        </div>
      </CardActionArea>
    </Card>
  );
};

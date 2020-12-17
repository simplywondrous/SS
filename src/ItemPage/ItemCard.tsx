import React from "react";

import { Card, CardActionArea, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// @ts-ignore TODO get this linting error figured out w/ custom.d.ts
import pic from "../pic.png";
import { Item } from "../App/types";

const itemStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
    margin: "15px",
  },
  image: {
    height: "150px",
    transition: "all 0.3s ease-in-out 0s",
  },
  overlay: {
    transition: "all 0.3s ease-in-out 0s",
    background: "rgba(0,0,0,0.7)",
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    "&:hover": {
      //Stops working if "&:hover $content"... why?
      opacity: "1",
    },
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  },
});

interface ItemCardProps {
  item: Item;
  handleClick: (id: Item["id"]) => void;
}

export const ItemCard = ({ item, handleClick }: ItemCardProps) => {
  const classes = itemStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleClick(item.id)}>
        <CardMedia className={classes.image} image={pic} />
        <div className={classes.overlay}>
          <div className={classes.content}>{item.name}</div>
        </div>
      </CardActionArea>
    </Card>
  );
};

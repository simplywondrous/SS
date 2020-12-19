import React from "react";

import IconButton from "@material-ui/core/IconButton";
import OpenIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/ExpandMore";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";

interface ItemDrawerHeadingProps {
  drawerName: string;
  drawerId: string;
  expanded: boolean;
  onClick: () => void;
}

export const ItemDrawerHeading = ({
  drawerName,
  drawerId,
  expanded,
  onClick,
}: ItemDrawerHeadingProps) => {
  const { heading, editBtn } = useStyles();
  return (
    <div className={heading}>
      <IconButton onClick={onClick}>
        {expanded ? <CloseIcon /> : <OpenIcon />}
      </IconButton>
      <Typography>{drawerName}</Typography>
      <button className={editBtn}>Edit Contents</button>
      <IconButton disableRipple id={drawerId}>
        <DragHandleIcon />
      </IconButton>
    </div>
  );
};

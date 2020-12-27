import React from "react";

import { IconButton, Typography } from "@material-ui/core";
import {
  ChevronRight as OpenIcon,
  ExpandMore as CloseIcon,
  DragHandle as DragHandleIcon,
} from "@material-ui/icons";

import { useStyles } from "./styles";

interface ItemDrawerHeadingProps {
  drawerName: string;
  drawerId: string;
  dragRef: React.RefObject<HTMLButtonElement>;
  expanded: boolean;
  onClick: () => void;
}

export const ItemDrawerHeading = ({
  drawerName,
  drawerId,
  expanded,
  onClick,
  dragRef,
}: ItemDrawerHeadingProps) => {
  const { heading, editBtn, dragBtn } = useStyles();
  return (
    <div className={heading}>
      <IconButton onClick={onClick}>
        {expanded ? <CloseIcon /> : <OpenIcon />}
      </IconButton>
      <Typography>{drawerName}</Typography>
      <button className={editBtn}>Edit Contents</button>
      <IconButton
        className={dragBtn}
        disableRipple
        disableFocusRipple
        id={`${drawerId}-drag-btn`}
        ref={dragRef}
      >
        <DragHandleIcon style={{ cursor: "grab" }} />
      </IconButton>
    </div>
  );
};

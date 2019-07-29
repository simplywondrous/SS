import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"

// Sidebar
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/ChevronLeft"
import OpenIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-end"
  },
  icon: {}
}))

const Sidebar = ({ expanded, toggleExpand }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <IconButton onClick={toggleExpand}>
        {expanded ? <CloseIcon /> : <OpenIcon />}
      </IconButton>
    </div>
  )
}

export default Sidebar

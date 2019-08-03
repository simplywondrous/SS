import React from "react"
import { makeStyles } from "@material-ui/styles"

import IconButton from "@material-ui/core/IconButton"
import OpenIcon from "@material-ui/icons/ExpandMore"
import CloseIcon from "@material-ui/icons/ExpandLess"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    height: "75px",
    display: "flex",
    backgroundColor: "green"
  },
  addBtn: {
    marginLeft: "auto"
  },
  display: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
  // drawer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   padding: "50px"
  // },
  // drawerHeading: {
  //   // Name and Edit Btn
  //   display: "flex",
  //   alignItems: "center"
  // },
  // drawerEditBtn: {
  //   marginLeft: "auto"
  // },
  // drawerContent: {
  //   // Text styles and padding
  // }
}))

const ItemPage = ({ data }) => {
  const classes = useStyles()
  console.log(data.drawers)
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.addBtn}>
          <button>Add Item</button>
        </div>
      </div>
      <div className={classes.display}>
        {/* Populate with drawers, with unsorted last */}
        {data.drawers.map(drawer => {
          return <Drawer drawer={drawer} />
        })}
      </div>
    </div>
  )
}

const drawerStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    paddingLeft: "25px"
  },
  heading: {
    // Name and Edit Btn
    display: "flex",
    alignItems: "center"
  },
  editBtn: {
    marginLeft: "auto"
  },
  content: {
    // Text styles and padding
  }
}))

const Drawer = ({ drawer }) => {
  const classes = drawerStyles()
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <IconButton>
          <OpenIcon />
        </IconButton>
        {drawer.name}
        <button className={classes.editBtn}>Edit Contents</button>
      </div>
    </div>
  )
}

export default ItemPage

/**
 * Accordian-style drawers
 * All will be expanded by default
 *
 * -----------------
 * V NAME OF DRAWER
 * -----------------
 * DRAWER ONTENTS
 * -----------------
 *
 * Q: Add Item?
 * A: Makes sense to drag item maybe? Or is selecting from dropdown better?
 * (Probably dropdown, actually)
 *
 * Q: Should drawers allow double of an item?
 * A: For now, no.
 *
 * Q: Where is option to add item?
 * A: Top right of page for now, also not sticky for now
 *
 * Q: What does creating a new item look like?
 * A: Slide-out Drawer from the right, with form fields
 *
 * Q: Add Another Item Button?
 * A: Should be option next to Save Button for an item (for later)
 */

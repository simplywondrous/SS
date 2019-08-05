import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import pic from "./pic.png"

import {
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core"

import IconButton from "@material-ui/core/IconButton"
import OpenIcon from "@material-ui/icons/ChevronRight"
import CloseIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginRight: "10px"
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
}))

const ItemPage = ({ data }) => {
  const classes = useStyles()
  // console.log(data.drawers)
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
    margin: "25px 10px 0px 10px",
    padding: "25px"
    // backgroundColor: "#f5f5f5"
  },
  heading: {
    // Name and Edit Btn
    display: "flex",
    alignItems: "center",
    marginLeft: "-10px"
  },
  editBtn: {
    marginLeft: "auto"
  },
  content: {
    // Text styles and padding
    backgroundColor: "#f5f5f5"
    // padding: "10px"
  }
}))

const Drawer = ({ drawer }) => {
  const [expanded, setExpanded] = useState(true)
  const classes = drawerStyles()
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <CloseIcon /> : <OpenIcon />}
        </IconButton>
        <Typography>{drawer.name}</Typography>
        <button className={classes.editBtn}>Edit Contents</button>
      </div>
      {expanded ? (
        <Paper className={classes.content}>
          {drawer.items.map(item => {
            return <Item item={item} />
          })}
        </Paper>
      ) : null}
    </div>
  )
}

const itemStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
    margin: "10px"
  },
  image: {
    height: "150px"
  },
  content: {
    height: "20px"
  }
})

const Item = ({ item }) => {
  const classes = itemStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.image} image={pic} />
      </CardActionArea>
      {item.name}
    </Card>
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

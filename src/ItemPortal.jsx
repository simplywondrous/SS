import React from "react"
import { makeStyles } from "@material-ui/styles"
import {
  Card,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core"

import pic from "./pic.png"

const useStyles = makeStyles({
  root: {
    transition: "all 0.3s ease-in-out 0s",
    margin: "15px",

    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  blockContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "10px"
  },
  fieldBlock: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    height: "auto"
  },
  image: {
    height: "200px",
    width: "200px",
    objectFit: "cover"
  }
})

const ItemPortal = ({ item, shown }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div>{item.name}</div>
      <div className={classes.blockContainer}>
        <div className={classes.fieldBlock}>
          <img className={classes.image} src={pic} />
        </div>
        <div className={classes.fieldBlock}>
          {item.name}
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
          <div>Text two</div>
        </div>
        <div className={classes.fieldBlock}>
          <div>Text five</div>
          <div>Text six</div>
        </div>
      </div>
    </Card>
  )
}

export default ItemPortal

/**
 * Normal mode: No underline, no labels (as it's filled in), disabled input
 * Edit mode: Pre-filled in, but now labels, not disabled
 *
 * Make height zero instead of not rendering, maybe?
 *
 * Future stretch goal: Input Factory, with info about inputs from data
 */

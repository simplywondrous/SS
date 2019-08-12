import React, { useReducer } from "react"
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

/**
 *  id: "an-id-2",
      user: "User",
      name: "Name 2",
      image: null,
      brand: "Brand",
      year: "Year",
      expiration: Date.now(),
      openedOn: Date.now(),
      finishedOn: Date.now(),
      drawer: "Drawer",
      notes: "Notes"
    },
 */

const ItemPortal = ({ item, shown }) => {
  const initialState = {
    name: item.name ? item.name : "",
    image: item.image ? item.image : "",
    brand: item.brand ? item.brand : "",
    year: item.year ? item.year : "",
    expiration: "",
    openedOn: "",
    finishedOn: "",
    drawer: "",
    notes: ""
  }

  function reducer(state, input) {
    let newState = { ...state }
    newState[input.id] = input.value

    return newState
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div>{item.name}</div>
      <div className={classes.blockContainer}>
        <div className={classes.fieldBlock}>
          <img className={classes.image} src={pic} />
        </div>
        <div className={classes.fieldBlock}>
          {state.name}
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={state.name}
              onChange={e =>
                dispatch({ id: e.target.id, value: e.target.value })
              }
            />
            <FormHelperText id="name">
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

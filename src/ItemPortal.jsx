import React, { useReducer, useState } from "react"
import { makeStyles } from "@material-ui/styles"
import {
  Card,
  FormControl,
  InputLabel,
  Input,
  Typography
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
  columnBlock: {
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    height: "auto",
    padding: "15px",
    justifyContent: "space-between"
  },
  image: {
    height: "200px",
    width: "200px",
    objectFit: "cover"
  }
})

const ItemPortal = ({ item }) => {
  const initialState = {
    name: item.name ? item.name : "",
    image: item.image ? item.image : "",
    brand: item.brand ? item.brand : "",
    year: item.year ? item.year : null,
    expiration: item.expiration ? item.expiration.toLocaleDateString() : "",
    openedOn: item.openedOn ? item.openedOn.toLocaleDateString() : "",
    finishedOn: item.finishedOn ? item.finishedOn.toLocaleDateString() : "-",
    drawer: item.drawer ? item.drawer : "",
    notes: item.notes ? item.notes : ""
  }

  function reducer(state, input) {
    let newState = { ...state }
    newState[input.id] = input.value

    return newState
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [edit, setEdit] = useState(false)
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.blockContainer}>
        <div className={classes.columnBlock}>
          <img className={classes.image} src={pic} />
        </div>
        <div className={classes.columnBlock}>
          <div>
            <EditableField editable={edit} handleChange={dispatch}>
              [<Typography variant="h4">{item.name}</Typography>
              <Input />]
            </EditableField>
            <Typography variant="subtitle1">
              {item.brand}
              {item.year ? ` - ${item.year}` : null}
            </Typography>
          </div>
          <div>
            {item.expiration ? (
              <Typography variant="body2">
                Expires: {item.expiration.toLocaleDateString()}
              </Typography>
            ) : null}
            {item.openedOn ? (
              <Typography variant="body2">
                Opened: {item.openedOn.toLocaleDateString()}
              </Typography>
            ) : null}
            {item.finishedOn ? (
              <Typography variant="body2">
                Finished: {item.finishedOn.toLocaleDateString()}
              </Typography>
            ) : null}
          </div>
          {/* <EditableField
            id="name"
            editable={edit}
            label="Name"
            value={state.name}
            tip="Name of Product"
            handleChange={dispatch}
          />
          <EditableField
            id="brand"
            editable={edit}
            label="Brand"
            value={state.brand}
            tip="Product Brand"
            handleChange={dispatch}
          />
          <EditableField
            id="year"
            editable={edit}
            label="Year"
            value={state.year}
            tip="If known, the version of this product"
            handleChange={dispatch}
          /> */}
        </div>
        <div className={classes.columnBlock} />
      </div>
    </Card>
  )
}

// Children dictate content, whereas editable dictates basic input style
const EditableField = ({ children, editable, handleChange }) => {
  return editable ? (
    <FormControl>
      <InputLabel htmlFor={`${id}`}>{label}</InputLabel>
      <Input
        id={`${id}`}
        value={value}
        onChange={e => handleChange({ id: e.target.id, value: e.target.value })}
      />
      {tip ? <div>Tooltip</div> : null}
    </FormControl>
  ) : (
    children[0]
  )
}

export default ItemPortal

/**
 * Make height zero instead of not rendering, maybe?
 *
 * Future stretch goal: Input Factory, with info about inputs from data
 */

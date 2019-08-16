import React, { useReducer, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, TextField, Typography } from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";

import pic from "./pic.png";

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
    padding: "15px 5px",
    justifyContent: "space-between"
  },
  formColumnBlock: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 5px",
    height: "auto",
    padding: "15px 5px",
    justifyContent: "flex-start"
  },
  image: {
    height: "200px",
    width: "200px",
    objectFit: "cover"
  },
  editing: {
    margin: "5px 0px"
  },
  picker: {
    margin: "10px 0px 5px 0px",
    shrink: true
  }
});

const ItemPortal = ({ item }) => {
  const initialState = {
    name: item.name ? item.name : "",
    image: item.image ? item.image : "",
    brand: item.brand ? item.brand : "",
    expiration: item.expiration ? item.expiration.toLocaleDateString() : "",
    openedOn: item.openedOn ? item.openedOn.toLocaleDateString() : "",
    finishedOn: item.finishedOn ? item.finishedOn.toLocaleDateString() : "-",
    drawer: item.drawer ? item.drawer : "",
    notes: item.notes ? item.notes : ""
  };

  function reducer(state, input) {
    let newState = { ...state };
    newState[input.id] = input.value;

    return newState;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [edit, setEdit] = useState(true);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.blockContainer}>
        <div className={classes.columnBlock}>
          <img className={classes.image} src={pic} />
        </div>
        {!edit ? (
          <>
            <div className={classes.columnBlock}>
              <div>
                <Typography variant="subtitle1">{item.brand}</Typography>
                <Typography variant="h4">{item.name}</Typography>
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
            </div>
          </>
        ) : (
          <>
            <div className={classes.formColumnBlock}>
              <TextField
                // variant="outlined"
                label="Brand"
                id="my-input"
                className={classes.editing}
                // style={{ marginTop: "0px" }}
              />
              <TextField
                className={classes.editing}
                // variant="outlined"
                label="Name"
                id="my-input"
              />
            </div>
            <div className={classes.formColumnBlock}>
              <TextField
                id="date"
                label="Expiration Date"
                type="date"
                className={classes.picker}
                InputLabelProps={{ shrink: true }}
                style={{ marginTop: "5px" }}
              />
              <TextField
                id="date"
                label="Opened On"
                type="date"
                className={classes.picker}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                id="date"
                label="Finished On"
                type="date"
                className={classes.picker}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </>
        )}

        <div className={classes.columnBlock}>
          <button onClick={() => setEdit(!edit)}>Edit Toggle</button>
        </div>
      </div>
    </Card>
  );
};

export default ItemPortal;

/**
 * Future:
 *
 * Make height zero instead of not rendering, maybe?
 *
 * Input Factory, with info about inputs from data
 *
 * Cute rounded border around info
 *
 * Replace Typography with Theme
 *
 * What to do about Year / Make of product? Where to display?
 *  For now people can just write it in notes or include in name
 *
 * Replace native date picker with /pickers
 *
 * =====
 *
 * CAPS for brand and product name
 *
 * *SOOOO* many UI questions, it's ridiculous.
 * For now implementing most straightforward - ternary on edit
 * Later ask someone how UI might actually look harmonious between display and edit
 */

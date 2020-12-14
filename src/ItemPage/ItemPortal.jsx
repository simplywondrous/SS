import React, {
  // useReducer, 
  useState
} from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

import pic from "../pic.png";

const useStyles = makeStyles({
  root: {
    position: "relative",
    transition: "all 0.3s ease-in-out 0s",
    margin: "15px",

    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  editIcon: {
    position: "absolute",
    right: "0px",
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  blockContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "10px",
    paddingRight: "15px",
  },
  columnBlock: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 15px",
    height: "auto",
    padding: "15px 5px",
    justifyContent: "space-between",
  },
  formColumnBlock: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 5px",
    height: "auto",
    padding: "15px 5px",
    justifyContent: "space-between",
  },
  image: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
  },
  editing: {
    margin: "5px 0px",
  },
  picker: {
    margin: "10px 0px 5px 0px",
    shrink: true,
  },
  buttonBlock: {
    position: "absolute",
    bottom: "0px",
    right: "0px",
    display: "flex",
    margin: "10px",
    height: "auto",
    justifyContent: "center",
    paddingRight: "5px",
  },
  button: {
    margin: "5px",
  },
});

export const ItemPortal = ({ item }) => {
  // const initialState = {
  //   name: item.name ? item.name : "",
  //   image: item.image ? item.image : "",
  //   brand: item.brand ? item.brand : "",
  //   expiration: item.expiration ? item.expiration.toLocaleDateString() : "",
  //   openedOn: item.openedOn ? item.openedOn.toLocaleDateString() : "",
  //   finishedOn: item.finishedOn ? item.finishedOn.toLocaleDateString() : "-",
  //   drawer: item.drawer ? item.drawer : "",
  //   notes: item.notes ? item.notes : "",
  // };

  // function reducer(state, input) {
  //   let newState = { ...state };
  //   newState[input.id] = input.value;

  //   return newState;
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [edit, setEdit] = useState(true);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.blockContainer}>
        <div className={classes.columnBlock}>
          <img className={classes.image} src={pic} alt="placeholder" />
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
            <IconButton
              className={classes.editIcon}
              onClick={() => setEdit(!edit)}
            >
              <EditIcon />
            </IconButton>
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
                <TextField
                  id="standard-select-currency"
                  select
                  label="Drawer"
                  className={classes.editing}
                  value={item.drawer}
                >
                  <MenuItem value="value"> Option One</MenuItem>
                </TextField>
              </div>
              <div className={classes.formColumnBlock}>
                <TextField
                  className={classes.editing}
                  // variant="outlined"
                  label="Notes"
                  multiline
                  rows="8"
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
              <div className={classes.buttonBlock}>
                <Button className={classes.button}>Save</Button>
                <Button className={classes.button}>Cancel</Button>
              </div>
            </>
          )}
      </div>
    </Card>
  );
};

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

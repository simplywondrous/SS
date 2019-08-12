import React, { useReducer, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, FormControl, InputLabel, Input } from '@material-ui/core';

import pic from './pic.png';

const useStyles = makeStyles({
  root: {
    transition: 'all 0.3s ease-in-out 0s',
    margin: '15px',

    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  blockContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '10px'
  },
  fieldBlock: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    height: 'auto'
  },
  image: {
    height: '200px',
    width: '200px',
    objectFit: 'cover'
  }
});

const ItemPortal = ({ item }) => {
  const initialState = {
    name: item.name ? item.name : '',
    image: item.image ? item.image : '',
    brand: item.brand ? item.brand : '',
    year: item.year ? item.year : '',
    expiration: '',
    openedOn: '',
    finishedOn: '',
    drawer: item.drawer ? item.drawer : '',
    notes: item.notes ? item.notes : ''
  };

  function reducer(state, input) {
    let newState = { ...state };
    newState[input.id] = input.value;

    return newState;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.blockContainer}>
        <div className={classes.fieldBlock}>
          <img className={classes.image} src={pic} />
        </div>
        <div className={classes.fieldBlock}>
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
        <div className={classes.fieldBlock}>
          {/* <EditableField
            id="expiration"
            editable={edit}
            label="Expiration Date"
            value={state.expiration}
            tip="Expiration Date"
            handleChange={dispatch}
          />
          <EditableField
            id="openedOn"
            editable={edit}
            label="Opened On"
            value={state.openedOn}
            tip="Date first opened"
            handleChange={dispatch}
          />
          <EditableField
            id="finishedOn"
            editable={edit}
            label="Finished On"
            value={state.finishedOn}
            tip="Date finished"
            handleChange={dispatch}
          /> */}
        </div>
      </div>
    </Card>
  );
};

/**
 * Might not be the best way to do this
 *
 * For now, make styles so that when not editable, styles applied look alright
 */
// const EditableField = ({ id, editable, label, value, tip, handleChange }) => {
//   return editable ? (
//     <FormControl>
//       <InputLabel htmlFor={`${id}`}>{label}</InputLabel>
//       <Input
//         id={`${id}`}
//         value={value}
//         onChange={e => handleChange({ id: e.target.id, value: e.target.value })}
//       />
//       {tip ? <div>Tooltip</div> : null}
//     </FormControl>
//   ) : (
//     <div>
//       {label}: {value}
//     </div>
//   );
// };

export default ItemPortal;

/**
 * Normal mode: No underline, no labels (as it's filled in), disabled input
 * Edit mode: Pre-filled in, but now labels, not disabled
 *
 * Make height zero instead of not rendering, maybe?
 *
 * Future stretch goal: Input Factory, with info about inputs from data
 */

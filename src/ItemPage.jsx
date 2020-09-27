import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import pic from './pic.png';

import {
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/ExpandMore';

import ItemPortal from './ItemPortal';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px'
  },
  header: {
    height: '75px',
    display: 'flex',
    backgroundColor: 'green'
  },
  addBtn: {
    marginLeft: 'auto'
  },
  display: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}));

const ItemPage = ({ data }) => {
  const classes = useStyles();
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
          return <Drawer drawer={drawer} />;
        })}
      </div>
    </div>
  );
};

const drawerStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 10px 0px 10px',
    padding: '5px 15px'
  },
  heading: {
    // Name and Edit Btn
    display: 'flex',
    alignItems: 'center',
    marginLeft: '-10px'
  },
  editBtn: {
    marginLeft: 'auto'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  portal: {
    height: 'auto'
  }
}));

const Drawer = ({ drawer }) => {
  const [expanded, setExpanded] = useState(true);
  const [itemPortalId, setItemPortalId] = useState(null);

  function onClick(id) {
    id === itemPortalId ? setItemPortalId(null) : setItemPortalId(id);
  }

  const classes = drawerStyles();
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
        <div>
          <div className={classes.content}>
            {drawer.items.map(item => {
              return <Item item={item} handleClick={onClick} />;
            })}
          </div>
          <div className={classes.portal}>
            {itemPortalId ? (
              <ItemPortal
                item={drawer.items.find(item => item.id === itemPortalId)}
                // shown={itemPortalId !== null}
                // Right now shown is managed by the page -
                // in the future maybe the portal manages it for animation?
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const itemStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '150px',
    margin: '15px'
  },
  image: {
    height: '150px',
    transition: 'all 0.3s ease-in-out 0s'
  },
  overlay: {
    transition: 'all 0.3s ease-in-out 0s',
    background: 'rgba(0,0,0,0.7)',
    opacity: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    '&:hover': {
      //Stops working if "&:hover $content"... why?
      opacity: '1'
    }
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff'
  }
});

const Item = ({ item, handleClick }) => {
  const classes = itemStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleClick(item.id)}>
        <CardMedia className={classes.image} image={pic} />
        <div className={classes.overlay}>
          <div className={classes.content}>{item.name}</div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ItemPage;


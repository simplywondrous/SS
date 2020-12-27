import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import Sidebar from "./Sidebar";
import { Body } from "./Body";
import { DataProvider } from "./App/DataProvider";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "0fr auto",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: `
        "sidebar header"
        "sidebar main"
        "sidebar footer"`,
    gridGap: "10px 10px",
  },
  sidebar: {
    gridArea: "sidebar",
    backgroundColor: "red",
    transition: "all 0.5s",
    // display: "flex"
  },
  expanded: {
    width: "200px",
  },
  closed: {
    width: "75px",
  },
  header: {
    gridArea: "header",
    backgroundColor: "green",
  },
  main: {
    gridArea: "main",
    backgroundColor: "#fff",
  },
  footer: {
    gridArea: "footer",
    backgroundColor: "blue",
  },
});

export const Layout = ({ data }: { data: DataProvider }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        className={`${classes.sidebar} ${
          expanded ? classes.expanded : classes.closed
        }`}
      >
        <Sidebar
          expanded={expanded}
          toggleExpand={() => setExpanded(!expanded)}
        />
      </div>
      <div className={classes.header}>Header</div>
      <div className={classes.main}>
        <Body data={data} />
      </div>
      <div className={classes.footer}>Footer</div>
    </div>
  );
};

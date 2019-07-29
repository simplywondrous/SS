import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"

import Sidebar from "./Sidebar"

const useStyles = makeStyles(theme => ({
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
    gridGap: "10px 10px"
  },
  sidebar: {
    gridArea: "sidebar",
    backgroundColor: "red",
    // width: "250px",
    transition: "all 1s"
  },
  expanded: {
    width: "250px"
  },
  closed: {
    width: "50px"
  },
  header: {
    gridArea: "header",
    backgroundColor: "green"
  },
  main: {
    gridArea: "main",
    backgroundColor: "yellow"
  },
  footer: {
    gridArea: "footer",
    backgroundColor: "blue"
  }
}))

const Layout = () => {
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()
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
      <div className={classes.main} />
      <div className={classes.footer}>Footer</div>
    </div>
  )
}

export default Layout

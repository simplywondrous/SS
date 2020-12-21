import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "10px 10px 0px 10px",
    padding: "5px 15px",
  },
  heading: {
    // Name and Edit Btn
    display: "flex",
    alignItems: "center",
    marginLeft: "-10px",
  },
  editBtn: {
    marginLeft: "auto",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
  portal: {
    height: "auto",
  },
  dragBtn: {
    borderRadius: "0%",
    "&:hover": {
      backgroundColor: "white", // TODO - based on theme bg
      cursor: "grab",
    },
  },
});

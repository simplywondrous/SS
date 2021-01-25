import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
    margin: "15px",
  },
  image: {
    height: "150px",
    transition: "all 0.3s ease-in-out 0s",
  },
  overlay: {
    transition: "all 0.3s ease-in-out 0s",
    background: "rgba(0,0,0,0.7)",
    opacity: "0",
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    "&:hover": {
      // TODO Stops working if "&:hover $content"... why?
      opacity: "1",
    },
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  },
});

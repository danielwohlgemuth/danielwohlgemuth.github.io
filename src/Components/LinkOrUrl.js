import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  linkText: {
    textDecoration: `none`,
  },
});

function LinkOrUrl({ url, to, children }) {
  const classes = useStyles();

  if (url) {
    return (
      <a href={url} className={classes.linkText}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={classes.linkText}>
        {children}
      </Link>
    );
  }
}

export default LinkOrUrl;

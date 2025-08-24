import { Link } from "react-router";


function LinkOrUrl({ url, to, children }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" style={{ textDecoration: `none` }}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} style={{ textDecoration: `none` }}>
        {children}
      </Link>
    );
  }
}

export default LinkOrUrl;

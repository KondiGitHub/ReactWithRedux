import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
     <nav>
       <IndexLink to="/" activeClassName="active">Home</IndexLink>
       { " | "}
       <Link to="/photos" activeClassName="active">Photos</Link>
       { " | "}
       <Link to="/videos" activeClassName="active">Videos</Link>
     </nav>
  );
};
export default Header;

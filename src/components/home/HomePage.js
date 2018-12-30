import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {

   render() {
     return(
       <div>
          <div className="main container-fluid">
            <div className="row" >
              <Link to="photos" className="col-sm-5 photogallary">Photos</Link>
              <Link to="videos" className="col-sm-5 videogallary">Videos</Link>
            </div>
           </div>
       </div>
     );
   }
}

export default HomePage;

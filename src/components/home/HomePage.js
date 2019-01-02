import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class HomePage extends React.Component {

   render() {
     console.log(this.props.photoGallarys);
     return(
       <div>
          <div className="main container-fluid">
            <div className="row" >
              <Link to={{ pathname: '/photos', state: { photoGallarys: this.props.photoGallarys} }} className="col-sm-5 videogallary">Photos</Link>
              <Link to="videos" className="col-sm-5 videogallary">Videos</Link>
            </div>
           </div>
       </div>
     );
   }
}

function mapStateToProps(state, ownProps) {
console.log("state.photoGallarys are ::"+state.photoGallarys)
  return {
    photoGallarys: state.photoGallarys
  };

}

export default connect(mapStateToProps)(HomePage);

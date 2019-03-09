import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {nextPhoto,previousPhoto} from '../../actions/photoGallarysAction';



class HomePage extends React.Component {

   render() {
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

HomePage.propTypes = {
  photoGallarys: PropTypes.object,
  nextPhoto: PropTypes.func,
  previousPhoto: PropTypes.func

};
function mapStateToProps(state, ownProps) {
  return {
    photoGallarys: state.photoGallarys
  };

}

/*function mapDispatchToProps(dispatch) {

  return {
    nextPhoto : (year) => dispatch(nextPhoto(year)),
    previousPhoto : (year) => dispatch(previousPhoto(year))
  };

}*/

export default connect(mapStateToProps)(HomePage);

import React from "react";
import {connect} from 'react-redux';
import PhotoGallary from "./PhotoGallary";
import PropTypes from 'prop-types';

class PhotoPage extends React.Component {
  constructor(props,context) {
    super(props, context);
    this.state = {
      photoGallarys : {
        galaries: []
      }
    };
  }

  render() {
    return (
      <div>
        < PhotoGallary photoGallarys={this.props.photoGallarys} />
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {

  return {
    photoGallarys: state.photoGallarys
  };

}

PhotoPage.propTypes = {
  photoGallarys: PropTypes.object
};

export default connect(mapStateToProps)(PhotoPage);


import React from "react";
import {connect} from 'react-redux';
import PhotoGallary from "./PhotoGallary";

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

export default connect(mapStateToProps)(PhotoPage);


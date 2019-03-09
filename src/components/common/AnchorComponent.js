import React from "react";
import PropTypes from 'prop-types';
class AnchorComponent extends React.Component {
  getImagePath(year,index){
    return `/images/${year}/0${index+1}.JPG`;
  }
  buildAnchorTag(year,index){
    let classNames = "carousel-item active";
    return(<div className={classNames}>
        <img src={this.getImagePath(year, index)} alt="Ammulu Picture" />
      </div>);
  }
  render() {
    const year = this.props.year;
    const index = this.props.index;
    return(
      <div>
        {
          this.buildAnchorTag(year,index)
        }
      </div>
    );
  }
}

AnchorComponent.propTypes = {
  year: PropTypes.number,
  index: PropTypes.number
};

export default AnchorComponent;

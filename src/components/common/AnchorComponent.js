import React from "react";

class AnchorComponent extends React.Component {
  getImagePath(photo){
    return `/images/${photo}`;
  }
  buildAnchorTag(photo, num, year,index,gallaryYear){
    const yearNum = `${year}_${num}`;
    let classNames = "carousel-item";
    if(gallaryYear === year) {
      if(num === index) {
        classNames = `${classNames} active`;
      }
    } else {
      if(num == 0) {
        classNames = `${classNames} active`;
      }
    }


    return(<div className={classNames} id={yearNum}>
        <img src={this.getImagePath(photo)} alt="Ammulu Picture" />
      </div>);

  }
  render() {
    const year = this.props.year;
    const index = this.props.index;
    const gallaryYear = this.props.gallaryYear;
    return(
      <div>
        {
          this.props.photos.map((photo, num) =>
          this.buildAnchorTag(photo, num, year,index,gallaryYear))
        }
      </div>
    );
  }
}

export default AnchorComponent;

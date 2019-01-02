import React from 'react';

class ListIndicators extends React.Component {

  buildLiTag(num){
    if(num ==0 ){
      return(<li data-target="#demo"  data-slide-to={num} className="active"></li>);
    }else {
      return(<li data-target="#demo" data-slide-to={num}></li>);
    }
  }
  render() {
  return(
    <div>
      <ul className="carousel-indicators">
      {
        this.props.photos.map((photo, num) =>
          this.buildLiTag(num)
        )
      }
      </ul>

    </div>
  );
  }
}

export default ListIndicators;

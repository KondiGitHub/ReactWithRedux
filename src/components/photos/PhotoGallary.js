import React from 'react';
import AnchorComponent from '../common/AnchorComponent';
import ListIndicators from './ListIndicators';

class PhotoGallary extends React.Component {

  constructor(props,context) {
    super(props, context);
    this.state = {
      photoGallarys : {
        galaries: []
      },
      index: 0,
      year: 0
    };
    this.onNextChange = this.onNextChange.bind(this);
    this.onPrevChange = this.onPrevChange.bind(this);
  }
  onNextChange(event){
    this.setState({
      index: this.state.index+1,
      year: event.target.id
    });
  }

  onPrevChange(event) {
    this.setState({
      index: this.state.index-1,
      year: event.target.id
    });
  }
  buildPhotoGalary(gallary,index) {
    var styles = {marginLeft: "80px"}
    let gallaryIndex =this.state.index;
    if(gallaryIndex > gallary.photos.length-1) {
      gallaryIndex =0;
    }
    return (<div className="photogallary" year={gallary.year}>
      <div className="row" style={styles}>
        <div className="year">{gallary.year}</div>
      </div>
      <div className="row" style={styles}>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ListIndicators photos={gallary.photos} />
          <div className="carousel-inner">
            <AnchorComponent
              photos={gallary.photos}
              gallaryYear={gallary.year}
              index={gallaryIndex}
              year={this.state.year}
            />
          </div>
          <div className="carousel-control-prev" id={gallary.year} index={index} onClick={this.onPrevChange.bind(this)} data-slide="prev">
            <span className="carousel-control-prev-icon" id={gallary.year}></span>
          </div>
          <div className="carousel-control-next" id={gallary.year} index={index} onClick={this.onNextChange.bind(this)} data-slide="next">
            <span className="carousel-control-next-icon" id={gallary.year}></span>
          </div>
        </div>
      </div>
    </div>);
  }
   render() {
    this.state.photoGallarys = this.props.photoGallarys;

      return(
           <div>
             {
               this.props.photoGallarys.galaries.map((gallary, index) =>
                 this.buildPhotoGalary(gallary,index))
             }

           </div>
         );
   }
}

export default PhotoGallary;

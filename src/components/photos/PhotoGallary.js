import React from 'react';
import AnchorComponent from '../common/AnchorComponent';
import ListIndicators from './ListIndicators';
import PropTypes from 'prop-types';
import {nextPhoto,previousPhoto} from '../../actions/photoGallarysAction';
import {connect} from 'react-redux';

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
    this.props.nextPhoto(event.target.id);
  }
  onPrevChange(event) {
    this.props.previousPhoto(event.target.id);
  }
  buildPhotoGalary(gallary,index) {
    let styles = {marginLeft: "80px"};
    let gallaryIndex =index;
     //<ListIndicators photos={gallary.photos} />
    return (<div className="photogallary" year={gallary.year} key={index}>
      <div className="row" style={styles}>
        <div className="year">{gallary.year}</div>
      </div>
      <div className="row" style={styles}>
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <AnchorComponent
              index={gallary.nextIndex}
              year={gallary.year}
            />
          </div>
          <div className="carousel-control-prev" id={gallary.year} index={index} onClick={this.onPrevChange} data-slide="prev">
            <span className="carousel-control-prev-icon" id={gallary.year}></span>
          </div>
          <div className="carousel-control-next" id={gallary.year} index={index} onClick={this.onNextChange} data-slide="next">
            <span className="carousel-control-next-icon" id={gallary.year}></span>
          </div>
        </div>
      </div>
    </div>);
  }
   render() {
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
PhotoGallary.propTypes = {
  photoGallarys: PropTypes.object,
  nextPhoto: PropTypes.func,
  previousPhoto: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    photoGallarys: state.photoGallarys
  };

}

function mapDispatchToProps(dispatch) {

  return {
    nextPhoto : (year) => dispatch(nextPhoto(year)),
    previousPhoto : (year) => dispatch(previousPhoto(year))
  };

}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoGallary);


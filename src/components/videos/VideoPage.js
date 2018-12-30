import React from 'react';

class VideoPage extends React.Component {

  render() {
    return(
      <div>
        <div className="row" >
          <div className="row gallary">

            <div className="row">
              <div className="year">2009</div>
            </div>
            <div className="row">
              <video width="200" controls>
                <source src="/videos/IMG_7599_2.MP4" type="video/mp4" />
                  Your browser does not support HTML5 video.
              </video>
              <video width="200" controls>
                <source src="/videos/IMG_7633_2.MP4" type="video/mp4" />
                 Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;

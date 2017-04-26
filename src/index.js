import React, { Component, PropTypes } from 'react';
import * as LivePhotosKit from 'livephotoskit';

class LivePhoto extends Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }

  componentDidMount() {
    const el = this.livePhoto;
    const player = LivePhotosKit.Player(el);
    player.photoSrc = this.props.imageSrc;
    player.videoSrc = this.props.videoSrc;
  }

  render() {
    const { height, width } = this.props;
    return (
      <div
        ref={(livephoto) => { this.livePhoto = livephoto; }}
        className="react-livephoto"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }
}

export default LivePhoto;

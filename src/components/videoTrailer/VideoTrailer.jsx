import React from "react";
import "./VideoTrailer.scss";
import Container from "../../utils/container/Container";

const VideoTrailer = () => {
  return (
    <Container paddingBottom={"4rem"} className={"video-container"}>
      <div className="trailer-video-header">
        <h1>Trailer</h1>
        <p>A glimpse of us</p>
      </div>
      <video
        src={require("../../assets/images/video/192340A4-18DA-422A-BE89-3A265E5BD535.mov")}
        controls={true}
        className="videos"
      ></video>
    </Container>
  );
};

export default VideoTrailer;

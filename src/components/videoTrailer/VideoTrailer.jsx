import React from "react";
import "./VideoTrailer.scss";
import Container from "../../utils/container/Container";

const VideoTrailer = () => {
  return (
    <Container
      paddingTop={"4rem"}
      paddingBottom={"4rem"}
      className={"video-container"}
    >
      <div className="trailer-video-header">
        <h1>Trailer</h1>
        <p>A glimpse of us</p>
      </div>
      <video
        src={require("../../assets/images/video/01C37576-6B69-4C74-9918-746A040DC621.mov")}
        controls={true}
        className="videos"
      ></video>
    </Container>
  );
};

export default VideoTrailer;

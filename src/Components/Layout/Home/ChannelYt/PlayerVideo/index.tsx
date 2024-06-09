"use client";

import Youtube from "react-youtube";

type PropsTypes = {
  youtubeId: string;
};

const VideoPlayer = (props: PropsTypes) => {
  const { youtubeId } = props;
  const option = {
    width: 300,
    height: 160,
  };
  return (
    <div className="">
      <Youtube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
};

export default VideoPlayer;

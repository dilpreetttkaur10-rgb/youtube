"use client";

import React from "react";
import Videocard from "./videocard";

const Videogrid = () => {
  const videos = [
    {
      _id: "1",
      videotitle: "My Video",
      filename: "myvideo.mp4",
      filetype: "video/mp4",
      filepath: "/videos/myvideo.mp4",
      filesize: "Video",
      videochanel: "My Channel",
      Like: 0,
      views: 0,
      uploader: "me",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video: any) => (
        <Videocard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Videogrid;

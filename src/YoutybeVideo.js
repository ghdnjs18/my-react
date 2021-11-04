import React from "react";
import propTypes from "prop-types";

function YoutubeVideo({videoId, videoName, videoLength, videoDescription, videoAuthor, children}) {
    return (
        <div id={videoId}>
            <h1>{videoName} - {(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>author - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>
    )
}
export default YoutubeVideo;

// props 데이터타입 유효성검증 / 맞지않으면 경고로그만 찍어준다.
YoutubeVideo.propTypes = {
    videoId: propTypes.string,
    videoName: propTypes.string,
    videoLength: propTypes.string,
    videoDescription: propTypes.string,
    videoAuthor: propTypes.string
}
YoutubeVideo.defaultProps = {
    videoAuthor: "howon"
}
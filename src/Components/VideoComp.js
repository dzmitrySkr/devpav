import "../Styles/video.css";

function VideoComp({ title, imgUrl, description, layout }) {
  return (
    <div className={layout ? "video_item row" : "video_item "}>
      <img className="video_item_img" src={imgUrl}></img>
      <div className="video_item_about">
        <p className="video_item_title">{title}</p>
        <p className="video_item_description">{description}</p>
      </div>
    </div>
  );
}

export default VideoComp;

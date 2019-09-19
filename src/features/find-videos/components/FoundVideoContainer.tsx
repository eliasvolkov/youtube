import * as React from "react";
import { connect } from "react-redux";
import { FoundVideo } from "./FoundVideo";
import styles from "../../../assets/styles/_FoundVideoContainer.module.scss";

export interface IFoundVideoContainerProps {
  foundVideos: any;
}

class FoundVideoContainer extends React.Component<IFoundVideoContainerProps> {
  public render() {
    const { foundVideos } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          {foundVideos.map((video: any) => {
            return (
              <FoundVideo
                key={video.id.videoId}
                img={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                author={video.snippet.channelTitle}
                description={video.snippet.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState2Props = (state: any) => {
  return {
    foundVideos: state.foundVideos.data
  };
};

export default connect(mapState2Props)(FoundVideoContainer);

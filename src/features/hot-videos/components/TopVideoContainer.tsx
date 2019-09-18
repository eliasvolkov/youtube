import * as React from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../routine";
import { TopVideo } from "./TopVideo";
import styles from "../../../assets/styles/_TopVideoContainer.module.scss";

export interface ITopVideoContainerProps {
  readonly topVideos: object[];
  fetchVideos(): any;
}

type IVideo = {
  id: string;
};

class TopVideoContainer extends React.Component<ITopVideoContainerProps> {
  componentDidMount() {
    this.props.fetchVideos();
  }
  public render() {
    const { topVideos } = this.props;
    return (
      <div>
        {topVideos.length > 0 && (
          <div className={styles.row}>
            {topVideos.map((video: any) => {
              return (
                <div className={styles.cardContainer}>
                  <TopVideo
                    key={video.id}
                    img={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    author={video.snippet.channelTitle}
                    views={video.statistics.viewCount}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapState2Props = (state: any) => {
  return {
    topVideos: state.topVideos.data
  };
};

export default connect(
  mapState2Props,
  { fetchVideos }
)(TopVideoContainer);

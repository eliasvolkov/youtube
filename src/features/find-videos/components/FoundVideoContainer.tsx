import * as React from "react";
import { connect } from "react-redux";
import { FoundVideo } from "./FoundVideo";
import { filterVideos } from "../selector";
import styles from "../../../assets/styles/_FoundVideoContainer.module.scss";
import { Spinner } from "../../../components/Spinner";

export interface IFoundVideoContainerProps {
  foundVideos: any;
  loading: boolean;
}

class FoundVideoContainer extends React.Component<IFoundVideoContainerProps> {
  public render() {
    const { foundVideos, loading } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          {loading ? (
            <Spinner />
          ) : (
            foundVideos.map((video: any) => {
              return (
                <FoundVideo
                  key={video.id.videoId}
                  img={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  author={video.snippet.channelTitle}
                  description={video.snippet.description}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapState2Props = (state: any) => {
  return {
    foundVideos: filterVideos(state.foundVideos.data),
    loading: state.foundVideos.loading
  };
};

export default connect(mapState2Props)(FoundVideoContainer);

import { call, put, takeEvery, takeMaybe, take } from "redux-saga/effects";
import { fetchVideos, fetchVideoById } from "./routine";
import YouTube from "../../shared/api/youtube";

export function* getVideosAsync() {
  try {
    const youtube = new YouTube();
    yield put(fetchVideos.request());
    const videos = yield call(youtube.getVideos);
    yield put(fetchVideos.success(videos));
  } catch (err) {
    yield console.log(err);
    yield put(fetchVideos.failure(err));
  }
}

export function* getVideosStart() {
  yield takeEvery(fetchVideos.TRIGGER, getVideosAsync);
}

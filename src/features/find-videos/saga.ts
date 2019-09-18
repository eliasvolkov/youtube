import { call, put, takeEvery } from "redux-saga/effects";
import { findVideoByTitle } from "./routine";
import YouTube from "../../shared/api/youtube";

export function* getVideoByTitleAsync(action: any) {
  try {
    const youtube = new YouTube();
    yield put(findVideoByTitle.request());
    const videos = yield call(() => youtube.findVideos(action.payload));
    yield put(findVideoByTitle.success(videos));
  } catch (err) {
    yield console.log(err);
    yield put(findVideoByTitle.failure(err));
  }
}

export function* getVideoByTitleStart() {
  yield takeEvery(findVideoByTitle.TRIGGER, getVideoByTitleAsync);
}

import { takeEvery, put, call } from "redux-saga/effects";
import { fetchAlbumFailure, fetchAlbumSuccess } from "../actions/album";

const fetchAlbum = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/albums"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchAlbumSaga() {
  try {
    const data = yield call(fetchAlbum);
    yield put(fetchAlbumSuccess(data));
  } catch (error) {
    yield put(fetchAlbumFailure(error.message));
  }
}

export default function* watchFetchData() {
  yield takeEvery("FETCH_ALBUM_REQUEST", fetchAlbumSaga);
}

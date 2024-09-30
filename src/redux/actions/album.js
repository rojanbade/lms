export const fetchAlbumRequest = () => ({
  type: "FETCH_ALBUM_REQUEST",
});

export const fetchAlbumSuccess = (data) => ({
  type: "FETCH_ALBUM_SUCCESS",
  payload: data,
});

export const fetchAlbumFailure = (error) => ({
  type: "FETCH_ALBUM_FAILURE",
  payload: error,
});

import React from "react";
import Navbar from "../navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbumRequest } from "../../redux/actions/album";

const Album = () => {
  const album = useSelector((state) => state.album.data);
  const dispatch = useDispatch();

  console.log("album response", album);

  return (
    <div>
      <Navbar />
      <div>
        <button
          onClick={() => {
            dispatch(fetchAlbumRequest());
          }}
        >
          Get Album
        </button>

        {album?.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Album;

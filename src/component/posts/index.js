import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../asset/css/post.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const createPost = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        data: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updatePost = () => {};

  const deletePost = () => {};

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="post-header">
        <h1>Posts</h1>
        <div className="buttons">
          <button onClick={createPost}>Create</button>
          <button onClick={updatePost}>Update</button>
          <button onClick={deletePost}>Delete</button>
        </div>
      </div>
      <div className="post-container">
        {posts.map((item) => {
          return (
            <div className="cards">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;

import React from "react";
import "./style.css";

/**
 * @author
 * @function Post
 **/

const Post = (props) => {
  return (
    <article>
      <div className="postTitle">
        <h3>{props.post.title}</h3>
        <small>Posted on {props.post.date}</small>
      </div>

      <p>{props.post.content}</p>
    </article>
  );
};

export default Post;

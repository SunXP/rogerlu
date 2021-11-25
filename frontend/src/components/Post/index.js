import React from "react";
import {formatDistanceToNow} from "date-fns"
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
        <small>Posted on {formatDistanceToNow(new Date(props.post.date))}</small>
      </div>

      <p>{props.post.content}</p>
    </article>
  );
};

export default Post;

import React, {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";
import Post from "./../Post";

/**
 * @author
 * @function PostList
 **/

const PostList = (props) => {
  const getEntries = async () => {
    try {
      const response = await axios("http://localhost:3001/api/notes");
      setPostEntries(response.data);
    }
    catch(err) {
      console.log(err);
    }
    
  }
  
  const [postEntries, setPostEntries] = useState([]);
  useEffect(() => {
    getEntries();

  }, [])
  return (
    <>
      <h2 className="recentPosts">Recent Posts</h2>
      <section className="postList">
        {postEntries.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default PostList;

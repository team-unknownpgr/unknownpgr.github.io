import React from "react";
import { posts, postOrder, categories } from "./meta.json";
import CardDeck from "react-bootstrap/CardDeck";
import Post from "./Post";

class PostListPage extends React.Component {
  render() {
    return (
      <CardDeck className="blog-post-list justify-content-around">
        {postOrder
          .map((post) => {
            let { category } = posts[post];
            if (this.props.filter && this.props.filter !== category)
              return null;
            return <Post {...posts[post]} key={post}></Post>;
          })
          .filter((x) => x)}
      </CardDeck>
    );
  }
}

export default PostListPage;

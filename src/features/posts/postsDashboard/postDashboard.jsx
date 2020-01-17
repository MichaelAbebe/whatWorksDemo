import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import PostList from "../postList/PostList";
import cuid from "cuid";
import { connect } from "react-redux";
import { createPost, updatePost, deletePost } from "../PostActions";

const mapStateToProps = state => ({
  posts: state.posts
});

const actions = {
  createPost,
  deletePost,
  updatePost
};
class postDashboard extends Component {
  handleCreatePost = newPost => {
    newPost.id = cuid();
    newPost.hostPhotoURL = "/assets/user.jpg";
    this.props.createPost(newPost);
  };
  handleUpdatePost = updatedPost => {
    this.props.updatePost(updatedPost);
  };
  handelDeletePost = id => {
    this.props.deletePost(id);
  };

  render() {
    const { posts } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PostList deletePost={this.handelDeletePost} posts={posts} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed </h2>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapStateToProps, actions)(postDashboard);

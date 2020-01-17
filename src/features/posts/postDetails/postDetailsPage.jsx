import React from "react";
import { Grid } from "semantic-ui-react";
import { PostDetailChat } from "./PostDetailChat";
import { PostDetailHeader } from "./PostDetailHeader";
import { PostDetailInfo } from "./PostDetailInfo";
import { PostDetailSidebar } from "./PostDetailSidebar";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  let post = {};
  if (postId && state.posts.length > 0) {
    post = state.posts.filter(post => post.id === postId)[0];
  }
  return {
    post
  };
};
const postDetailsPage = ({post}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <PostDetailHeader post={post} />
        <PostDetailInfo post={post} />
        <PostDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <PostDetailSidebar />
      </Grid.Column>
    </Grid>
  );
};
export default connect(mapStateToProps)(postDetailsPage);

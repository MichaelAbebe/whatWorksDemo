import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import PostList from "../postList/PostList";
import PostForm from "../postForm/postForm";
import cuid from "cuid";

const postsFromDashboard = [
  {
    id: "1",
    hostedBy: "Yonathan ",
    ticker: "DRRX",
    catalyst: "culture",
    date: "2018-03-27",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",

    hostPhotoURL: "https://randomuser.me/api/portraits/men/21.jpg",
    comments: [
      {
        id: "a",
        name: "mikea",
        photoURL: "/assets/user.jpg",
        description: "this is a comment "
      }
    ]
  },
  {
    id: "2",
    hostedBy: "Tom",
    ticker: "URGN",
    catalyst: "Earnings",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    comments: [
      {
        id: "a",

        name: "joni",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget  "
      }
    ]
  }
];

export default class postDashboard extends Component {
  state = {
    posts: postsFromDashboard,
    isOpen: false,
    selectedPost: null
  };
  // handleOpenForm = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };
  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedPost: null
    });
  };
  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  handleCreatePost = newPost => {
    newPost.id = cuid();
    newPost.hostPhotoURL = "/assets/user.jpg";
    this.setState(({ posts }) => ({
      posts: [...posts, newPost],
      isOpen: false,
      selectedPost: null
    }));
  };
  handleUpdatePost = updatedPost => {
    this.setState(({ posts }) => ({
      posts: posts.map(post => {
        if (post.id === updatedPost.id) {
          return { ...updatedPost };
        } else {
          return post;
        }
      }),
      isOpen: false,
      selectedPost: null
    }));
  };
  handelDeletePost=(id)=>{
    this.setState(({posts})=>({
      posts:posts.filter(e=>e.id!==id)
    }))
  }
  handleSelectPost = post => {
    this.setState({
      selectedPost: post,
      isOpen: true
    });
  };
  render() {
    const { posts, isOpen, selectedPost } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PostList deletePost={this.handelDeletePost} posts={posts} selectPost={this.handleSelectPost} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Post Tip"
          />
          {isOpen && (
            <PostForm
              key={selectedPost ? selectedPost.id : 0}
              updatedPost={this.handleUpdatePost}
              selectedPost={selectedPost}
              createPost={this.handleCreatePost}
              cancelOpenForm={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

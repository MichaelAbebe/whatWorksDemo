import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import PostList from "../postList/PostList";
import PostForm from "../postForm/postForm";
import cuid from "cuid";
const postsFromDashboard = [
  {
    id: "1",
    hostedBy: "Mike",
    ticker: "DRRX",
    catalyst: "culture",
    date: "2018-03-27T11:00:00+00:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",

    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    comments: [
      {
        id: "a",
        name: "mikea",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
        description: "this is a comment "
      }
    ]
  },
  {
    id: "2",
    hostedBy: "Tom",
    ticker: "URGN",
    catalyst: "Earnings",
    date: "2018-03-28T14:00:00+00:00",
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
    isOpen: false
  };
  handleOpenForm = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };
  handleCreatePost = newPost => {
    newPost.id = cuid();
    newPost.hostPhotoURL = "/assets/user.jpg";
    this.setState(({ posts }) => ({
      posts: [...posts, newPost],
      isOpen:false
    }));
  };
  render() {
    const { posts, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <PostList posts={posts} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button onClick={this.handleOpenForm} positive content="Post Tip" />
          {isOpen && (
            <PostForm
              createPost={this.handleCreatePost}
              cancelOpenForm={this.handleOpenForm}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

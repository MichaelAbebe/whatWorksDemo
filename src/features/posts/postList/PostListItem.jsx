import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";

import { Link } from "react-router-dom";
import Participants from "./Participant";
export default class PostListItem extends Component {
  state = {
    showComment: false
  };

  HandleShowComment = () => {
    console.log("in");
    this.setState({ showComment: true });
  };
  render() {
    const { post, deletePost } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.hostPhotoURL} />

              <Item.Content>
                <Item.Header>{post.ticker}</Item.Header>
                <Item.Description>Tiped by: {post.hostedBy}</Item.Description>
                <Item.Description>Catalyst: {post.catalyst}</Item.Description>
                <Item.Description>Forcast: {post.forcast}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {post.date}
          </span>
        </Segment>

        <Segment clearing>
          <span>{post.description} </span>
        </Segment>
        <Segment clearing>
          <Button
            onClick={() => deletePost(post.id)}
            size="mini"
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
     
          <Button
            
            size="mini"
            as={Link}
            to={`/posts/${post.id}`}
            color="teal"
            floated="right"
            content="Join"
          />
        </Segment>
        <Segment secondary>
          <List>
            {post.participant &&
              post.participant.map(participant => (
                <Participants key={participant.id} comment={participant} />
              ))}
          </List>
        </Segment>
      </Segment.Group>
    );
  }
}

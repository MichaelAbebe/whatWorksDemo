import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./Comments";
export default class PostListItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{post.ticker}</Item.Header>
                <Item.Description>
                  Tiped by <a>{post.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {post.date} |
           
          </span>
        </Segment>
        
        <Segment clearing>
          <span>{post.description} </span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
        <Segment secondary>
          <List vertical>
            {post.comments.map(comment=>(
              <EventListAttendee key={comment.id} comment={comment} />
            ))}
            </List>
        </Segment>
      </Segment.Group>
    );
  }
}

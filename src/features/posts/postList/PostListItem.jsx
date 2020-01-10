import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import Comments from "./Comments";
export default class PostListItem extends Component {
  state = {
    showComment: false
  };

  HandleShowComment=()=> {
    console.log("in");
    this.setState({ showComment: true });
  }
  render() {
    const { post,deletePost,selectPost  } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.hostPhotoURL} />

              <Item.Content>
                <Item.Header>{post.ticker}</Item.Header>
                <Item.Description>Tiped by {post.hostedBy}</Item.Description>
                <Item.Description>Catalyst {post.catalyst}</Item.Description>
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
             onClick={()=>deletePost(post.id) }
           size='mini'
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
             onClick={()=>selectPost(post) }
           size='mini'
            as="a"
            color="teal"
            floated="right"
            content="Edit"
          />
          </Segment>
          <Segment secondary>
            <List>
              {post.comments &&
                post.comments.map(comment => (
                  <Comments key={comment.id} comment={comment} />
                ))}
            </List>
          </Segment>
       
      </Segment.Group>
    );
  }
}

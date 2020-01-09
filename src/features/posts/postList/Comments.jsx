import React, { Component } from "react";
import {  Item, Image, Segment } from "semantic-ui-react";

export default class Comments extends Component {
  render() {
    const { comment } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Image as="a" size="mini" circular src={comment.photoURL} />
              <Item.Content>
                <Item.Header as="a">{comment.name}</Item.Header>
               
                <Item.Description>{comment.description}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}

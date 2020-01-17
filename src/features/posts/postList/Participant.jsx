import React, { Component } from "react";
import {  Item, Image, Segment } from "semantic-ui-react";

export default class Participants extends Component {
  render() {
    const { participant } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Image as="a" size="mini" circular src={participant.photoURL} />
              <Item.Content>
                <Item.Header as="a">{participant.name}</Item.Header>
               
                <Item.Description>{participant.description}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}

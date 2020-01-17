import React, { Fragment } from "react";
import { Item, Segment, Label } from "semantic-ui-react";

export const PostDetailSidebar = ({ participant }) => {
  // const isHost = false;
  console.log({ participant });
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {participant &&
            participant.map(participant => (
              <Item key={participant.id} style={{ position: "relative" }}>
                <Label
                  style={{ position: "absolute" }}
                  color="orange"
                  ribbon="right"
                >
                  Host
                </Label>
                <Item.Image size="tiny" src="/assets/user.png" />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">{participant.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

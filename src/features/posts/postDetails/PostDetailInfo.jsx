import React from "react";
import { Segment, Grid, Icon} from "semantic-ui-react";

export const PostDetailInfo = ({ post }) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{post.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1} vertical>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>

          <Grid.Column width={15}>
            <span>{post.catalystDate}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{post.forcast}</span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

import React, { Component } from "react";
import { Segment, Form, Button, select } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;

  let post = {
    forcast: "",
    ticker: "",
    catalyst: "",
    date: "",
    description: ""
  };

  if (postId && state.posts.length > 0) {
    post = state.posts.filter(post => post.id === postId)[0];
  }
  return { post };
};
class PostForm extends Component {
  state = { ...this.props.post };

  componentDidMount() {
    if (this.props.selectedPost !== null) {
      this.setState({
        ...this.props.selectedPost
      });
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updatedPost(this.state);
    } else {
      this.props.createPost(this.state);
    }
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render() {
    

    const { ticker, catalyst, date, description } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Forcast</label>
            <select
              name="forcast"
              onChange={this.handleChange}
              value={this.state.forcast}
            >
              <option value="">Select Forcast</option>
              <option value="Bullish">Bullish</option>
              <option value="Bearish">Bearish</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>Ticker</label>
            <input
              name="ticker"
              onChange={this.handleChange}
              value={ticker}
              placeholder="Stock Ticker"
            />
          </Form.Field>
          <Form.Field>
            <label>Catalyst</label>
            <input
              name="catalyst"
              onChange={this.handleChange}
              value={catalyst}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Catalyst Date</label>
            <input
              name="date"
              onChange={this.handleChange}
              value={date}
              type="date"
              placeholder="Catalyst Date"
            />
          </Form.Field>
          <Form.Field>
            <label>Discription</label>
            <textarea
              name="description"
              onChange={this.handleChange}
              value={description}
              placeholder="Description"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default connect(mapStateToProps)(PostForm);

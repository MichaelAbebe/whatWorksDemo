import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const options = [
  { key: "u", text: "Bullish", value: "Bullish" },
  { key: "d", text: "Bearish", value: "Bearish" }
];

export default class PostForm extends Component {
  state = {
    forcast: "",
    ticker: "",
    catalyst: "",
    date: "",
    description: ""
  };

  componentDidMount(){
    if(this.props.selectedPost !== null){
    this.setState({
      ...this.props.selectedPost
    })
  }
}



  handleFormSubmit = evt => {
    evt.preventDefault();
    if(this.state.id){
      this.props.updatedPost(this.state);
    }else{
      this.props.createPost(this.state)
    }
        
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render() {
    const { cancelOpenForm } = this.props;
    const { forcast,ticker, catalyst, date, description } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Forcast</label>
            <Form.Select
              fluid
              name="forcast"
              lable="Forcast"
              placeholder="Select Forcast "
              value={forcast}
              options={options}
              onClick={this.handleChange}
            />
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
          <Button type="button" onClick={cancelOpenForm}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

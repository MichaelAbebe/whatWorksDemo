import React, { Component } from 'react'
import {Segment,Form,Button} from "semantic-ui-react"

export default class EventForm extends Component {
    render() {
        const {cancelOpenForm}=this.props;
        return (
                  <Segment>
                    <Form>
                     
                      <Form.Field>
                        <label>Ticker</label>
                        <input placeholder="Stock Ticker" />
                      </Form.Field>
                      <Form.Field>
                        <label>Catalyst</label>
                        <input placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Catalyst Date</label>
                        <input type="date" placeholder="Catalyst Date" />
                      </Form.Field>      
                      <Form.Field>
                        <label>Discription</label>
                        <textarea placeholder="Discription" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button" onClick={cancelOpenForm}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

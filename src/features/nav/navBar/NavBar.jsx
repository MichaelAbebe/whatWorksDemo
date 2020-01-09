import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export default class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="Assets/logo.png" alt="logo" />
           whatWorks
          </Menu.Item>
          <Menu.Item name="Tips" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Post Tip" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

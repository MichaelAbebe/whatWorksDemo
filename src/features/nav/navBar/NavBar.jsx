import React, { Component } from "react";
import { Menu, Container, Button, Image } from "semantic-ui-react";
import { NavLink, Link,withRouter } from "react-router-dom";
import { SignedOut } from "../Menus/SignedOut";
import { SignedIn } from "../Menus/SignedIn";

 class NavBar extends Component {
  state = {
    authenticated: false
  };
  handleSignIn = () => this.setState({ authenticated: true });
  handleSignOut = () => {
    this.setState({ 
      authenticated: false });
      this.props.history.push('/');
  };
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <Image size="mini" src="Assets/logo.png" alt="logo" />
            whatWorks
          </Menu.Item>
          <Menu.Item as={NavLink} to="/posts" name="Tips" />
          <Menu.Item as={NavLink} to="/people" name="people" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createPost"
              floated="right"
              positive
              inverted
              content="Post Tip"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedIn signOut={this.handleSignOut} />
          ) : (
            <SignedOut signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(NavBar)
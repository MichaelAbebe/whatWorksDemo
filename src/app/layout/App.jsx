import React, { Component, Fragment } from "react";
import PostDashboard from "../../features/posts/postsDashboard/postDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <PostDashboard />
        </Container>
      </Fragment>
    );
  }
}
export default App;

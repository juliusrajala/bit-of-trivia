import * as React from 'react';
import styled from 'styled-components';

const SideDrawer = styled.section`
  position: fixed;
  height: 100vh;
  max-height: 100%;
  top: 0;
  right: -200px;
  width: 200px;
  background-color: #fff;
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 30px;
  color: #2f2f2f;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  transition: .2s all ease-in-out;
`;

class Drawer extends React.Component {
  state = { open: false };

  toggleDrawer() {
    const currentState = this.state.open;
    this.setState({ open: !currentState })
  }

  render() {
    return (
      <SideDrawer>
          Drawer
      </SideDrawer>
    );
  }
}

export default Drawer;
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {

  return (
    <Container>

      <h3 className="title">
        My mono repo for custom components & hooks
      </h3>

      <Menu to="/autohide-navbar">Autohide Navbar</Menu>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;

  .title {
    font-family: 'Yeseva One';
    margin-bottom: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #555;
  }
`

const Menu = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  color: salmon;
  border-bottom: 1px solid transparent;
  transition: 1s;
  &:hover {
    border-bottom: 1px solid #555;
  }
`

export default App;
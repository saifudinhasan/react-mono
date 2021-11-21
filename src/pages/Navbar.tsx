import { Link } from "react-router-dom"
import styled from "styled-components"
import { AutoHideNavbar } from "../components"

const Navbar = (): JSX.Element => {

  return (
    <Container>
      <NavbarContainer height={80} delay={200}>

        <Link to="/" className="nav-brand">Home</Link>
        
        <div className="nav-menu">
          <Link to="/" className="menu">Npm</Link>
          <Link to="/" className="menu">Github</Link>
        </div>
        
      </NavbarContainer>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  min-height: 500vh;
`

const NavbarContainer = styled(AutoHideNavbar)`
  background-color: salmon;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: Arial, Helvetica, sans-serif;

  .nav-brand {
    font-size: 1.3em;
    text-decoration: none;
    color: white;
  }
  
  .nav-menu {
    display: flex;

    .menu {
      color: white;
      padding: 0 10px;
      text-decoration: none;
    }
  }
`
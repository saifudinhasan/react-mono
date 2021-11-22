import { Link } from "react-router-dom"
import styled from "styled-components"
import { AutoHideNavbar } from "../components"

const Navbar = (): JSX.Element => {

  return (
    <Container>
      <NavbarContainer height={80} delay={200}>

        <Link to="/" className="nav-brand">Hello</Link>
        
        <div className="nav-menu">
          <a href="https://www.npmjs.com/package/@saifudinhasan/hooks" target="_blank" rel="noreferrer" className="menu">NPM</a>
          <a href="https://github.com/saifudinhasan/react-mono" target="_blank" rel="noreferrer" className="menu">Github</a>
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
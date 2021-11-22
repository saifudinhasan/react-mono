import { Link } from "react-router-dom"
import styled from "styled-components"
import { AutoHideNavbar } from "@sh4/components"
import './style.css'

const NavbarWithClass = (): JSX.Element => {

  return (
    <Container>
      <AutoHideNavbar 
        height={80} 
        delay={200}
        className="navbar-container"
      >

        <Link to="/" className="nav-brand">Hello</Link>
        
        <div className="nav-menu">
          <a href="https://www.npmjs.com/package/@sh4/components" target="_blank" rel="noreferrer" className="menu">NPM</a>
          <a href="https://github.com/saifudinhasan/react-mono" target="_blank" rel="noreferrer" className="menu">Github</a>
        </div>
        
      </AutoHideNavbar>
    </Container>
  )
}

export default NavbarWithClass

const Container = styled.div`
  min-height: 500vh;
`
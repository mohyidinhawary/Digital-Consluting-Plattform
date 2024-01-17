import nav from "./index"
import { Nav, NavContainer } from "./navbar.style";

export  default function NavBar(){
    return(
        <>
<Nav>
    <NavContainer>
        <nav.NavLogo />
        <nav.NavSections />
        
    </NavContainer>
</Nav>
  </>
    )
}
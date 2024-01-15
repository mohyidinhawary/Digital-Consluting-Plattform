
import NavLogo from "../../components/navbar-logo/navbar-logo.component";
import NavSections from "../../components/navbar-sections/navbar-sections.component";
import { Nav, NavContainer } from "./navbar.style";

export  default function NavBar(){
    return(
        <>
<Nav>
    <NavContainer>
        <NavLogo />
        <NavSections />
        
    </NavContainer>
</Nav>
  </>
    )
}
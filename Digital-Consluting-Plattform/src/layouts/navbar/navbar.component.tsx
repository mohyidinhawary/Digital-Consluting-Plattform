import n from "./index"
import { Nav, NavContainer } from "./navbar.style";

export  default function NavBar(){
    return(
        <>
<Nav>
    <NavContainer>
        <n.NavLogo />
        <n.NavSections />
        
    </NavContainer>
</Nav>
  </>
    )
}
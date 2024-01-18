import { Outlet } from "react-router-dom";
import Footer from "./layouts/footer/footer.component";
import NavBar from "./layouts/navbar/navbar.component";
import SideBar from "./layouts/sidebar/sidebar.component";
import Carousel from "./components/carousel/carousel.component";




function App() {
  return (
    <>
   
    <NavBar />
   
      <Carousel  />
<Footer />

   <Outlet />
    
    

    
   

    </>
    
  );
}

export default App;

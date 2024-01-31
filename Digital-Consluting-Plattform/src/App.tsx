import { Outlet } from "react-router-dom";
import Footer from "./layouts/footer/footer.component";
import NavBar from "./layouts/navbar/navbar.component";

import Carousel from "./components/carousel/carousel.component";
import About from "./components/about/about.component";

function App() {
  return (
    <>
      <NavBar />

      <Carousel />
      <About />
      <Footer />

      <Outlet />
    </>
  );
}

export default App;

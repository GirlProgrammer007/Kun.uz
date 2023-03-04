import Banner from "./components/Banner.js";
import Carousel from "./components/Carousel.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import Next_banner from "./components/Next_banner.js";
import Next_main from "./components/Next_main.js";
import Sub_navbar from "./components/Sub_navbar.js";
import The_end_part from "./components/The_end_part.js";


function App() {
  return (
    <div className="">
      <Navbar />
      <Sub_navbar />
      <Banner />
      <Next_banner />
      <Carousel />
      <Main />
      <Next_main />
      <The_end_part />
      <Footer />
    </div>
  );
}

export default App;

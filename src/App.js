import Cards from "./components/cards.js";
import Carousel from "./components/carousel.js";

import Dummy from "./components/dummy.js";
import Featured from "./components/featured.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Slider from "./components/Slider/Slider.js";
import Top from "./components/top.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Cards />
      <Dummy />
      <Slider />
     <CenterMode/>
      <Slider />
      <CenterMode/>
      <Featured />
      <Footer />
    </div>
  );
}

export default App;

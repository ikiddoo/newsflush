
import Banner from "../components/Banner/Banner";
import MyCarousel from "../components/Carousel/Carousel";
import ImageGrid from "../components/ImageGrid/ImageGrid";

const Home: React.FC = () => (
  <div>
    <MyCarousel />
    <ImageGrid />
    <Banner />
  </div>
);

export default Home;

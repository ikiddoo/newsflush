
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const Technology: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Technology", path: "/technology" }]} />
    <NewsContent
      title="Technology"
      description="Discover the newest trends, gadgets, and innovations in technology."
    />
  </div>
);

export default Technology;

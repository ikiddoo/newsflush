import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";

const Business: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Business", path: "/business" }]} />
    <NewsContent
      title="Business"
      description="Latest updates and insights from the world of business, finance, and the economy."
    />
  </div>
);

export default Business;

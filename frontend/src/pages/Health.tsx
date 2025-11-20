
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const Health: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Health", path: "/health" }]} />
    <NewsContent
      title="Health"
      description="Health news and wellness tips."
    />
  </div>
);

export default Health;

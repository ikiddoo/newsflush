import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const Sports: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Sports", path: "/sports" }]} />
    <NewsContent
      title="Sports"
      description="Latest sports news and updates."
    />
  </div>
);

export default Sports;

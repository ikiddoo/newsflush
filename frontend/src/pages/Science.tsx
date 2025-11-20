
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const Science: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Science", path: "/science" }]} />
    <NewsContent
      title="Science"
      description="Science news and discoveries."
    />
  </div>
);

export default Science;

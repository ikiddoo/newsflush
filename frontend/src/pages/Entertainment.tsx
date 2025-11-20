
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const Entertainment: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Entertainment", path: "/entertainment" }]} />
    <NewsContent
      title="Entertainment"
      description="Entertainment news and celebrity updates."
    />
  </div>
);

export default Entertainment;

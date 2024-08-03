import { useParams } from "react-router-dom";
import CostSharing from "./CostSharing/CostSharing";
import Hiragana from "./Japanese/Hiragana";
import Katakana from "./Japanese/Katakana";


function AppRoute() {
  const { appId } = useParams();

  switch (appId) {
    case "cost-sharing":
      return <CostSharing />;

    case "hiragana":
      return <Hiragana />;

    case "katakana":
      return <Katakana />;

    default:
      return <div>Unknown App</div>;
  }
}

export default AppRoute;

import { useParams } from "react-router-dom";
import CostSharing from "./CostSharing/CostSharing";

function AppRoute() {
  const { appId } = useParams();

  switch (appId) {
    case "cost-sharing":
      return <CostSharing />;

    default:
      return <div>Unknown App</div>;
  }
}

export default AppRoute;

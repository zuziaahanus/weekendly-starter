import { OPlaceDetails } from "@/components/organisms/OPlacesDetails/OPlaceDetails";
import { useParams } from "react-router";

export const VPlaceDetails = () => {
  const { placeId } = useParams();

  return <OPlaceDetails placeId={placeId} />;
};
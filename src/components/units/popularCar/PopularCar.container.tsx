import { useQuery } from "@apollo/client";
import PopularCarUI from "./PopularCar.presenter";
import { FETCH_POPULAR_CARS } from "./PopularCar.queries";

export default function PopularCarPage() {
   const { data } = useQuery(FETCH_POPULAR_CARS);
   return <PopularCarUI data={data} />;
}

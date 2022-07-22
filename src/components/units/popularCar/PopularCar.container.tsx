import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import PopularCarUI from "./PopularCar.presenter";
import { FETCH_POPULAR_CARS } from "./PopularCar.queries";

export default function PopularCarPage({ navigation }) {
   const { data } = useQuery(FETCH_POPULAR_CARS, {
      fetchPolicy: "network-only",
   });

   const [isLoad, setIsLoad] = useState(false);

   useEffect(() => {
      navigation.addListener("focus", () => setIsLoad(true));
      navigation.addListener("blur", () => setIsLoad(false));
   }, []);

   return isLoad && <PopularCarUI data={data} />;
}

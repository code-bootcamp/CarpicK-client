import * as R from "react-native";
import globalStyle from "../../../commons/styles/globalStyle";
import PopularCarItem from "../../commons/popularCarItem/PopularCarItem";
import { IPopularCarUIProps } from "./PopularCar.types";

export default function PopularCarUI(props: IPopularCarUIProps) {
   return (
      <R.ScrollView style={globalStyle.GlobalStyles}>
         {props.data?.fetchPopularCars.map((car: any, index: number) => (
            <PopularCarItem key={car.id} data={car} index={index} />
         ))}
      </R.ScrollView>
   );
}

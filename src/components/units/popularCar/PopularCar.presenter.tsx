import * as R from "react-native";
import globalStyle from "../../../commons/styles/globalStyle";
import PopularCarItem from "../../commons/popularCarItem/PopularCarItem";

const LIST = [
   { name: "여명현", rating: 5, population: 3010 },
   { name: "김효승", rating: 4, population: 2945 },
   { name: "양세희", rating: 3, population: 2001 },
   { name: "이주형", rating: 2, population: 1214 },
   { name: "류연찬", rating: 1, population: 781 },
];

export default function PopularCarUI() {
   return (
      <R.ScrollView style={globalStyle.GlobalStyles}>
         {LIST.map((data, index) => (
            <PopularCarItem key={index} data={data} index={index} />
         ))}
      </R.ScrollView>
   );
}

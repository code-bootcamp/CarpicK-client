import { useQuery } from "@apollo/client";
import License1LaterPageUI from "./License1Later.presenter";
import { FETCH_LOGIN_USER } from "./License1Later.quries";

export default function License1LaterPage({ navigation }) {
   const { data, loading } = useQuery(FETCH_LOGIN_USER);
   console.log("this is data", data);
   const onPressNext = () => {
      navigation.navigate("license2Later");
   };

   return <License1LaterPageUI data={data} onPressNext={onPressNext} />;
}

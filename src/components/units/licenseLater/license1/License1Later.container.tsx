import { useQuery } from "@apollo/client";
import License1LaterPageUI from "./License1Later.presenter";
import { FETCH_LOGIN_USER } from "./License1Later.quries";

export default function License1LaterPage({ navigation }: any) {
   const { data, loading } = useQuery(FETCH_LOGIN_USER, {
      fetchPolicy: "no-cache",
   });

   const onPressNext = () => {
      navigation.navigate("license2Later");
   };

   return (
      !loading && (
         <>
            <License1LaterPageUI data={data} onPressNext={onPressNext} />
         </>
      )
   );
}

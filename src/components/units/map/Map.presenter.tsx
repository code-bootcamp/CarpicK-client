import * as S from "./Map.styles";
import * as R from "react-native";
import globalStyles from "../../../commons/styles/globalStyle";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function MainPageUI(props) {
   return (
      <>
         <S.Wrapper>
            {props.location.latitude !== 0 && (
               <MapView
                  style={{ flex: 1, width: "100%" }}
                  region={props.location}
                  provider={PROVIDER_GOOGLE}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
               />
            )}
         </S.Wrapper>
      </>
   );
}

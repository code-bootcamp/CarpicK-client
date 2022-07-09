import * as S from "./Map.styles";
import * as R from "react-native";
import globalStyles from "../../../commons/styles/globalStyle";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MarkerWithDetails from "./marker/MapMarker";
import React, { useRef, useState } from "react";
import TitleText from "../../commons/text/TitleText";
import BottomSheet from "react-native-simple-bottom-sheet";

export default function MainPageUI(props) {
   return (
      <>
         <S.Wrapper>
            <MapView
               style={{ flex: 1, width: "100%" }}
               initialRegion={{
                  latitude: 37.4848527,
                  longitude: 126.8966316,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.009,
               }}
               // region={props.location}
               provider={PROVIDER_GOOGLE}
               showsUserLocation={true}
               showsMyLocationButton={true}
               moveOnMarkerPress={false}
               onRegionChangeComplete={props.handleRegionChange}
            >
               {props.carLocation.map((location) => (
                  <MarkerWithDetails
                     key={location.id}
                     point={location}
                     onToggle={() =>
                        props?.handleToggle(location.id, location.coordinates)
                     }
                  />
               ))}
            </MapView>

            <BottomSheet
               isOpen={false}
               onOpen={() => props.setIsDrawerOpen(true)}
               onClose={() => props.setIsDrawerOpen(false)}
               animationDuration={150}
               sliderMaxHeight={props.VIEW_HEIGHT * 0.5}
               ref={(ref) => (props.panelRef.current = ref)}
            >
               <R.ScrollView>
                  <R.TouchableOpacity
                     onPress={
                        props.panelRef !== null
                           ? () => props.panelRef.current.togglePanel()
                           : ""
                     }
                  >
                     <TitleText>test</TitleText>
                  </R.TouchableOpacity>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
                  <TitleText>test</TitleText>
               </R.ScrollView>
            </BottomSheet>
         </S.Wrapper>
      </>
   );
}

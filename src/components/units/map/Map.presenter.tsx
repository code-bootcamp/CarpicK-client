import * as S from "./Map.styles";
import * as R from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MarkerWithDetails from "./marker/MapMarker";
import React, { useRef, useState } from "react";
import TitleText from "../../commons/text/TitleText";
import BottomSheet from "react-native-simple-bottom-sheet";
import SubTitleText from "../../commons/text/SubTitleText";
import Contents2Text from "../../commons/text/Contents2Text";
import { numberWithCommas } from "../../../commons/utilities/numberWithCommas";
import Contents1Text from "../../commons/text/Contents1Text";
import { statusBar } from "./statusBar/StatusBar";
import moment from "moment";
const today = moment().format("M/D");
const tommorow =
   today.split("/")[0] + "/" + String(Number(today.split("/")[1]) + 1);

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
               <TitleText fontSize="12">
                  {props.Markers[0].addressDetail}
               </TitleText>
               <Contents2Text>{props.Markers[0].address}</Contents2Text>
               <R.ScrollView style={{ width: "100%" }}>
                  {props.Markers.map((el) => (
                     <S.CarList key={el.id}>
                        <S.CarListBody>
                           <S.CarImage
                              source={el.imageRequire}
                              resizeMode="contain"
                           />
                           <S.CarListTextWrapper>
                              <SubTitleText>{el.carName}</SubTitleText>
                              <Contents2Text color="#d8d8d8">
                                 200 ~ 260원 / km
                              </Contents2Text>
                              <S.CarCostPerHour>
                                 <Contents1Text>
                                    {numberWithCommas(el.costPerHour)}원/시간
                                 </Contents1Text>
                              </S.CarCostPerHour>
                           </S.CarListTextWrapper>
                        </S.CarListBody>
                        <S.CarListFooter>
                           {statusBar(el.reservation)}
                           <S.DateNote>
                              <S.StartDate>{today}</S.StartDate>
                              <S.MiddleHour>12:00</S.MiddleHour>
                              <S.EndDate>{tommorow}</S.EndDate>
                           </S.DateNote>
                        </S.CarListFooter>
                     </S.CarList>
                  ))}
               </R.ScrollView>
            </BottomSheet>
         </S.Wrapper>
      </>
   );
}

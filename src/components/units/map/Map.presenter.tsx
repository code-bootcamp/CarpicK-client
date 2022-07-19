import * as S from "./Map.styles";
import * as R from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React, { useRef, useState } from "react";
import TitleText from "../../commons/text/TitleText";
import BottomSheet from "react-native-simple-bottom-sheet";
import SubTitleText from "../../commons/text/SubTitleText";
import Contents2Text from "../../commons/text/Contents2Text";
import { numberWithCommas } from "../../../commons/utilities/numberWithCommas";
import Contents1Text from "../../commons/text/Contents1Text";
import { statusBar } from "./statusBar/StatusBar";
import moment from "moment";
import MapMarker from "./marker/MapMarker";
const today = moment().format("M/D");
const tommorow =
   today.split("/")[0] + "/" + String(Number(today.split("/")[1]) + 1);

export default function MainPageUI(props) {
   return (
      <>
         <S.Wrapper>
            <MapView
               ref={(ref) => {
                  props.setMapRef(ref);
               }}
               style={{ flex: 1, width: "100%" }}
               initialRegion={{
                  latitude: props.location.latitude, // 37.4848527
                  longitude: props.location.longitude, // 126.8966316
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
               {props.data?.fetchCarLocation.map((el) => (
                  <MapMarker
                     key={el.id}
                     carLocationId={el.id}
                     lat={el.lat}
                     lng={el.lng}
                     isDrawerOpen={props.isDrawerOpen}
                     // onToggle={() => props.handleToggle(el.id)}
                     func={() => props.onPressQuery(el.id)}
                     setCarLocationId={props.setCarLocationId}
                  />
               ))}
            </MapView>
            <BottomSheet
               isOpen={true}
               onOpen={() => props.setIsDrawerOpen(true)}
               onClose={() => props.setIsDrawerOpen(false)}
               animationDuration={150}
               sliderMaxHeight={props.VIEW_HEIGHT * 0.5}
               ref={(ref) => (props.panelRef.current = ref)}
            >
               {!props.loading && (
                  <>
                     <TitleText fontSize="12">
                        {
                           props?.carListData?.fetchCars[0].carLocation
                              .addressDetail
                        }
                     </TitleText>
                     <Contents2Text>
                        {props.carListData?.fetchCars[0].carLocation.address}
                     </Contents2Text>
                     <R.ScrollView style={{ width: "100%" }}>
                        {props.carListData?.fetchCars.map((el) => (
                           <S.CarList
                              key={el.id}
                              testID={el.id}
                              onPress={() => props.onPressToRentProcess(el.id)}
                           >
                              <S.CarListBody>
                                 <S.CarImage
                                    source={{
                                       uri: `https://storage.googleapis.com/${el.imageCar[0].url}`,
                                    }}
                                    resizeMode="contain"
                                 />
                                 <S.CarListTextWrapper>
                                    <SubTitleText>
                                       {el.carModel.name}
                                    </SubTitleText>
                                    <Contents2Text color="#d8d8d8">
                                       200 ~ 260원 / km
                                    </Contents2Text>
                                    <S.CarCostPerHour>
                                       <Contents1Text>
                                          {numberWithCommas(el.price)}원/시간
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
                  </>
               )}
            </BottomSheet>
         </S.Wrapper>
      </>
   );
}

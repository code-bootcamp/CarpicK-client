import * as Location from "expo-location";
import * as R from "react-native";
import { useEffect, useRef, useState } from "react";
import { useApolloClient, useQuery } from "@apollo/client";
import { FETCH_CARS, FETCH_CAR_LOCATION } from "./Map.queries";
import { useIsFocused } from "@react-navigation/native";
import { Linking } from "react-native";
import MapPageUI from "./Map.presenter";
import LoadingCircleLight from "../../commons/loadingCircle/LoadingCircleLight";
import Modal3 from "../../commons/modals/modal3/Modal3";
import Modal4 from "../../commons/modals/modal4/Modal4";

const VIEW_HEIGHT = R.Dimensions.get("window").height;

export default function MapPage({ navigation, route }: any) {
   const client = useApolloClient();
   const isFocused = useIsFocused();
   const [selectedCar, setSelectedCar] = useState<string[]>([]);
   const [carListData, setCarListData] = useState();
   const [loading, setLoading] = useState(true);
   const [location, setLocation] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.004,
      longitudeDelta: 0.009,
   });
   const [, setCarLocationId] = useState();
   const [boundsLocation, setBoundsLocation] = useState({
      south_west_lng: 0,
      north_east_lng: 0,
      south_west_lat: 0,
      north_east_lat: 0,
   });

   const [mapRef, setMapRef] = useState(null);
   const [boundsBox, setBoundsBox] = useState();

   const { data } = useQuery(FETCH_CAR_LOCATION, {
      fetchPolicy: "network-only",
      variables: {
         fetchCarLocationInput: {
            southWestLng: boundsLocation.south_west_lng,
            northEastLng: boundsLocation.north_east_lng,
            southWestLat: boundsLocation.south_west_lat,
            northEastLat: boundsLocation.north_east_lat,
            filter: selectedCar.length === 0 ? null : selectedCar,
         },
      },
      onError: (error: any) => {
         return (
            <Modal4
               title="차량 위치 불러오기 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      },
   });

   const [isReady, setIsReady] = useState(false);
   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const panelRef = useRef(null);

   const onPressToRentProcess = (id: any) => {
      navigation.navigate("rentProcessStack", id);
   };

   const handleRegionChange = async () => {
      setBoundsBox(await mapRef?.getMapBoundaries());
      setBoundsLocation({
         south_west_lng: boundsBox.southWest.longitude,
         north_east_lng: boundsBox.northEast.longitude,
         south_west_lat: boundsBox.southWest.latitude,
         north_east_lat: boundsBox.northEast.latitude,
      });
      if (isDrawerOpen) {
         panelRef.current?.togglePanel();
         setIsDrawerOpen((prev) => !prev);
      }
      setCarListData(null);
   };

   useEffect(() => {
      (async () => {
         setIsReady(false);
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            setMsg(`카픽존을 이용하려면\n 위치 권한승인이 필요합니다!`);
            setOpenModal(true);
            return;
         }

         let location = await Location.getCurrentPositionAsync({});
         setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.004,
            longitudeDelta: 0.009,
         });
         setIsReady(true);
      })();
   }, []);

   useEffect(() => {
      (async () => {
         setBoundsLocation({
            south_west_lng: location.longitude - 0.004,
            north_east_lng: location.longitude + 0.004,
            south_west_lat: location.latitude - 0.006,
            north_east_lat: location.latitude + 0.006,
         });
      })();
   }, [location.latitude]);

   useEffect(() => {
      if (route.params?.selectedCar !== undefined)
         setSelectedCar(route.params?.selectedCar);
   }, [isFocused]);

   const onPressQuery = async (id: any) => {
      try {
         const resultCars = await client.query({
            query: FETCH_CARS,
            variables: {
               carLocationId: id,
            },
            fetchPolicy: "network-only",
         });

         if (!isDrawerOpen && !resultCars.loading) {
            panelRef.current?.togglePanel();
         }

         setCarListData(resultCars.data);
         setLoading(resultCars.loading);
      } catch (error: any) {
         return (
            <Modal4
               title="차량 불러오기 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const handleToggle = (id: any) => {
      setCarLocationId(id);
   };

   const onPressToLinking = async () => {
      setOpenModal(false);
      Linking.openSettings();
   };

   return (
      <>
         {openModal && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={onPressToLinking}
            />
         )}
         {!isReady && <LoadingCircleLight />}
         {isReady && (
            <MapPageUI
               location={location}
               panelRef={panelRef}
               setMapRef={setMapRef}
               VIEW_HEIGHT={VIEW_HEIGHT}
               handleToggle={handleToggle}
               handleRegionChange={handleRegionChange}
               onPressToRentProcess={onPressToRentProcess}
               isDrawerOpen={isDrawerOpen}
               setIsDrawerOpen={setIsDrawerOpen}
               data={data}
               carListData={carListData}
               setCarLocationId={setCarLocationId}
               onPressQuery={onPressQuery}
               loading={loading}
            />
         )}
      </>
   );
}

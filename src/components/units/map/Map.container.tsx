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
   const [isMarkerSelected, setIsMarkerSelected] = useState(false);
   const [selectedLocation, setSelectedLocation] = useState({
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
   // const [south_west_lng, setSouth_west_lng] = useState(); // 127.341198
   // const [north_east_lng, setNorth_east_lng] = useState(); // 127.435044
   // const [south_west_lat, setSouth_west_lat] = useState(); // 36.27663
   // const [north_east_lat, setNorth_east_lat] = useState(); // 36.420513
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
            // southWestLng: south_west_lng,
            // northEastLng: north_east_lng,
            // southWestLat: south_west_lat,
            // northEastLat: north_east_lat,
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

   const handleRegionChange = async (region: any) => {
      setLocation(region);

      setBoundsBox(await mapRef?.getMapBoundaries());
      setBoundsLocation({
         south_west_lng: boundsBox.southWest.longitude,
         north_east_lng: boundsBox.northEast.longitude,
         south_west_lat: boundsBox.southWest.latitude,
         north_east_lat: boundsBox.northEast.latitude,
      });
      // setSouth_west_lng(boundsBox.southWest.longitude);
      // setNorth_east_lng(boundsBox.northEast.longitude);
      // setSouth_west_lat(boundsBox.southWest.latitude);
      // setNorth_east_lat(boundsBox.northEast.latitude);

      // if (!isMarkerSelected) {
      //    if (isDrawerOpen) {
      //       panelRef.current?.togglePanel();
      //       setIsDrawerOpen((prev) => !prev);
      //    }

      //    setCarListData(null);
      // }
   };

   useEffect(() => {
      if (!isMarkerSelected) {
         if (isDrawerOpen) {
            panelRef.current?.togglePanel();
            setIsDrawerOpen((prev) => !prev);
         }

         setCarListData(null);
      }
   }, [isMarkerSelected]);

   useEffect(() => {
      (async () => {
         setIsReady(false);
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            console.log("not granted");
            setMsg(`카픽존을 이용하려면\n 위치 권한승인이 필요합니다!`);
            setOpenModal(true);
            return;
         }
         console.log("granted");
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
         // setSouth_west_lng(location.longitude - 0.004);
         // setNorth_east_lng(location.longitude + 0.004);
         // setSouth_west_lat(location.latitude - 0.006);
         // setNorth_east_lat(location.latitude + 0.006);
      })();
   }, [location.latitude]);

   useEffect(() => {
      if (route.params?.selectedCar !== undefined)
         setSelectedCar(route.params?.selectedCar);
   }, [isFocused]);

   console.log(isMarkerSelected);
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

         setIsMarkerSelected(true);

         setCarListData(resultCars.data);
         setLoading(resultCars.loading);

         setSelectedLocation({
            latitude: resultCars.data.fetchCars[0].carLocation.lat - 0.0025,
            longitude: resultCars.data.fetchCars[0].carLocation.lng,
            latitudeDelta: 0.004,
            longitudeDelta: 0.009,
         });
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
               selectedLocation={selectedLocation}
               setIsMarkerSelected={setIsMarkerSelected}
               isMarkerSelected={isMarkerSelected}
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

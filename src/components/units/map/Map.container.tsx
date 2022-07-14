import MapPageUI from "./Map.presenter";
import * as Location from "expo-location";
import * as R from "react-native";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useApolloClient, useQuery } from "@apollo/client";
import { FETCH_CARS, FETCH_CAR_LOCATION } from "./Map.queries";
import { useIsFocused } from "@react-navigation/native";

const VIEW_HEIGHT = R.Dimensions.get("window").height;

export default function MapPage({ navigation, route }) {
   const client = useApolloClient();
   const isFocused = useIsFocused();
   const [selectedCar, setSelectedCar] = useState<string[]>([]);
   const [dataTest, setCarListData] = useState();
   const [loading, setLoading] = useState(true);
   const [location, setLocation] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.004,
      longitudeDelta: 0.009,
   });
   const [carLocationId, setCarLocationId] = useState();
   const [south_west_lng, setSouth_west_lng] = useState(); // 127.341198
   const [north_east_lng, setNorth_east_lng] = useState(); // 127.435044
   const [south_west_lat, setSouth_west_lat] = useState(); // 36.27663
   const [north_east_lat, setNorth_east_lat] = useState(); // 36.420513
   const [mapRef, setMapRef] = useState(null);
   const [boundsBox, setBoundsBox] = useState();

   const { data, loading: loadingLocation } = useQuery(FETCH_CAR_LOCATION, {
      variables: {
         fetchCarLocationInput: {
            southWestLng: south_west_lng,
            northEastLng: north_east_lng,
            southWestLat: south_west_lat,
            northEastLat: north_east_lat,
            filter: selectedCar,
         },
      },
   });

   // useEffect(() => {
   //    const setInitialBoundsBox = async () => {
   //       setBoundsBox(await mapRef.getMapBoundaries());
   //       setSouth_west_lng(boundsBox.southWest.longitude);
   //       setNorth_east_lng(boundsBox.northEast.longitude);
   //       setSouth_west_lat(boundsBox.southWest.latitude);
   //       setNorth_east_lat(boundsBox.northEast.latitude);
   //    };
   //    setInitialBoundsBox();
   // }, []);

   const [isReady, setIsReady] = useState(false);
   const [errorMsg, setErrorMsg] = useState("");
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const panelRef = useRef(null);

   const onPressToRentProcess = (id) => {
      navigation.navigate("rentProcessStack", id);
   };

   const handleRegionChange = async () => {
      setBoundsBox(await mapRef.getMapBoundaries());
      setSouth_west_lng(boundsBox.southWest.longitude);
      setNorth_east_lng(boundsBox.northEast.longitude);
      setSouth_west_lat(boundsBox.southWest.latitude);
      setNorth_east_lat(boundsBox.northEast.latitude);
      if (isDrawerOpen) {
         panelRef.current.togglePanel();
         setIsDrawerOpen((prev) => !prev);
      }
      setCarListData(null);
   };

   useEffect(() => {
      if (route.params?.selectedCar !== undefined)
         setSelectedCar(route.params?.selectedCar);
   }, [isFocused]);

   console.log("route.params", route.params);
   useEffect(() => {
      (async () => {
         setIsReady(false);
         setSouth_west_lng(location.longitude - 0.004);
         setNorth_east_lng(location.longitude + 0.004);
         setSouth_west_lat(location.latitude - 0.006);
         setNorth_east_lat(location.latitude + 0.006);
         setIsReady(true);
      })();
   }, [location]);

   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            setErrorMsg("카픽존을 이용하려면 위치 권한승인이 필요합니다!");
            return;
         }

         let location = await Location.getCurrentPositionAsync({});
         setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.004,
            longitudeDelta: 0.009,
         });
      })();
   }, []);

   const onPressQuery = async (id) => {
      console.log(id);
      try {
         const resultCars = await client.query({
            query: FETCH_CARS,
            variables: {
               carLocationId: id,
            },
         });
         if (!isDrawerOpen && !resultCars.loading) {
            panelRef.current.togglePanel();
         }

         setCarListData(resultCars.data);
         setLoading(resultCars.loading);
         console.log("resultCars", resultCars);
      } catch (error) {
         console.log("ErrorMsg :", error.message);
      }
   };

   const handleToggle = (id) => {
      setCarLocationId(id);
   };

   // console.log("carListData", data);

   return (
      <>
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
            carListData={dataTest}
            setCarLocationId={setCarLocationId}
            loadingLocation={!loadingLocation}
            onPressQuery={onPressQuery}
            loading={loading}
         />
      </>
   );
}

import MapPageUI from "./Map.presenter";
import * as Location from "expo-location";
import * as R from "react-native";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useApolloClient, useQuery } from "@apollo/client";
import { FETCH_CARS, FETCH_CAR_LOCATION } from "./Map.queries";

const Markers = [
   {
      id: 0,
      title: "first point",
      description: "첫장소",
      coordinates: { lat: 37.4844322, long: 126.89448 },
      showDetails: false,
      imageRequire: require("../../../../assets/test/car-g70.jpeg"),
      carName: "g70",
      address: "서울특별시 구로구 디지털로 300",
      addressDetail: "지밸리 주차장",
      costPerHour: 15000,
      reservation: [
         {
            start_time: "2022-07-12 11:00:00",
            end_time: "2022-07-12 15:00:00",
         },
         {
            start_time: "2022-07-09 18:00:00",
            end_time: "2022-07-10 20:00:00",
         },
      ],
   },
   {
      id: 1,
      title: "second point",
      description: "두번째",
      coordinates: { lat: 37.484852, long: 126.8951168 },
      showDetails: false,
      imageRequire: require("../../../../assets/test/car-k5.jpeg"),
      carName: "k5",
      address: "서울특별시 구로구 디지털로 2700",
      addressDetail: "지상 주차장 1층",
      costPerHour: 10000,
      reservation: [
         {
            start_time: "2022-07-11 16:30:00",
            end_time: "2022-07-11 18:30:00",
         },
         {
            start_time: "2022-07-11 19:30:00",
            end_time: "2022-07-11 22:30:00",
         },
      ],
   },
   {
      id: 2,
      title: "third point",
      description: "마지막장소",
      coordinates: { lat: 37.484852, long: 126.8951168 },
      showDetails: false,
      imageRequire: require("../../../../assets/test/car-avante.jpeg"),
      carName: "avante",
      address: "서울특별시 구로구 디지털로 2700",
      addressDetail: "지상 주차장 1층",
      costPerHour: 9500,
      reservation: [
         {
            start_time: "2022-07-11 16:00:00",
            end_time: "2022-07-11 18:00:00",
         },
         {
            start_time: "2022-07-11 22:00:00",
            end_time: "2022-07-11 24:00:00",
         },
      ],
   },
];

const VIEW_HEIGHT = R.Dimensions.get("window").height;

export default function MapPage({ navigation }) {
   const client = useApolloClient();
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
         },
      },
   });

   const { data: carListData } = useQuery(FETCH_CARS, {
      variables: {
         carLocationId,
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
      console.log(resultCars);
   };

   const handleToggle = (id) => {
      // console.log("this is id", id);
      setCarLocationId(id);
      if (!isDrawerOpen) {
         // panelRef.current.togglePanel();
      }
   };

   const bottomSheetOpen = (id) => {
      setIsDrawerOpen(true);
      setCarLocationId(id);
   };

   // console.log("carListData", carListData?.fetchCars);

   return (
      <>
         {true && (
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
               Markers={Markers}
               data={data}
               carListData={dataTest}
               setCarLocationId={setCarLocationId}
               loadingLocation={!loadingLocation}
               onPressQuery={onPressQuery}
               loading={loading}
            />
         )}
      </>
   );
}

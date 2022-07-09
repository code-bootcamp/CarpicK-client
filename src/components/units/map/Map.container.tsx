import MapPageUI from "./Map.presenter";
import * as Location from "expo-location";
import * as R from "react-native";
import { useEffect, useRef, useState } from "react";
const Markers = [
   {
      id: 0,
      title: "first point",
      description: "첫장소",
      coordinates: { lat: 37.4844322, long: 126.89448 },
      showDetails: false,
   },
   {
      id: 1,
      title: "second point",
      description: "마지막장소",
      coordinates: { lat: 37.484852, long: 126.8951168 },
      showDetails: false,
   },
];

const VIEW_HEIGHT = R.Dimensions.get("window").height;

export default function MapPage({ navigation }) {
   const [location, setLocation] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.004,
      longitudeDelta: 0.009,
   });
   const [south_west_lng, setSouth_west_lng] = useState(127.34119882365631);
   const [north_east_lng, setNorth_east_lng] = useState(127.43504419962248);
   const [south_west_lat, setSouth_west_lat] = useState(36.276630375631854);
   const [north_east_lat, setNorth_east_lat] = useState(36.420513558735344);
   const [coords, setCoords] = useState(null);
   const [mapRef, setMapRef] = useState(null);
   const [boundsBox, setBoundsBox] = useState();
   const [isReady, setIsReady] = useState();
   const [errorMsg, setErrorMsg] = useState("");
   const [mapWidth, setMapWidth] = useState("99%");
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const panelRef = useRef(null);
   const [carLocation, setCarLocation] = useState(Markers);

   const updateMapStyle = () => {
      setMapWidth("100%");
   };
   console.log("this is drawer open: ", isDrawerOpen);
   const handleRegionChange = async (region) => {
      // setBoundsBox(await mapRef.getMapBoundaries());
      // setSouth_west_lng(boundsBox.southWest.longitude);
      // setNorth_east_lng(boundsBox.northEast.longitude);
      // setSouth_west_lat(boundsBox.southWest.latitude);
      // setNorth_east_lat(boundsBox.northEast.latitude);
      if (isDrawerOpen) {
         panelRef.current.togglePanel();
         setIsDrawerOpen((prev) => !prev);
      }
   };

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

   const handleToggle = (id, coords) => {
      if (!isDrawerOpen) {
         panelRef.current.togglePanel();
         setIsDrawerOpen((prev) => !prev);
      }

      setCarLocation((prev) =>
         prev.map((location) =>
            location.id === id
               ? { ...location, showDetails: !location.showDetails }
               : location
         )
      );
      console.log("this is location", carLocation);
      console.log("this is id", id);
      console.log("this is coords", coords);
      // setOpenList(false);
   };

   // console.log("this is coord", location);
   return (
      <MapPageUI
         updateMapStyle={updateMapStyle}
         location={location}
         panelRef={panelRef}
         VIEW_HEIGHT={VIEW_HEIGHT}
         carLocation={carLocation}
         handleToggle={handleToggle}
         handleRegionChange={handleRegionChange}
         setIsDrawerOpen={setIsDrawerOpen}
      />
   );
}

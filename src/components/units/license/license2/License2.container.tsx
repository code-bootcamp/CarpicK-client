import License2PageUI from "./License2.presenter";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import * as R from "react-native";
import { VisionParsing } from "../../../../commons/utilities/visionParsing copy";
import { REACT_APP_GOOGLEVISION_API_KEY } from "@env";

export default function License2Page({ navigation }) {
   let cameraRef = useRef();
   const [hasPermission, setHasPermission] = useState(null);
   const [photo, setPhoto] = useState(null);
   const [visionResult, setVisionResult] = useState("");
   const [licData, setLicData] = useState({
      BirthDate: "",
      Name: "",
      LicNumber: "",
      SpecialNumber: "",
      Fail: "",
   });

   useEffect(() => {
      (async () => {
         const { status } = await Camera.requestCameraPermissionsAsync();
         setHasPermission(status === "granted");
      })();
   }, []);

   if (hasPermission === null) {
      return <R.View />;
   }
   if (hasPermission === false) {
      return <R.Text>No access to camera</R.Text>;
   }

   const callGoogleVIsionApi = async (base64: String) => {
      let url: string =
         "https://vision.googleapis.com/v1/images:annotate?key=" +
         REACT_APP_GOOGLEVISION_API_KEY;
      await fetch(url, {
         method: "POST",
         body: JSON.stringify({
            requests: [
               {
                  image: {
                     content: base64,
                  },
                  features: [{ type: "TEXT_DETECTION" }],
               },
            ],
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            const result = VisionParsing(
               data.responses[0].fullTextAnnotation.text.split("\n")
            );
            console.log(result);
            navigation.navigate("license3", { result });
         })
         .catch((err) => console.log("error : ", err));
   };

   const onPressGoBack = () => {
      console.log("hi");
      navigation.goBack();
   };

   const takePic = async () => {
      console.log("hi");
      let options = {
         quality: 1,
         base64: true,
         exif: false,
      };

      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
      callGoogleVIsionApi(newPhoto.base64);
   };

   return (
      <License2PageUI
         cameraRef={cameraRef}
         onPressGoBack={onPressGoBack}
         takePic={takePic}
      />
   );
}

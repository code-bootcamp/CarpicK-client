import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as R from "react-native";

export const BackArrow = (navigation: any) => {
   return (
      <R.View style={{ paddingLeft: 15 }}>
         <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={Platform.OS === "ios" ? 35 : 24}
            color="#ffffff"
            style={{
               fontSize: 32,
               width: 25,
            }}
            onPress={() => navigation.goBack()}
         />
      </R.View>
   );
};

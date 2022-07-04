import { Ionicons } from "@expo/vector-icons";
import * as R from "react-native";
import { Platform } from "react-native";

export default function NavigationHeaderLeft({ navigation }) {
   return (
      <>
         <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={Platform.OS === "ios" ? 35 : 24}
            color="#ffffff"
            style={
               Platform.OS === "ios"
                  ? {
                       fontSize: 32,
                       width: 25,
                    }
                  : {
                       fontSize: 32,
                       width: 25,
                    }
            }
            onPress={() => {
               navigation.goBack();
            }}
         />
         <R.Text
            style={{
               fontSize: 20,
               color: "white",
               fontFamily: "Regular",
               marginLeft: 20,
            }}
         >
            회원가입
         </R.Text>
      </>
   );
}

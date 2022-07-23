import { Ionicons } from "@expo/vector-icons";
import * as R from "react-native";
import { Platform } from "react-native";

interface INavigationHeaderLeftProps {
   target?: string;
   title?: string;
   color?: string;
}

export default function NavigationHeaderLeft(
   { navigation }: any,
   props: INavigationHeaderLeftProps
) {
   return (
      <>
         <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={Platform.OS === "ios" ? 35 : 24}
            color={props.color}
            style={{
               fontSize: 32,
               width: 25,
            }}
            onPress={
               props.target
                  ? () => {
                       navigation.navigate(props.target);
                    }
                  : () => {
                       navigation.goBack();
                    }
            }
         />
         <R.Text
            style={{
               fontSize: 20,
               color: props.color,
               marginLeft: 20,
               fontWeight: "500",
            }}
         >
            {props.title}
         </R.Text>
      </>
   );
}

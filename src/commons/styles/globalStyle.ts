import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
   AndroidSafeArea: {
      flex: 1,
      backgroundColor: "#F7F8F9",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
   },
   GlobalStyles: {
      paddingLeft: 20,
      paddingRight: 20,
   },
});

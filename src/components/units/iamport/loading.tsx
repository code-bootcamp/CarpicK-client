import { View, Text, StyleSheet } from "react-native";
import LoadingImage from "../../../../assets/loading/loading.svg";
import TitleText from "../../commons/text/TitleText";

export default function Loading() {
   const { container, title } = styles;
   return (
      <View style={container}>
         <View>
            <View style={title}>
               <TitleText>잠시만 기다려주세요. . .</TitleText>
            </View>
            <LoadingImage />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 50,
   },
   title: {
      marginBottom: 100,
   },
});

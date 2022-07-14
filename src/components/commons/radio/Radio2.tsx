import { RadioButton } from "react-native-paper";
import * as R from "react-native";
import colors from "../../../commons/lib/colors";

interface IRadioProps {
   value: string;
   checked: string;
   setChecked: (value: string) => void;
}

export default function Radio2(props: IRadioProps) {
   return (
      <R.View>
         <RadioButton
            value={props.value}
            color={colors.theme}
            status={props.checked === props.value ? "checked" : "unchecked"}
            onPress={() => props.setChecked(props.value)}
         />
      </R.View>
   );
}

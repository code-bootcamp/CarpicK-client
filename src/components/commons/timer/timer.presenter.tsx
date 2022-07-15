import * as R from "react-native";
import Contents1Text from "../text/Contents1Text";
import * as S from "./timer.styles";

export default function TimerUI(props) {
   return (
      <>
         <S.Timerbox>
            <Contents1Text color="#353535" fontSize="14">
               0{props.min} : {props.sec < 10 ? "0" + props.sec : props.sec}
            </Contents1Text>
         </S.Timerbox>
      </>
   );
}

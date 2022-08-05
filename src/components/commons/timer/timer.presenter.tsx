import * as S from "./timer.styles";
import Contents1Text from "../text/Contents1Text";
import { ITimerUIProps } from "./timer.types";

export default function TimerUI(props: ITimerUIProps) {
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

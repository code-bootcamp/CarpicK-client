import * as R from "react-native";
import Contents1Text from "../text/Contents1Text";
import * as S from "./redoButton.styles";

export default function RedoButtonUI({ setOpenRedo }) {
   return (
      <>
         <S.SubTouch onPress={() => setOpenRedo(false)}>
            <Contents1Text color="#353535" fontSize="14">
               다시하기
            </Contents1Text>
         </S.SubTouch>
      </>
   );
}

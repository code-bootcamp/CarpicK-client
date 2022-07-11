/* contents, positive button */

import { useState } from "react";
import { Modal } from "react-native";
import * as S from "../style/Modal.styles";

interface IModal3Props {
   contents: string;
   positiveText: string;
   positive: () => void;
}

export default function Modal3(props: IModal3Props) {
   const [isVisible, setIsVisible] = useState(true);

   const onClickPositive = () => {
      props.positive();
      setIsVisible(false);
   };

   return (
      <Modal
         //animationType='fade'
         //animationType='slide'
         transparent={true}
         visible={isVisible}
      >
         <S.ModalCenteredView>
            <S.ModalView>
               <S.ContentsView>
                  <S.ContentsText>{props.contents}</S.ContentsText>
               </S.ContentsView>
               <S.ButtonsView>
                  <S.PositiveFullButton
                     activeOpacity={0.7}
                     onPress={onClickPositive}
                  >
                     <S.ButtonText>{props.positiveText}</S.ButtonText>
                  </S.PositiveFullButton>
               </S.ButtonsView>
            </S.ModalView>
         </S.ModalCenteredView>
      </Modal>
   );
}

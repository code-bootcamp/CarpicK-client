/* title, contents, positive button */

import { useEffect, useState } from "react";
import { Modal } from "react-native";
import * as S from "../style/Modal.styles";
import * as R from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import colors from "../../../../commons/lib/colors";
import TitleText from "../../text/TitleText";
import Contents1Text from "../../text/Contents1Text";

interface IModal5Props {
   startTime: string;
   endTime: string;
   positiveText: string;
   negativeText: string;
   positive: () => void;
   negative: () => void;
}

export default function Modal5(props: IModal5Props) {
   const [isVisible, setIsVisible] = useState(true);
   const [arr, setArr] = useState([]);

   useEffect(() => {
      genValidTime(startHour);
   }, []);

   const onClickPositive = () => {
      props.positive();
      setIsVisible(false);
   };

   const onClickNegative = () => {
      props.negative();
      setIsVisible(false);
   };

   const startTime = props.startTime;
   const endTime = props.endTime;

   const startHour = startTime.split(":")[0];
   const startMin = startTime.split(":")[1];

   const endHour = endTime.split(":")[0];
   const endMin = endTime.split(":")[1];

   console.log(startHour + ":" + startMin, endHour + ":" + endMin);
   console.log("this is test", endHour[1]);

   const genValidTime = (startHour) => {
      if (startHour[0] === "0") {
         const tmp = Number(startHour[1]);
         const arr = [];

         for (let i = tmp; i <= 24; i++) {
            arr.push(String(i).padStart(2, "0"));
         }
         setArr(arr);
      } else {
         const tmp = Number(startHour);
         const arr = [];

         for (let i = 0; i <= tmp; i++) {
            arr.push(String(i));
         }
         setArr(arr);
      }
   };
   console.log("this is arr", arr);

   return (
      <Modal
         //animationType='fade'
         //animationType='slide'
         transparent={true}
         visible={isVisible}
      >
         <S.ModalCenteredView>
            <S.ModalView>
               <S.TimeContentsView>
                  <S.TitleView>
                     <S.TitleText>시작시간</S.TitleText>
                  </S.TitleView>
                  <S.TitleView>
                     <S.TitleText>반납시간</S.TitleText>
                  </S.TitleView>
               </S.TimeContentsView>
               <R.View style={{ flexDirection: "row" }}>
                  <S.TimePickerView />
                  <ScrollPicker
                     dataSource={arr}
                     selectedIndex={
                        startHour[1][0] !== "0"
                           ? Number(startHour[1][0])
                           : Number(startHour[1])
                     }
                     renderItem={(data, index) => {
                        return (
                           <R.View>
                              <Contents1Text fontSize="20" color={colors.theme}>
                                 {data}
                              </Contents1Text>
                           </R.View>
                        );
                     }}
                     onValueChange={(data, selectedIndex) => {
                        //
                     }}
                     wrapperHeight={180}
                     wrapperColor="#fff"
                     itemHeight={60}
                     highlightColor="#d8d8d8"
                     highlightBorderWidth={2}
                  />
                  <S.TimePickerMiddleView>
                     <TitleText>:</TitleText>
                  </S.TimePickerMiddleView>
                  <ScrollPicker
                     dataSource={["00", "10", "20", "30", "40", "50", "60"]}
                     selectedIndex={Number(startMin[0])}
                     renderItem={(data, index) => {
                        return (
                           <R.View>
                              <Contents1Text fontSize="20" color={colors.theme}>
                                 {data}
                              </Contents1Text>
                           </R.View>
                        );
                     }}
                     onValueChange={(data, selectedIndex) => {
                        //
                     }}
                     wrapperHeight={180}
                     wrapperColor="#fff"
                     itemHeight={60}
                     highlightColor="#d8d8d8"
                     highlightBorderWidth={2}
                  />
                  <S.TimePickerMiddleView />
                  <ScrollPicker
                     dataSource={arr}
                     selectedIndex={
                        endHour[1][0] !== "0"
                           ? Number(endHour[1][0])
                           : Number(endHour[1])
                     }
                     renderItem={(data, index) => {
                        return (
                           <R.View>
                              <Contents1Text fontSize="20" color={colors.theme}>
                                 {data}
                              </Contents1Text>
                           </R.View>
                        );
                     }}
                     onValueChange={(data, selectedIndex) => {
                        //
                     }}
                     wrapperHeight={180}
                     wrapperColor="#fff"
                     itemHeight={60}
                     highlightColor="#d8d8d8"
                     highlightBorderWidth={2}
                  />
                  <S.TimePickerMiddleView>
                     <TitleText>:</TitleText>
                  </S.TimePickerMiddleView>
                  <ScrollPicker
                     dataSource={["00", "10", "20", "30", "40", "50", "60"]}
                     selectedIndex={Number(endMin[0])}
                     renderItem={(data, index) => {
                        return (
                           <R.View>
                              <Contents1Text fontSize="20" color={colors.theme}>
                                 {data}
                              </Contents1Text>
                           </R.View>
                        );
                     }}
                     onValueChange={(data, selectedIndex) => {
                        //
                     }}
                     wrapperHeight={180}
                     wrapperColor="#fff"
                     itemHeight={60}
                     highlightColor="#d8d8d8"
                     highlightBorderWidth={2}
                  />
                  <S.TimePickerView />
               </R.View>
               <S.ButtonsView>
                  <S.NegativeButton
                     activeOpacity={0.7}
                     onPress={onClickNegative}
                  >
                     <S.ButtonText>{props.negativeText}</S.ButtonText>
                  </S.NegativeButton>
                  <S.PositiveHalfButton
                     activeOpacity={0.7}
                     onPress={onClickPositive}
                  >
                     <S.ButtonText>{props.positiveText}</S.ButtonText>
                  </S.PositiveHalfButton>
               </S.ButtonsView>
            </S.ModalView>
         </S.ModalCenteredView>
      </Modal>
   );
}

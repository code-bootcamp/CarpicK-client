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
   initialStartTime: String;
   initialEndTime: String;
   startTime: string;
   endTime: string;
   arrHour: [];
   positiveText: string;
   negativeText: string;
   setStartTimeHour: (time: string) => void;
   setStartTimeMin: (time: string) => void;
   setEndTimeHour: (time: string) => void;
   setEndTimeMin: (time: string) => void;
   indexStartHour: number;
   indexEndHour: number;
   positive: () => void;
   negative: () => void;
}

export default function Modal5(props: IModal5Props) {
   const [isVisible, setIsVisible] = useState(true);
   const [arrHour, setArrHour] = useState([]);
   const [tmpStartTimeHour, setTmpStartTimeHour] = useState("");
   const [tmpStartTimeMin, setTmpStartTimeMin] = useState("");
   const [tmpEndTimeHour, setTmpEndTimeHour] = useState("");
   const [tmpEndTimeMin, setTmpEndTimeMin] = useState("");

   useEffect(() => {
      setTmpStartTimeHour(props.startTime.split(":")[0]);
      setTmpStartTimeMin(props.startTime.split(":")[1]);
      setTmpEndTimeHour(props.endTime.split(":")[0]);
      setTmpEndTimeMin(props.endTime.split(":")[1]);
   }, []);

   const onClickPositive = () => {
      props.setStartTimeHour(tmpStartTimeHour);
      props.setStartTimeMin(tmpStartTimeMin);
      props.setEndTimeHour(tmpEndTimeHour);
      props.setEndTimeMin(tmpEndTimeMin);
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

   const initialStartHour = props.initialStartTime.split(":")[0];

   console.log(startHour + ":" + startMin, endHour + ":" + endMin);
   console.log("this is test", endHour[1]);
   console.log("this is startHour", startHour);
   console.log("this is endHour", endHour);
   console.log("this is arr", arrHour);

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
                     dataSource={props.arrHour}
                     selectedIndex={props.indexStartHour}
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
                        setTmpStartTimeHour(data);
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
                        setTmpStartTimeMin(data);
                     }}
                     wrapperHeight={180}
                     wrapperColor="#fff"
                     itemHeight={60}
                     highlightColor="#d8d8d8"
                     highlightBorderWidth={2}
                  />
                  <S.TimePickerMiddleView />
                  <ScrollPicker
                     dataSource={props.arrHour}
                     selectedIndex={props.indexEndHour}
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
                        setTmpEndTimeHour(data);
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
                        setTmpEndTimeMin(data);
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

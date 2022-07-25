import * as R from "react-native";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_RESERVATION, FETCH_LOGIN_USER } from "./Payment.queries";
import IMP from "iamport-react-native";
import moment from "moment";
import Modal3 from "../../commons/modals/modal3/Modal3";
import LoadingCircleLight from "../../commons/loadingCircle/LoadingCircleLight";
import Modal4 from "../../commons/modals/modal4/Modal4";

/* 로딩 컴포넌트를 불러옵니다. */

export default function Payment({ navigation, route }: any) {
   const { data: userData } = useQuery(FETCH_LOGIN_USER);
   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [createReservation] = useMutation(CREATE_RESERVATION);

   /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
   async function callback(rsp: any) {
      if (rsp.imp_success === "true") {
         try {
            const result = await createReservation({
               variables: {
                  paymentInput: {
                     impUid: rsp.imp_uid,
                     amount: route.params.amount,
                     paymentMethod: "card",
                  },
                  createReservationInput: {
                     startTime: moment(route.params.startTime),
                     endTime: moment(route.params.endTime),
                     amount: route.params.amount,
                     carId: route.params.data.id,
                  },
               },
            });
            setMsg("결제 및 예약이 완료되었습니다.");
            setOpenModal(true);
            //   ...,
            // 결제 성공 시 로직,
            //   ...

            // 백엔드에 결제관련 데이터 넘겨주기 (=> 즉, 뮤테이션 실행하기)
            // ex, createPointTransactionOfLoading
         } catch (error: any) {
            return (
               <Modal4
                  title="예약 생성 실패"
                  contents={error.message}
                  positiveText="확인"
                  positive={() => {}}
               />
            );
         }
      } else {
         //   ...,
         // 결제 실패 시 로직,
         //   ...
         alert("결제에 실패했습니다! 다시 시도해 주세요!");
      }
   }

   const onPressToMain = () => {
      setOpenModal(false);
      navigation.replace("mainStack");
   };

   /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
   const data = {
      pg: "nice",
      pay_method: "card",
      name: "카픽대여",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: route.params.amount,
      buyer_name: userData.fetchLoginUser.name,
      buyer_tel: userData.fetchLoginUser.phone,
      buyer_email: userData.fetchLoginUser.email,
      buyer_addr: "none",
      buyer_postcode: "none",
      app_scheme: "carpick",
      escrow: true,
   };

   return (
      <>
         {openModal && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={onPressToMain}
            />
         )}
         <R.View
            style={{
               flex: 1,
               width: "100%",
               height: "100%",
            }}
         >
            <IMP.Payment
               userCode={"imp29986615"} // 가맹점 식별코드
               data={data} // 결제 데이터
               loading={<LoadingCircleLight />}
               callback={callback} // 결제 종료 후 콜백
            />
         </R.View>
      </>
   );
}

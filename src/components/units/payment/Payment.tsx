import React from "react";
import IMP from "iamport-react-native";
import Loading from "./Loading";
import * as R from "react-native";
import { useMutation } from "@apollo/client";
import { gql } from "apollo-boost";

export const CREATE_PAYMENT = gql`
   mutation createPayment($paymentInput: PaymentInput!) {
      createPayment(paymentInput: $paymentInput) {
         id
         impUid
         status
         paymentMethod
      }
   }
`;

/* 로딩 컴포넌트를 불러옵니다. */

export default function Payment({ navigation, route }) {
   console.log("payment params", route.params);
   const [createPayment] = useMutation(CREATE_PAYMENT);
   /* [필수입력] 결제 종료 후, 라우터를 변경하고 결과를 전달합니다. */
   async function callback(rsp) {
      console.log("this is response", rsp);
      if (rsp.imp_success === "true") {
         const result = await createPayment({
            variables: {
               paymentInput: {
                  impUid: rsp.imp_uid,
                  amount: rsp.paid_amount,
                  paymentMethod: rsp.pay_method,
               },
            },
         });

         //   ...,
         // 결제 성공 시 로직,
         //   ...

         // 백엔드에 결제관련 데이터 넘겨주기 (=> 즉, 뮤테이션 실행하기)
         // ex, createPointTransactionOfLoading
      } else {
         //   ...,
         // 결제 실패 시 로직,
         //   ...
         alert("결제에 실패했습니다! 다시 시도해 주세요!");
      }

      navigation.replace("paymentResult", rsp);
   }

   /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
   const data = {
      pg: "nice",
      pay_method: "tosspay",
      name: "아임포트 결제데이터 분석",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: route.params.amount,
      buyer_name: "홍길동",
      buyer_tel: "01012345678",
      buyer_email: "example@naver.com",
      buyer_addr: "서울시 강남구 신사동 661-16",
      buyer_postcode: "06018",
      app_scheme: "carpick",
      escrow: false,
   };

   return (
      <R.View
         style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "red",
         }}
      >
         <IMP.Payment
            userCode={"imp29986615"} // 가맹점 식별코드
            data={data} // 결제 데이터
            loading={<Loading />}
            callback={callback} // 결제 종료 후 콜백
         />
      </R.View>
   );
}

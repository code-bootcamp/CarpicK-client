import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import License3PageUI from "./License3.presenter";
import { CHECK_LICENSE, CREATE_USER } from "./Lisense3.quries";

export default function License3Page({ navigation, route }) {
   const [data3, setData3] = useState({});
   const [uri, setUri] = useState();
   const [specialNumber, setSpecialNumber] = useState({});
   const [msg, setMsg] = useState("");
   const [isAuth, setIsAuth] = useState(false);
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openSubmitButton, setOpenSubmitButton] = useState(false);
   const [checkLicense] = useMutation(CHECK_LICENSE);
   const [createUser] = useMutation(CREATE_USER);
   console.log("this is params 3", route.params);

   useEffect(() => {
      setData3({
         ...route.params.data2,
      });
      setSpecialNumber(route.params.result.SpecialNumber);
      setUri(route.params.uri);
   }, []);

   const onPressGoback = () => {
      navigation.navigate("license2");
      route.params.setIsPhoto(false);
   };

   const onPressCheckLisense = async () => {
      const { Fail, SpecialNumber, ...rest } = route.params.result;
      console.log({ ...rest, SpecialNumber: specialNumber });
      if (
         route.params.result.BirthDate &&
         route.params.result.LicNumber &&
         route.params.result.Name &&
         specialNumber
      ) {
         const result = await checkLicense({
            variables: { ...rest, SpecialNumber: specialNumber },
         });
         console.log(
            "this is police return",
            JSON.parse(result.data.checkLicense)
         );
         const policeReturn = JSON.parse(result.data.checkLicense);
         if (
            policeReturn.Status === "OK" &&
            policeReturn.StatusSeq === 0 &&
            policeReturn.Message.includes("식별번호가 일치합니다.")
         ) {
            setMsg("면허인증이 완료 되었습니다.");
            setIsAuth(true);
            setOpenModal1(true);
            setOpenSubmitButton(true);
         } else {
            setMsg("면허인증에 실패하였습니다.\n다시 인증해주세요.");
            setOpenModal1(true);
         }
      } else {
         setMsg("면허증 정보를 다시 확인해주세요.");
         setOpenModal1(true);
      }
   };

   const onPressSubmit = async () => {
      try {
         const result = await createUser({
            variables: {
               createUserInput: {
                  email: data3.email,
                  name: data3.name,
                  password: data3.password,
                  phone: data3.phone,
                  isAuth,
               },
            },
         });
         setMsg("회원가입이 완료되었습니다.");
         setOpenModal2(true);
         console.log("this is result", result);
      } catch (error) {
         console.log("this is error", error);
      }
   };

   const onPressToLogin = () => {
      setOpenModal2(false);
      navigation.navigate("login");
   };

   return (
      <>
         {openModal1 && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={() => setOpenModal1(false)}
            />
         )}
         {openModal2 && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={onPressToLogin}
            />
         )}
         <License3PageUI
            result={route.params.result}
            base64={route.params.base64}
            openSubmitButton={openSubmitButton}
            onPressGoback={onPressGoback}
            onPressCheckLisense={onPressCheckLisense}
            onPressSubmit={onPressSubmit}
            setSpecialNumber={setSpecialNumber}
            uri={uri}
         />
      </>
   );
}

const locationNum = {
   11: "서울",
   12: "부산",
   13: "경기",
   14: "강원",
   15: "충북",
   16: "충남",
   17: "전북",
   18: "전남",
   19: "경북",
   20: "경남",
   21: "제주",
   22: "대구",
   23: "인천",
   24: "광주",
   25: "대전",
   26: "울산",
   28: "없음",
};

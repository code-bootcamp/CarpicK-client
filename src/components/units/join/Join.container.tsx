import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ISVALID_EMAIL, SEND_SMS, CHECK_TOKEN } from "./Join.queries";
import JoinPageUI from "./Join.presenter";
import Modal3 from "../../commons/modals/modal3/Modal3";
import Modal4 from "../../commons/modals/modal4/Modal4";

export default function JoinPage({ navigation }: any) {
   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [openTimer, setOpenTimer] = useState(false);
   const [openRedo, setOpenRedo] = useState(false);

   const [passwordAgain, setPasswordAgain] = useState("");
   const [token, setToken] = useState("");
   const [isValidEmail, setIsValidEmail] = useState(false);
   const [isValidPhone, setIsValidPhone] = useState(false);

   const [checkEmail] = useMutation(ISVALID_EMAIL);
   const [sendSMS] = useMutation(SEND_SMS);
   const [checkToken] = useMutation(CHECK_TOKEN);

   const { control, handleSubmit, formState, getValues, watch } = useForm({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {
         email: "",
         phone: "",
         name: "",
         password: "",
         passwordAgain: "",
      },
   });

   useEffect(() => {
      if (isValidEmail && watch("email")) setIsValidEmail(false);
   }, [watch("email")]);

   useEffect(() => {
      if (isValidPhone && watch("phone")) setIsValidPhone(false);
   }, [watch("phone")]);

   useEffect(() => {
      setPasswordAgain(getValues("passwordAgain"));
   }, [watch("passwordAgain")]);

   const onPressCheckEmail = async () => {
      if (formState.errors.email || !getValues("email")) return;

      try {
         const result = await checkEmail({
            variables: {
               email: getValues("email"),
            },
         });

         if (result.data.isValidEmail.isValid) {
            setMsg("사용가능한 이메일 입니다.");
            setOpenModal(true);
            setIsValidEmail(true);
         }

         if (!result.data.isValidEmail.isValid) {
            setMsg("이미 사용중인 아이디입니다.");
            setOpenModal(true);
         }
      } catch (error: any) {
         return (
            <Modal4
               title="이메일 검사 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const onPressSMS = async () => {
      if (!getValues("phone")) return;
      setOpenTimer(true);
      setMsg("3분 이내에 인증번호를 입력해주세요.");
      setOpenModal(true);
      try {
         const result = await sendSMS({
            variables: {
               phone: getValues("phone").split("-").join(""),
            },
         });
         console.log("인증번호 : ", result);
      } catch (error: any) {
         return (
            <Modal4
               title="인증번호 전송 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const onPressCheckPhoneTruthNum = async () => {
      if (!token) return;

      const result = await checkToken({
         variables: {
            token,
         },
      });

      if (result.data.checkToken) {
         setOpenTimer(false);
         setIsValidPhone(true);
         setMsg("인증이 완료되었습니다.");
         setOpenModal(true);
         setOpenRedo(false);
      } else {
         setMsg("인증번호가 일치하지 않습니다.");
         setOpenModal(true);
      }
   };

   const onPressNext = () => {
      if (getValues("password") !== getValues("passwordAgain")) {
         setMsg(`비밀번호가 서로다릅니다.\n다시확인해주세요`);
         setOpenModal(true);
      }
      if (
         isValidEmail &&
         getValues("password") === getValues("passwordAgain")
      ) {
         navigation.navigate("license1", getValues());
      }
   };

   return (
      <>
         {openModal && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={() => setOpenModal(false)}
            />
         )}
         <JoinPageUI
            openTimer={openTimer}
            openRedo={openRedo}
            setOpenRedo={setOpenRedo}
            setOpenTimer={setOpenTimer}
            isValidEmail={isValidEmail}
            isValidPhone={isValidPhone}
            onPressNext={onPressNext}
            onPressCheckEmail={onPressCheckEmail}
            onPressSMS={onPressSMS}
            onPressCheckPhoneTruthNum={onPressCheckPhoneTruthNum}
            control={control}
            handleSubmit={handleSubmit}
            formState={formState}
            setToken={setToken}
            passwordAgain={passwordAgain}
         />
      </>
   );
}

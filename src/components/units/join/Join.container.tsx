import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ISVALID_EMAIL, CREATE_USER, SEND_SMS } from "./Join.queries";
import JoinPageUI from "./Join.presenter";
import Modal3 from "../../commons/modals/modal3/Modal3";

export default function JoinPage({ navigation }) {
   const [openModal, setOpenModal] = useState(false);
   const [msg, setMsg] = useState("");
   const [phoneTruthNum, setPhoneTruthNum] = useState("");
   const [isCheckPhone, setIsCheckPhone] = useState(false);
   const [isValidEmail, setIsValidEmail] = useState(false);
   const [isValidPhone, setIsValidPhone] = useState(false);

   const [createUser] = useMutation(CREATE_USER);
   const [checkEmail] = useMutation(ISVALID_EMAIL);
   const [sendSMS] = useMutation(SEND_SMS);

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

   const onPressCheckEmail = async () => {
      if (formState.errors.email || !getValues("email")) return;

      try {
         const result = await checkEmail({
            variables: {
               email: getValues("email"),
            },
         });
         console.log(result);
         if (result.data.isValidEmail.isValid) {
            setMsg("사용가능한 이메일 입니다.");
            setOpenModal(true);
            setIsValidEmail(true);
         }
         if (!result.data.isValidEmail.isValid) {
            setMsg("이미 사용중인 아이디입니다.");
            setOpenModal(true);
         }
      } catch (error) {
         console.log(error.message);
      }
   };

   const onPressSMS = async () => {
      if (!getValues("phone")) return;
      try {
         const result = await sendSMS({
            variables: {
               phone: getValues("phone").split("-").join(""),
            },
         });
         console.log("this is result", result);
      } catch (error) {
         console.log(error.message);
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
         navigation.navigate("license1");
      }
   };

   const onPressSubmit = async () => {
      try {
         const result = await createUser({
            variables: {
               createUserInput: {
                  email,
                  name,
                  password,
                  phone: phone.split("-").join(""),
               },
            },
         });
         console.log("this is result", result);
      } catch (error) {
         console.log("this is error", error);
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
            isValidEmail={isValidEmail}
            isValidPhone={isValidPhone}
            onPressSubmit={onPressSubmit}
            onPressNext={onPressNext}
            onPressCheckEmail={onPressCheckEmail}
            onPressSMS={onPressSMS}
            control={control}
            handleSubmit={handleSubmit}
            formState={formState}
            setPhoneTruthNum={setPhoneTruthNum}
         />
      </>
   );
}

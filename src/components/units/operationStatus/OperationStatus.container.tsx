import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../commons/modals/modal3/Modal3";
import OperationStatusUI from "./OperationStatus.presenter";
import {
   FETCH_OWNER_RESERVATIONS,
   FETCH_LOGIN_OWNER,
} from "./OperationStatus.queries";

export default function OperationStatusPage({ navigation }: any) {
   const { data, refetch, networkStatus, fetchMore } = useQuery(
      FETCH_OWNER_RESERVATIONS,
      { fetchPolicy: "network-only" }
   );
   const { data: ownerData } = useQuery(FETCH_LOGIN_OWNER);
   const [isLoad, setIsLoad] = useState(false);
   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);

   useEffect(() => {
      navigation.addListener("focus", () => setIsLoad(true));
      navigation.addListener("blur", () => setIsLoad(false));
   }, []);

   useEffect(() => {
      if (ownerData?.fetchLoginOwner.car === null) {
         setMsg(`등록된 마이카가 없습니다.`);
         setOpenModal(true);
      }
   }, [ownerData]);

   const loadFunc = () => {
      if (!data) return;

      fetchMore({
         variables: {
            page: Math.ceil(data.fetchOwnerReservations.length / 10) + 1,
         },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchOwnerReservations)
               return {
                  fetchOwnerReservations: [...prev.fetchOwnerReservations],
               };
            return {
               fetchOwnerReservations: [
                  ...prev.fetchOwnerReservations,
                  ...fetchMoreResult.fetchOwnerReservations,
               ],
            };
         },
      });
   };

   const onPressToMain = () => {
      navigation.navigate("main");
   };

   return (
      <>
         {isLoad && (
            <>
               {openModal && (
                  <Modal3
                     contents={msg}
                     positiveText="확인"
                     positive={() => onPressToMain()}
                  />
               )}
               <OperationStatusUI
                  data={data}
                  ownerData={ownerData}
                  refetch={refetch}
                  loadFunc={loadFunc}
                  networkStatus={networkStatus}
               />
            </>
         )}
      </>
   );
}

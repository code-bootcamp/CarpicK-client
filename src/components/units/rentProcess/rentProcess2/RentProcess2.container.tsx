import { useMutation } from "@apollo/client";
import RentProcess2PageUI from "./RentProcess2.presenter";
import { CREATE_RESERVATION } from "./RentProcess2.queries";
import moment from "moment";

const baseTime = moment().format("YYYY-MM-DD");

export default function RentProcess2Page({ navigation, route }) {
   // console.log("baseTime", baseTime);

   const [createRsrv] = useMutation(CREATE_RESERVATION);

   console.log("this is r2 params", route.params);

   const onPressToPayment = async () => {
      const result = await createRsrv({
         variables: {
            createReservationInput: {
               startTime: moment(
                  baseTime +
                     " " +
                     `${route.params.startTimeHour}:${route.params.startTimeMin}`
               ),
               endTime: moment(
                  baseTime +
                     " " +
                     `${route.params.endTimeHour}:${route.params.endTimeMin}`
               ),
               amount: Math.ceil(
                  route.params.data.fetchCar.price * route.params.TimeTotal
               ),
               carId: route.params.data.fetchCar.id,
            },
         },
      });
      console.log("this is final result", result);
      // navigation.navigate("payment");
      navigation.navigate("main");
   };

   return <RentProcess2PageUI onPressToPayment={onPressToPayment} />;
}

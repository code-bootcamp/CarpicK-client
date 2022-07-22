import { useQuery } from "@apollo/client";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { gql } from "apollo-boost";
import { useEffect, useState } from "react";
import colors from "../../../src/commons/lib/colors";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import CarPickKeyAfter from "../../../src/components/units/carPickKey/after/CarPickKey.after.container";
import CarPickKeyBefore from "../../../src/components/units/carPickKey/before/CarPickKey.before.container";
import CarPickKeyDetail from "../../../src/components/units/carPickKey/detail/CarPickKey.detail.container";
import CarPickKeyUsing from "../../../src/components/units/carPickKey/using/CarPickKey.using.container";

const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         reservation {
            car {
               isAvailable
            }
            status
         }
      }
   }
`;

const Stack = createNativeStackNavigator();

export default function CarPickKeyStack({ navigation }) {
   const { data, loading } = useQuery(FETCH_LOGIN_USER, {
      fetchPolicy: "network-only",
   });
   const [isLoad, setIsLoad] = useState(false);

   useEffect(() => {
      navigation.addListener("focus", () => setIsLoad(true));
      navigation.addListener("blur", () => setIsLoad(false));
   }, []);

   return (
      <>
         {!loading && isLoad && (
            <Stack.Navigator
               screenOptions={{
                  headerShadowVisible: false,
                  headerStyle: { backgroundColor: "#fff" },
                  headerTitleAlign: "center",
                  animation: "slide_from_right",
                  headerTitleStyle: {
                     color: colors.black,
                     fontSize: 15,
                     fontWeight: "500",
                  },
               }}
            >
               {!data?.fetchLoginUser.reservation[0]?.car.isAvailable ? (
                  <>
                     <Stack.Screen
                        name="carPickKeyDetail"
                        component={CarPickKeyDetail}
                        options={() => ({
                           headerShown: true,
                           headerTitle: "예약 상세정보",
                           headerLeft: () =>
                              NavigationHeaderLeft(
                                 { navigation },
                                 "",
                                 "",
                                 "#000"
                              ),
                        })}
                     />
                     <Stack.Screen
                        name="carPickKeyBefore"
                        component={CarPickKeyBefore}
                        options={() => ({
                           headerShown: true,
                           headerTitle: "차량 인수하기",
                           headerLeft: () =>
                              NavigationHeaderLeft(
                                 { navigation },
                                 "carPickKeyDetail",
                                 "",
                                 "#000"
                              ),
                        })}
                     />
                     <Stack.Screen
                        name="carPickKeyUsing"
                        component={CarPickKeyUsing}
                        options={() => ({
                           headerShown: false,
                        })}
                     />
                     <Stack.Screen
                        name="carPickKeyAfter"
                        component={CarPickKeyAfter}
                        options={() => ({
                           headerShown: true,
                           headerTitle: "차량 반납하기",
                           headerLeft: () =>
                              NavigationHeaderLeft(
                                 { navigation },
                                 "",
                                 "",
                                 "#000"
                              ),
                        })}
                     />
                  </>
               ) : (
                  <>
                     <Stack.Screen
                        name="carPickKeyUsing"
                        component={CarPickKeyUsing}
                        options={() => ({
                           headerShown: false,
                        })}
                     />
                     <Stack.Screen
                        name="carPickKeyAfter"
                        component={CarPickKeyAfter}
                        options={() => ({
                           headerShown: true,
                           headerTitle: "차량 반납하기",
                           headerLeft: () =>
                              NavigationHeaderLeft(
                                 { navigation },
                                 "",
                                 "",
                                 "#000"
                              ),
                        })}
                     />
                  </>
               )}
            </Stack.Navigator>
         )}
      </>
   );
}

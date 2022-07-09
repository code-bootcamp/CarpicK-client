import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
   accessTokenState,
   restoreAccessTokenLodable,
} from "../../commons/store/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAuth(navigation) {
   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
   const aaa = useRecoilValueLoadable(restoreAccessTokenLodable);

   useEffect(() => {
      async function accessTokenSet() {
         const result = await AsyncStorage.getItem("accessToken");
         console.log("this is accessToken from storage", result);
         setAccessToken(result || "");
      }
      accessTokenSet();

      if (!accessToken) {
         aaa.toPromise().then((newAccessToken) => {
            console.log("this is newAcessToken", newAccessToken);
            if (!newAccessToken) {
               alert("로그인 후 이용 가능합니다!!!");
               window.location.reload();
               // navigation.navigate("mainStack");
            }
         });
      }
   }, []);
}

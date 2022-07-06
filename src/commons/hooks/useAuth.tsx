import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
   accessTokenState,
   restoreAccessTokenLodable,
} from "../../commons/store/index";

export function useAuth({ navigation }) {
   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
   const aaa = useRecoilValueLoadable(restoreAccessTokenLodable);

   useEffect(() => {
      if (!accessToken) {
         aaa.toPromise().then((newAccessToken) => {
            console.log("this is newAcessToken", newAccessToken);
            if (!newAccessToken) {
               alert("로그인 후 이용 가능합니다!!!");
               navigation.navigate("login");
            }
         });
      }
   }, []);
}

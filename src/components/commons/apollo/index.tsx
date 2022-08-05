import {
   ApolloClient,
   ApolloLink,
   ApolloProvider,
   InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ApolloSetting(props: { children: ReactNode }) {
   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

   useEffect(() => {
      async function accessTokenSet() {
         const result = await AsyncStorage.getItem("accessToken");
         setAccessToken(result || "");
      }
      accessTokenSet();
   }, []);

   const tokkenExpire = async () => {
      await AsyncStorage.removeItem("accessToken");
      setAccessToken("");
   };

   const errorLink = onError(({ graphQLErrors }) => {
      if (graphQLErrors) {
         for (const err of graphQLErrors) {
            if (err.extensions.code === "UNAUTHENTICATED") {
               tokkenExpire();
            }
         }
      }
   });

   const uploadLink = createUploadLink({
      uri: "http://car-pick.shop/graphql",
      headers: { Authorization: `Bearer ${accessToken}` },
      credentials: "include",
   });

   const client = new ApolloClient({
      link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
      cache: new InMemoryCache(),
   });

   return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

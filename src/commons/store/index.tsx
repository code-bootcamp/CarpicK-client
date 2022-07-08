import { atom, selector } from "recoil";
import getAccessToken from "../utilities/getAccessToken";

export const accessTokenState = atom({
   key: "accessTokenState",
   default: "",
});

export const restoreAccessTokenLodable = selector({
   key: "restoreAccessTokenLodable",
   get: async () => {
      const newAccessToken = await getAccessToken();
      return newAccessToken;
   },
});

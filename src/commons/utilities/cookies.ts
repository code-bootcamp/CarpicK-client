import axios from "axios";
import { REACT_APP_GRAPHQL_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
   baseURL: REACT_APP_GRAPHQL_URL,
   withCredentials: true,
});

export const setCookie = (cookie) => {
   axiosInstance.defaults.headers.Cookies = JSON.parse(cookie);
};

export const storeData = async (key, value) => {
   try {
      await AsyncStorage.setItem(key, value);
   } catch (e) {
      console.log(e);
   }
};

export const signIn = async (data) => {
   try {
      const response = await axiosInstance.post("sign/in", data);
      const [cookie] = response.headers["set-cookie"];
      setCookie(JSON.stringify(cookie));
      await storeData("cookie", JSON.stringify(cookie));
      return cookie;
   } catch (e) {
      console.log(e);
      return null;
   }
};

import * as React from "react";
import { WebView } from "react-native-webview";

export default function TermsWebView({ route }: any) {
   return <WebView source={{ uri: route.params.uri }} />;
}

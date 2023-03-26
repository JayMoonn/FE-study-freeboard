import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

// --------------- firebase ---------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJF0BS4-lP6JEly0FF8hez5lBzfF9SovM",
  authDomain: "jaymoon-project-web.firebaseapp.com",
  projectId: "jaymoon-project-web",
  storageBucket: "jaymoon-project-web.appspot.com",
  messagingSenderId: "1060953723603",
  appId: "1:1060953723603:web:8de7236f821720a507fa26",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// ---------------------------------------------

export default function App({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloSetting>
  );
}

// 세팅 파일

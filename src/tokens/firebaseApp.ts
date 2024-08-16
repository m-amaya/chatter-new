import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3ywklHkXQzkGLuOQl7FUJpHjSMBcG-iY",
  authDomain: "chatter-79c00.firebaseapp.com",
  projectId: "chatter-79c00",
  storageBucket: "chatter-79c00.appspot.com",
  messagingSenderId: "472393560143",
  appId: "1:472393560143:web:9f89f4c8ab4149f0807a3a"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

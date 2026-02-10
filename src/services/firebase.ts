import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4rw_vj3vXheaNUG1RYhaMcT2W3TtM6Wk",
  authDomain: "ribeiraocambio.firebaseapp.com",
  projectId: "ribeiraocambio",
  storageBucket: "ribeiraocambio.firebasestorage.app",
  messagingSenderId: "968101998412",
  appId: "1:968101998412:web:e67ba15ed3c86a3af2e9e9",
  measurementId: "G-PJWTJXBR9L",
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Serviços Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Analytics (só funciona no browser)
export let analytics: unknown = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export default app;

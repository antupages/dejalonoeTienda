import { getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjXPh3fu6eHaISTo_AGyoxVMhsmgzBxVg",
  authDomain: "tienda-djn.firebaseapp.com",
  projectId: "tienda-djn",
  storageBucket: "tienda-djn.appspot.com",
  messagingSenderId: "125227259666",
  appId: "1:125227259666:web:34ee0b33e495078d5145cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
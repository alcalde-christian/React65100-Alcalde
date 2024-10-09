import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDJeD5Oqq3aW0WI30V7iuSatObmZTUZesE",
  authDomain: "phonemart-bc0b1.firebaseapp.com",
  projectId: "phonemart-bc0b1",
  storageBucket: "phonemart-bc0b1.appspot.com",
  messagingSenderId: "51974670090",
  appId: "1:51974670090:web:9fbf1cd7eca21234fb1cf3"
};

export const app = initializeApp(firebaseConfig)
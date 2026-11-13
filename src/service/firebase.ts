import { initializeApp } from "firebase/app"
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore"

// localStorage.getItem()
// AsyncStorage.setItem()
// AsyncStorage.getItem()
const firebaseConfig = {
  apiKey: "AIzaSyCjulWrrkW2jzrQhfxiAbQYBUxW2kxSn50",
  authDomain: "to-do-app-2e6f8.firebaseapp.com",
  projectId: "to-do-app-2e6f8",
  storageBucket: "to-do-app-2e6f8.firebasestorage.app",
  messagingSenderId: "229585477520",
  appId: "1:229585477520:web:4b965bd68d973d52785d15"
}

const app = initializeApp(firebaseConfig)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app)

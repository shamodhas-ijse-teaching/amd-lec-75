import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"

export const register = async (email: string, password: string) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password)

  return userCred.user
}
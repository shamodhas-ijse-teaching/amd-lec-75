import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  where
} from "firebase/firestore"
import { db } from "./firebase"
import { getAuth } from "firebase/auth"

const taskCol = collection(db, "tasks")
const auth = getAuth()

export const saveTask = async (
  title: string,
  description: string,
  isComplete: boolean = false
) => {
  //  collection vise
  // tasks_user_01
  // tasks_user_02
  const user = auth.currentUser

  addDoc(taskCol, {
    userId: user?.uid,
    title,
    description,
    isComplete,
    createAt: new Date().toISOString()
  })
}

export const getAllMyTask = async () => {
  const user = auth.currentUser
  if (!user) throw new Error("User not authenticated.")

  const q = query(
    taskCol,
    where("userId", "==", user?.uid),
    orderBy("createAt", "desc")
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => {
    const id = d.id
    const data = d.data()
    return {
      id,
      title: data.title,
      description: data.description,
      isComplete: data.isComplete,
      createAt: data.createAt
    }
  })
}

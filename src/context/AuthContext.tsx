import React, { createContext, useState, useEffect, ReactNode } from "react"
import { onAuthStateChanged, User } from "firebase/auth"
import { useLoader } from "@/hooks/useLoader"
import { auth } from "@/service/firebase"

interface AuthContextType {
  user: User | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { showLoader, hideLoader, isLoading } = useLoader()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    showLoader()
    const unsubcribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr)
      hideLoader()
    })
    return () => unsubcribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

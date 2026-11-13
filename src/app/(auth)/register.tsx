import { View, Text, TextInput, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { register } from "@/service/auth.service"
import { useLoader } from "@/hooks/useLoader"

const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conPassword, setConPassword] = useState("")
  const { showLoader, hideLoader, isLoading } = useLoader()

  const handleRegister = async () => {
    try {
      showLoader()
      await register(email, password)
    } catch (err) {
      console.error(err)
    } finally {
      hideLoader()
    }
  }

  return (
    <View className="flex-1 w-full justify-center items-center">
      <Text>RegisterScreen</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <TextInput value={password} onChangeText={setPassword} />
      <TextInput value={conPassword} onChangeText={setConPassword} />
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen

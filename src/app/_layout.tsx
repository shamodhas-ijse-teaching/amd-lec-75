import { AuthProvider } from "@/context/AuthContext"
import { LoaderProvider } from "@/context/LoaderContext"
import { Slot } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const RootLayout = () => {
  return (
    <LoaderProvider>
      <AuthProvider>
        <SafeAreaView className="flex-1">
          <Slot />
        </SafeAreaView>
      </AuthProvider>
    </LoaderProvider>
  )
}

export default RootLayout

// import { View, Text, TouchableOpacity } from "react-native"
// import React from "react"
// import { Link, Slot, Stack, useRouter } from "expo-router"

// const RootLayout = () => {
//   return (
//     <Stack
//       screenOptions={{
//         animation: "slide_from_right",
//         // headerShown: false
//       }}
//     >
//       <Stack.Screen
//         name="index"
//         options={{
//           title: "Home"
//         }}
//       />
//       <Stack.Screen name="about" />
//       <Stack.Screen name="me" />
//     </Stack>
//   )
// }

// export default RootLayout

// import { View, Text, TouchableOpacity } from "react-native"
// import React from "react"
// import { Link, Slot, useRouter } from "expo-router"

// const RootLayout = () => {
//   const router = useRouter()
//   const navigate = (path: any) => {
//     router.push(path)
//   }
//   return (
//     <View className="flex-1">
//       <Slot />
//       <View className="flex-row mb-10 bg-green-500 justify-evenly">
//         <TouchableOpacity onPress={() => navigate("/")}>
//           <Text>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigate("/about")}>
//           <Text>About</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigate("/me")}>
//           <Text>Me</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigate("/1234")}>
//           <Text>1234</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigate("/hello")}>
//           <Text>Hello</Text>
//         </TouchableOpacity>
//         {/* <Link href={"/about"} className="bg-blue-500">
//           Go to About screen
//         </Link>
//         <Link href={"/me"} className="bg-blue-500">
//           Go to Me screen
//         </Link>
//         <Link href={"/1234"} className="bg-blue-500">
//           Go to 1234 screen
//         </Link>
//         <Link href={"/hello"} className="bg-blue-500">
//           Go to hello screen
//         </Link> */}
//       </View>
//     </View>
//   )
// }

// export default RootLayout

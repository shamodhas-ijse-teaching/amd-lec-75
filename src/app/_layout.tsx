import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { Link, Slot, Stack, Tabs, useRouter } from "expo-router"
import MaterialIcon from "@react-native-vector-icons/material-icons"

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcon
              name={focused ? "home-work" : "home"}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcon
              name={focused ? "airline-seat-flat-angled" : "airline-seat-flat"}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcon
              name={focused ? "accessible" : "accessibility"}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Tabs>
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

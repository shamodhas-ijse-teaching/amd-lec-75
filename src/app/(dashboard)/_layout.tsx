import { Tabs } from "expo-router"
import MaterialIcons from "@react-native-vector-icons/material-icons"

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name={focused ? "home" : "home-filled"}
                size={size}
                color={color}
              />
            )
          }
        }}
      />
      <Tabs.Screen
        name="task"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name={focused ? "list" : "list"}
                size={size}
                color={color}
              />
            )
          }
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name={focused ? "article" : "list-alt"}
                size={size}
                color={color}
              />
            )
          }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name={focused ? "settings" : "settings-applications"}
                size={size}
                color={color}
              />
            )
          }
        }}
      />
    </Tabs>
  )
}

export default DashboardLayout

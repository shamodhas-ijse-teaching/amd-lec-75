import { View, Text } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

const SelectedItem = () => {
  const parms = useLocalSearchParams()
  console.log(parms.id)
  //   [item].tsx -> parms.item
  return (
    <View className="flex-1 w-full">
      <Text>SelectedItem</Text>
      <Text>{parms.id}</Text>
      <Text>{parms.id}</Text>
      <Text>{parms.id}</Text>
      <Text>{parms.id}</Text>
      <Text>{parms.id}</Text>
      <Text>{parms.id}</Text>
      <Text>{parms.id}</Text>
    </View>
  )
}

export default SelectedItem

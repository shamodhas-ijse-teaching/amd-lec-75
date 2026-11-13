import { useRouter } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"

const TasksScreen = () => {
  const router = useRouter()
  return (
    <View className="flex-1 w-full justify-center items-center">
      <Text>TasksScreen</Text>
      <TouchableOpacity onPress={() => router.push("/task/form")}>
        <Text>Add Task</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TasksScreen

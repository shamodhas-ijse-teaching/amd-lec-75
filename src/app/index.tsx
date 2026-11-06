import { useState } from "react"
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native"
import "../global.css"

// flex box is default
// web - row, mobile - col
// div - View
// p, h1, h2... - Text
const index = () => {
  const [text, setText] = useState("")

  const handleClickeMeOnPress = () => {
    Alert.alert("Hello","mobile development")
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <ScrollView style={{ width: "100%" }} className="bg-green-600">
        <TouchableOpacity onPress={handleClickeMeOnPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <Text>Hello, 75</Text>
        <TextInput
          value={text}
          // onChange={(e) => setText(e.target.value)}
          onChangeText={setText}
        />
        {/* <Button></Button> */}

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
          }}
          width={350}
          height={500}
        />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
          }}
          width={350}
          height={500}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    // display:"flex",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    // height: "100vh" no
    // height: "100%" yes
    flex: 1
  }
})

export default index

import { View, Text, FlatList, Image } from "react-native"
import React, { useEffect, useState } from "react"
import { getAllNews } from "@/service/news.sevice"

const NewsScreen = () => {
  const [newsData, setNewsData] = useState([])

  const fetchAllNewsData = async () => {
    try {
      const res = await getAllNews()
      setNewsData(res.articles)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchAllNewsData()
  }, [])

  return (
    <View className="flex-1 w-full justify-center items-center">
      {/* {newsData.map} */}
      <FlatList
        data={newsData}
        renderItem={({ item, index }: any) => (
          <View className="my-2 bg-gray-200 rounded-2 p-5">
            <Image
              source={{ uri: item.urlToImage }}
              className="h-48 w-full"
              resizeMode="cover"
            />
            <Text className="font-bold text-lg">{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default NewsScreen

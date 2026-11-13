// service
// lib
import axios from "axios"

export const getAllNews = async () => {
  const res = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=8ce42a6141194a38bbe18cb8a76af320"
  )
  return res.data
}
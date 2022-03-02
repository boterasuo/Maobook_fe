import { API_URL } from '../utils/config'
import axios from 'axios'

export const getUser = async () => {
  try {
    let result = await axios.get(`${API_URL}/member`, {
      withCredentials: true,
    })
    if (result.data) {
      return '已登入'
    }
  } catch (e) {
    console.error(e.response.data)
    if (e.response.data.code === '9999') {
      // 檢查錯誤碼
      return '未登入'
    }
  }
}

import api from './axios'

// 获取小说列表
export async function getBookData() {
  try {
    const res = await api.get('/api/novel')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// 获取小说人物列表
export async function getRoleData(bookid: any) {
  try {
    const res = await api.get(`/api/novel/${bookid}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// 显示人物信息与对话历史
export async function getRoleInfo(id: any) {
  try {
    const res = await api.get(`/api/novel/character/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

// 开启新对话
export async function newChat(query: string, id: any) {
  try {
    const data = {
      query: query,
      character_id: id
    };
    const res = await api.post(`/api/novel/character/chat`, data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
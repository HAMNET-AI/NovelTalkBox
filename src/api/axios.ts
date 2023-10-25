import Axios from 'axios';

const api = Axios.create({
  timeout: 120000, // 设置请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
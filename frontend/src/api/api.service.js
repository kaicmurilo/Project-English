import api from "./axios.config";


export const fetchMessages = async () => {
  const response = await api.get('/chat');
  return response.data;
};

export const sendMessage = async (message) => {
  const response = await api.post('/chat', { message, promptType: 'continue' });
  return response.data;
};

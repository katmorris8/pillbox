import axios from 'axios';

export default {
  getPills: async () => {
    const response = await axios.get('/api/prescriptions');
    return response.data;
  },
  createPill: async ({ name }) => {
    const response = await axios({
      method: 'post',
      url: '/api/prescriptions',
      data: {
        prescription: { name }
      }
    });
    return response;
  }
};

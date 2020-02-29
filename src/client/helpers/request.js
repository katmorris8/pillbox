import axios from 'axios';

export default {
  getPills: async () => {
    const response = await axios.get('/api/prescriptions');
    return response.data.prescriptions;
  }
};

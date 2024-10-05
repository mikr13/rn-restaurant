import axios from "axios";

const client = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    'Authorization': `Bearer ${process.env.EXPO_PUBLIC_YELP_API_KEY}`,
    'Content-Type': 'application/json'
  }
})

client.interceptors.response.use(
  response => response,
  error => {
    // Handle error globally
    const customError = {
      message: error.response?.data?.message || 'An unexpected error occurred',
      status: error.response?.status || 500,
    };
    return Promise.reject(customError);
  }
);

export { client };

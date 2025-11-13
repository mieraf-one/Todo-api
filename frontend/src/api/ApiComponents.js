import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

async function postRequest({ endPoint, body, headers }) {
    console.log(`${BASE_URL}/${endPoint}/`)

  try {
    const res = await axios.post(
      `${BASE_URL}/${endPoint}/`,
      body,
      { headers }
    );
    return res;
  } catch (error) {
    return error;
  }
}

export default postRequest;
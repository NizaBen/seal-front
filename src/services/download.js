import axios from "./axios";

async function download(filename) {
  try {
    const result = axios.get(
      `http://localhost:4109/api/download?filename=${filename}`
    );
    return result;
  } catch (error) {
    console.log(`Error in getDocs request : ${error.message}`);
  }
}

export default download;

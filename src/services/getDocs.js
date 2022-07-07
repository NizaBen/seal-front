import axios from "./axios";

async function getDocs() {
  try {
    const result = axios.get("http://localhost:4109/api/files");

    return result;
  } catch (error) {
    console.log(`Error in getDocs request : ${error.message}`);
  }
}

export default getDocs;

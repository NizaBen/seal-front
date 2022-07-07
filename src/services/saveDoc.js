import axios from "./axios";

async function saveDoc(data) {
  try {
    const result = axios.post("http://localhost:4109/api/upload", data);

    return result;
  } catch (error) {
    console.log(`Error in getDocs request : ${error.message}`);
  }
}

export default saveDoc;

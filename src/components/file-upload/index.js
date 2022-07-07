import React, { useState } from "react";
import saveDoc from "../../services/saveDoc";
import FileUploader from "./file-uplader/FileUploader";
import "./index.css";

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSelectFile = (file) => {
    setSelectedFile(file);
  };
  const onSave = async () => {
    const data = new FormData();
    data.append("file", selectedFile);
    console.log(selectedFile);
    saveDoc(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="UploadSection">
      <FileUploader setSelectedFile={handleSelectFile} />
      {selectedFile && (
        <div>
          <p>{selectedFile.name}</p>
          <button className="save-doc-btn" onClick={onSave}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadSection;

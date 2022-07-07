import React from "react";
import "./FileUploader.css";
import { RiFileUploadFill } from "react-icons/ri";

const FileUploader = (props) => {
  const { setSelectedFile } = props;

  const hiddenFileInput = React.useRef(null);

  let fileUploaded;

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    fileUploaded = event.target.files[0];
    setSelectedFile(fileUploaded);
  };

  return (
    <div className="FileUploader" id="FileUploader" data-testid="FileUploader">
      <button className="file-button" onClick={handleClick}>
        <RiFileUploadFill color="red" size="250" />
        <span className="upload">Upload</span>
      </button>
      <input
        type="file"
        accept=".pdf,.txt,.doc,.docx,.xlsx,.png,.jpg,.jpeg,.avif"
        ref={hiddenFileInput}
        onChange={handleChange}
        className="file-input"
      />
    </div>
  );
};

export default FileUploader;

import React from "react";
import FileViewer from "react-file-viewer";
import "./DocViewer.css";

const DocView = (props) => {
  const { file, view } = props;
  const docs = [
    {
      uri: file.url
    }
  ];

  const onError = (e) => {
    console.log(e, "error in file-viewer");
  };

  console.log(file.url);
  return (
    <div className="DocViewer" key={file.id}>
      {view && (
        <div className="view">
          <FileViewer fileType={file.type} filePath={file} onError={onError} />
        </div>
      )}
    </div>
  );
};

export default DocView;

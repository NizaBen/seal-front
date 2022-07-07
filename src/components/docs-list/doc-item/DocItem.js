import React, { useState } from "react";
import { RiMailDownloadFill } from "react-icons/ri";
import "./DocItem.css";
import fileDownload from "js-file-download";
import docIcons from "./docIcons";
import download from "../../../services/download";
import DocView from "./doc-viewer/DocViewer";
import CreateLink from "./create-link/CreateLink";

async function __download(filename) {
  const result = await download(filename);

  console.log("downlod res", result);
  return result;
}

const DocItem = (props) => {
  const { docItem } = props;
  const doclink = docIcons[docItem.type];
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };

  const handleDownload = () => {
    (async () => {
      const res = await __download(docItem.name);
      console.log(typeof res.data);
      fileDownload(res.data, `${docItem.name}`);
    })();
  };

  return (
    <div className="DocItem">
      <div className="doc-preview">
        <button className="view-btn" onClick={handleView}>
          {view ? "Hide" : "View"}
        </button>
        <DocView file={docItem} view={view} />
      </div>
      <div className="doc-props">
        <p>{docItem.name}</p>
        <img src={doclink} className="doc-icon" alt={docItem.name} />
        <p>{docItem.uploadDate}</p>
        <p>Downloads: {docItem.downloads} Times</p>

        <button className="file-button" onClick={handleDownload}>
          <RiMailDownloadFill color="red" size="25" />
          <span className="upload">Download</span>
        </button>

        <CreateLink file={docItem} />
      </div>
    </div>
  );
};

export default DocItem;

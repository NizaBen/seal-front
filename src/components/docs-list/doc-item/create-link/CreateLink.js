import React, { useState } from "react";
import "./CreateLink.css";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";
import CopyToClipboard from "@uxui/copy-to-clipboard-react";

const Pane = styled("div")({
  padding: "8px 10px",
  backgroundColor: "#fafafa",
  borderRadius: "3px",
  border: "1px solid #dddddd",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "16px"
});

const Container = styled("div")({
  width: "320px",
  margin: "20px auto"
});

const Tooltip = styled("div")({
  backgroundColor: "#111111",
  color: "#ffffff",
  position: "absolute",
  top: "-25px",
  right: "-10px",
  fontWeight: 600,
  fontSize: "12px",
  padding: "4px 5px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    border: "5px solid transparent",
    borderTopColor: "#111111",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)"
  }
});

const CopyTextIcon = (props) => {
  const { file } = props;
  const [content, setContent] = useState("");
  const handleCreateLink = () => {
    setContent(file.url);
  };
  return (
    <>
      <div>
        <button className="create-link-btn" onClick={handleCreateLink}>
          Create share link
        </button>
      </div>
      <CopyToClipboard>
        {({ copy, copied, turnOffCopied }) => {
          const handleCopy = (e) => {
            if (content && !copied) {
              copy(content);
              setTimeout(() => {
                turnOffCopied();
              }, 1000);
            }
          };

          const copyOnClick = (e) => {
            e.preventDefault();
            handleCopy();
          };

          const copyOnKeyPress = (e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleCopy();
            }
          };

          return (
            <Container>
              <Pane>
                <span>{content}</span>
                <div
                  role="button"
                  onClick={copyOnClick}
                  tabIndex={0}
                  onKeyDown={copyOnKeyPress}
                >
                  <MdContentCopy />
                  {copied && (
                    <Tooltip
                      role="tooltip"
                      aria-describedby="copied ETH address!"
                    >
                      Copied
                    </Tooltip>
                  )}
                </div>
              </Pane>
            </Container>
          );
        }}
      </CopyToClipboard>
    </>
  );
};

export default CopyTextIcon;

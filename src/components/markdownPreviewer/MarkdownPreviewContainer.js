import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
// import MarkdownEditorContainer from "./MarkdownEditorContainer";

function MarkdownPreviewContainer() {
  const [textValue, setTextValue] = useState();

  function textareaChange(event) {
    setTextValue(event.target.value);
  }

  function MarkdownEditorContainer() {
    return (
      <div>
        <textarea
          id="textarea"
          onChange={textareaChange}
          value={textValue}
          autoFocus
        ></textarea>
      </div>
    );
  }

  return (
    <div>
      <MarkdownEditorContainer />
      <ReactMarkdown source={textValue} />
    </div>
  );
}

export default MarkdownPreviewContainer;

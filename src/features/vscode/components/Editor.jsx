import Editor from "@monaco-editor/react";
import PropTypes from "prop-types";
import { useRef } from "react";
import useElementSize from "../../../hooks/useElementSize";

const VSEditor = ({ openingFile }) => {
  const { height, ref } = useElementSize();
  const editorRef = useRef();

  return (
    <main ref={ref} className="flex-1 bg-[#1f1f1f] overflow-y-auto">
      <Editor
        onMount={(e) => (editorRef.current = e)}
        value={openingFile.value}
        height={height || 0 + "px"}
        language={openingFile.lang}
        path={openingFile.name}
        theme="vs-dark"
        saveViewState
        options={{
          minimap: {
            enabled: true,
          },
          fontSize: 12,
          cursorStyle: "block",
          wordWrap: "on",
        }}
      />
    </main>
  );
};

export default VSEditor;

VSEditor.propTypes = {
  openingFile: PropTypes.object,
};

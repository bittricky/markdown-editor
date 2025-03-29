import { FC } from "react";

import EditorHeader from "./EditorHeader";
import MarkdownInput from "./MarkdownInput";
import MarkdownPreview from "./MarkdownPreview";

import { EditorComponentProps } from "../../types/global";

const CoreEditor: FC<EditorComponentProps> = ({
  content,
  onChange,
  preview,
  onTogglePreview,
}) => {
  if (preview) {
    return (
      <div className="flex flex-col flex-1">
        <EditorHeader title="Preview" />
        <MarkdownPreview content={content} />
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="w-1/2 flex flex-col">
        <EditorHeader title="Markdown" />
        <MarkdownInput value={content} onChange={onChange} />
      </div>
      <div className="w-1/2 flex flex-col border-l border-[#1d1f22]">
        <EditorHeader
          title="Preview"
          showPreviewToggle
          isPreview={preview}
          onTogglePreview={onTogglePreview}
        />
        <MarkdownPreview content={content} />
      </div>
    </div>
  );
};

CoreEditor.displayName = "CoreEditor";

export default CoreEditor;

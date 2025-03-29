import { FC } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { EditorProps } from "../types/global";

const Editor: FC<EditorProps> = ({ content, updateDocument, preview }) => {
  const sanitizedHtml = DOMPurify.sanitize(marked(content));

  if (preview) {
    return (
      <div
        className="prose dark:prose-invert max-w-none p-6 h-full overflow-auto"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    );
  }

  return (
    <div className="flex h-full">
      <div className="w-1/2 border-r border-gray-200 dark:border-gray-700">
        <textarea
          value={content}
          onChange={(e) => updateDocument(e.target.value)}
          className="w-full h-full p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none focus:outline-none"
          placeholder="Start writing your markdown here..."
        />
      </div>
      <div className="w-1/2">
        <div
          className="prose dark:prose-invert max-w-none p-6 h-full overflow-auto"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    </div>
  );
};

Editor.displayName = "Editor";

export default Editor;

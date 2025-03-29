import { FC } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { Eye, EyeOff } from "lucide-react";
import { EditorProps } from "../types/global";

const Editor: FC<EditorProps> = ({ content, updateDocument, preview, onTogglePreview }) => {
  const sanitizedHtml = DOMPurify.sanitize(marked(content));

  if (preview) {
    return (
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between bg-gray-100 dark:bg-[#1d1f22] px-4 py-3">
          <h2 className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Preview</h2>
          <button 
            onClick={onTogglePreview}
            className="p-2 hover:bg-gray-200 dark:hover:bg-[#35393f] rounded-md transition-colors"
            aria-label="Hide preview"
          >
            <EyeOff className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <div
          className="prose dark:prose-invert max-w-none p-6 h-full overflow-auto bg-white dark:bg-[#151619]"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full">
      <div className="w-1/2 flex flex-col border-r border-gray-300 dark:border-[#35393f]">
        <div className="flex items-center bg-gray-100 dark:bg-[#1d1f22] px-4 py-3">
          <h2 className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Markdown</h2>
        </div>
        <textarea
          value={content}
          onChange={(e) => updateDocument(e.target.value)}
          className="w-full h-full p-6 bg-white dark:bg-[#151619] text-gray-800 dark:text-gray-300 resize-none focus:outline-none font-mono"
          placeholder="Start writing your markdown here..."
          spellCheck="false"
        />
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="flex items-center justify-between bg-gray-100 dark:bg-[#1d1f22] px-4 py-3">
          <h2 className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Preview</h2>
          <button 
            onClick={onTogglePreview}
            className="p-2 hover:bg-gray-200 dark:hover:bg-[#35393f] rounded-md transition-colors"
            aria-label="Show full preview"
          >
            <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <div
          className="prose dark:prose-invert max-w-none p-6 h-full overflow-auto bg-white dark:bg-[#151619]"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    </div>
  );
};

Editor.displayName = "Editor";

export default Editor;

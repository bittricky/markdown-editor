import { FC } from "react";
import { Eye } from "lucide-react";

import { EditorHeaderProps } from "../../types/global";

const EditorHeader: FC<EditorHeaderProps> = ({
  title,
  showPreviewToggle = false,
  isPreview = false,
  onTogglePreview,
}) => {
  return (
    <div className="bg-[#1d1f22] h-10 flex items-center justify-between px-4">
      <h2 className="text-[#c1c4cb] uppercase text-sm tracking-[2px]">
        {title}
      </h2>
      {showPreviewToggle && onTogglePreview && (
        <button
          onClick={onTogglePreview}
          className="text-[#c1c4cb] hover:text-white flex items-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span className="text-sm">Preview</span>
        </button>
      )}
    </div>
  );
};

EditorHeader.displayName = "EditorHeader";

export default EditorHeader;

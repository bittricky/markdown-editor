import { FC } from "react";
import { Save } from "lucide-react";
import { HeaderProps } from "../../types/global";

const CoreHeader: FC<HeaderProps> = ({ document, onSave }) => {
  return (
    <header className="bg-[#2c2f31] h-14 flex items-center px-4 text-white">
      <div className="flex items-center space-x-4 flex-1">
        <h1 className="font-bold text-sm uppercase tracking-wide">Markdown</h1>
        <div className="h-6 w-[1px] bg-gray-600" />
        <div className="text-sm">
          <p className="text-gray-400 text-xs">Document Name</p>
          <p className="text-gray-200">{document?.name || "welcome.md"}</p>
        </div>
      </div>
      <button
        onClick={onSave}
        className="px-4 py-2 bg-[#e46643] hover:bg-[#f39765] transition-colors rounded flex items-center space-x-2"
      >
        <Save className="w-4 h-4" />
        <span>Save Changes</span>
      </button>
    </header>
  );
};

CoreHeader.displayName = "CoreHeader";

export default CoreHeader;

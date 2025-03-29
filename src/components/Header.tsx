import { FC } from "react";
import { Menu, Sun, Moon, Save } from "lucide-react";

import { HeaderProps } from "../types/global";

const Header: FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  currentDocument,
  onSave,
  toggleSidebar,
}) => {
  return (
    <header className="bg-gray-200 dark:bg-[#2c2f31] h-14 flex items-center justify-between px-4 text-gray-800 dark:text-white">
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-300 dark:hover:bg-[#35393f] rounded-md transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-gray-700 dark:text-white" />
        </button>
        <div className="flex items-center">
          <h1 className="font-bold text-sm uppercase tracking-wide mr-4">Markdown</h1>
          <div className="h-6 w-[1px] bg-gray-400 dark:bg-gray-600 mr-4" />
          <div className="text-sm">
            <p className="text-gray-500 dark:text-gray-400 text-xs">Document Name</p>
            <p className="text-gray-700 dark:text-gray-200">{currentDocument?.name || "welcome.md"}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={onSave}
          className="px-4 py-2 bg-[#e46643] hover:bg-[#f39765] transition-colors rounded flex items-center space-x-2 text-white"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>

        <button
          onClick={toggleDarkMode}
          className="p-2 hover:bg-gray-300 dark:hover:bg-[#35393f] rounded-md transition-colors"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-gray-700 dark:text-white" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 dark:text-white" />
          )}
        </button>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;

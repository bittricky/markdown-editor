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
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {currentDocument?.name || "Markdown Editor"}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

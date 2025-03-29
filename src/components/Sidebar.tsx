import { FC } from "react";
import { Plus, File, Trash2 } from "lucide-react";

import { SidebarProps } from "../types/global";

const Sidebar: FC<SidebarProps> = ({
  documents,
  currentDocument,
  onNewDocument,
  onSelectDocument,
  onDeleteDocument,
  isOpen,
}) => {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-14 bottom-0 left-0 w-64 bg-[#1d1f22] transform transition-transform duration-200 ease-in-out z-10 flex flex-col`}
    >
      <div className="p-6 flex flex-col">
        <h2 className="uppercase text-gray-400 font-medium tracking-widest text-sm mb-6">My Documents</h2>
        <button
          onClick={onNewDocument}
          className="w-full px-4 py-3 bg-[#e46643] hover:bg-[#f39765] transition-colors text-white rounded-md flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">New Document</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {documents && documents.length > 0 ? (
          <div className="px-6 space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={`flex items-center justify-between cursor-pointer group ${
                  currentDocument?.id === doc.id
                    ? "text-[#e46643]"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => onSelectDocument(doc)}
              >
                <div className="flex items-center space-x-3">
                  <File className="w-4 h-4" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500">{new Date(doc.createdAt).toLocaleDateString()}</span>
                    <span className="font-medium">
                      {doc.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteDocument(doc.id);
                  }}
                  className="p-1 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
                  aria-label="Delete document"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 text-center text-gray-500">
            <p>No documents yet</p>
            <p className="text-sm mt-2">Click "New Document" to create one</p>
          </div>
        )}
      </div>
    </aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;

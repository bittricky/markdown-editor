export interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentDocument: Document | null;
  onSave: () => void;
  toggleSidebar: () => void;
}

export interface Document {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface EditorProps {
  content: string;
  preview: boolean;
  updateDocument: (content: string) => void;
  onTogglePreview: () => void;
}

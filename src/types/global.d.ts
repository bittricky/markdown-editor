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

export interface EditorComponentProps {
  content: string;
  onChange: (content: string) => void;
  preview: boolean;
  onTogglePreview: () => void;
}

export interface EditorHeaderProps {
  title: string;
  showPreviewToggle?: boolean;
  isPreview?: boolean;
  onTogglePreview?: () => void;
}

export interface MarkdownPreviewProps {
  content: string;
}

export interface MarkdownInputProps {
  value: string;
  onChange: (value: string) => void;
}

// This interface is already defined above

export interface SidebarProps {
  documents: Document[];
  currentDocument: Document | null;
  onNewDocument: () => void;
  onSelectDocument: (doc: Document) => void;
  onDeleteDocument: (id: string) => void;
  isOpen: boolean;
}

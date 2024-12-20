export interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentDocument: Document | null;
  onSave: () => void;
  toggleSidebar: () => void;
}

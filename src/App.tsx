import { useState, useEffect } from "react";

import useDocument from "./hooks/useDocument";
import { Header, Editor, Sidebar } from "./components";
import { Document } from "./types/global";

function App() {
  const [preview, setPreview] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { 
    documents, 
    currentDocument, 
    setCurrentDocument, 
    updateDocument, 
    saveDocument,
    deleteDocument 
  } = useDocument();
  
  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNewDocument = () => {
    const newDoc: Document = {
      id: `doc-${Date.now()}`,
      name: `untitled-${documents.length + 1}.md`,
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setCurrentDocument(newDoc);
  };

  const handleSelectDocument = (doc: Document) => {
    setCurrentDocument(doc);
  };

  const handleDeleteDocument = (id: string) => {
    deleteDocument(id);
  };

  return (
    <div className="h-screen flex flex-col bg-[#151619]">
      <Header 
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        currentDocument={currentDocument} 
        onSave={saveDocument} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar 
        documents={documents}
        currentDocument={currentDocument}
        onNewDocument={handleNewDocument}
        onSelectDocument={handleSelectDocument}
        onDeleteDocument={handleDeleteDocument}
        isOpen={sidebarOpen}
      />
      <main className={`flex-1 flex overflow-hidden ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-200 ease-in-out`}>
        {currentDocument && (
          <Editor
            content={currentDocument.content}
            updateDocument={updateDocument}
            preview={preview}
            onTogglePreview={() => setPreview(!preview)}
          />
        )}
      </main>
    </div>
  );
}

export default App;

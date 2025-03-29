import { useState } from "react";

import useDocument from "./hooks/useDocument";
import { Header, Editor } from "./components";

function App() {
  const [preview, setPreview] = useState<boolean>(false);
  const { currentDocument, updateDocument, saveDocument } = useDocument();

  return (
    <div className="h-screen flex flex-col bg-[#151619]">
      <Header currentDocument={currentDocument} onSave={saveDocument} />
      <main className="flex-1 flex overflow-hidden">
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

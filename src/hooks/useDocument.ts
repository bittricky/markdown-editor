import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { Document } from "../types/global";

const STARTER_CONTENT = `# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor allows for inline-code snippets, like this: \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:

\`\`\`
<main>
  <h1>This is a larger code block</h1>
</main>
\`\`\``;

const useDocument = () => {
  const [documents, setDocuments] = useLocalStorage<Document[]>(
    "documents",
    []
  );
  const [currentDocument, setCurrentDocument] = useState<Document | null>({
    id: "welcome",
    name: "welcome.md",
    content: STARTER_CONTENT,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  // Initialize documents with welcome document if empty
  useEffect(() => {
    if (documents.length === 0 && currentDocument) {
      setDocuments([currentDocument]);
    } else if (documents.length > 0 && !currentDocument) {
      setCurrentDocument(documents[0]);
    }
  }, [documents, currentDocument, setDocuments]);

  const updateDocument = (content: string) => {
    if (!currentDocument) return;

    const updatedDoc = {
      ...currentDocument,
      content,
      updatedAt: new Date().toISOString(),
    };

    setCurrentDocument(updatedDoc);

    // Update the document in the documents array
    const docExists = documents.some(doc => doc.id === currentDocument.id);
    if (docExists) {
      setDocuments(
        documents.map((doc: Document) =>
          doc.id === currentDocument.id ? updatedDoc : doc
        )
      );
    } else {
      setDocuments([...documents, updatedDoc]);
    }
  };

  const saveDocument = () => {
    if (!currentDocument) return;

    // Check if document already exists in the array
    const docExists = documents.some(doc => doc.id === currentDocument.id);
    
    if (docExists) {
      // Update existing document
      setDocuments(
        documents.map((doc: Document) =>
          doc.id === currentDocument.id ? currentDocument : doc
        )
      );
    } else {
      // Add new document to the array
      setDocuments([...documents, currentDocument]);
    }
  };

  const deleteDocument = (id: string) => {
    // Filter out the document with the given id
    const updatedDocs = documents.filter(doc => doc.id !== id);
    setDocuments(updatedDocs);
    
    // If the current document is being deleted, set the current document to the first one in the list or null
    if (currentDocument && currentDocument.id === id) {
      setCurrentDocument(updatedDocs.length > 0 ? updatedDocs[0] : null);
    }
  };

  return {
    documents,
    currentDocument,
    setCurrentDocument,
    updateDocument,
    saveDocument,
    deleteDocument
  };
};

export default useDocument;

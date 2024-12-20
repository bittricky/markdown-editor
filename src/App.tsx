import { useState } from "react";

import { Header } from "./components";

function App() {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col bg-[#151619]">
      <Header />
      <main className="flex-1 flex overflow-hidden">{/* TODO: Editor */}</main>
    </div>
  );
}

export default App;

import { FC } from "react";

import { MarkdownInputProps } from "../../types/global";

const MarkdownInput: FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full p-4 bg-[#151619] text-white resize-none focus:outline-none font-mono"
      placeholder="# Welcome to Markdown"
    />
  );
};

MarkdownInput.displayName = "MarkdownInput";

export default MarkdownInput;

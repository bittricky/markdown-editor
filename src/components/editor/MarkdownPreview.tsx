import { FC } from "react";
import { renderMarkdown } from "../../utils/markdown";

import { MarkdownPreviewProps } from "../../types/global";

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ content }) => {
  const html = renderMarkdown(content);

  return (
    <div
      className="prose prose-invert max-w-none p-4 h-full overflow-auto bg-[#151619]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

MarkdownPreview.displayName = "MarkdownPreview";

export default MarkdownPreview;

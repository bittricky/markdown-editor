import DOMPurify from "dompurify";
import { marked } from "marked";

export const renderMarkdown = (content: string): string => {
  return DOMPurify.sanitize(marked(content));
};

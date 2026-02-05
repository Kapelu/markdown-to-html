import fs from "fs/promises";
import path from "path";

import ReactMarkdown from "react-markdown";

const README_PATH = path.join(process.cwd(), "CheatSheetGIT.md");

async function getReadmeContent() {
  const content = await fs.readFile(README_PATH, "utf-8");
  return content.replace(/^#\s+/m, "## ");
}

export default async function HomePage() {
  const markdown = await getReadmeContent();

  return (
    <article className="markdown">
      <ReactMarkdown skipHtml={false}>{markdown}</ReactMarkdown>
    </article>
  );
}
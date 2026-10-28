import "./classification.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const noteFiles = import.meta.glob("/public/Notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const paperNotes = Object.entries(noteFiles)
  .map(([path, markdown]) => {
    const filename = path.split("/").pop();
    return {
      filename,
      number: parseInt(filename, 10),
      title: markdown.match(/^#\s+(.+)$/m)?.[1] ?? filename.replace(/\.md$/, ""),
      // The source notes use both dollar and LaTeX-style math delimiters.
      markdown: markdown
        .replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => `$${math}$`)
        // Keep the list indentation: unindented math fences end the list
        // and cause the following figures to be parsed as code blocks.
        .replace(/^( *)\\\[([^\n]*?)\\\][ \t]*$/gm,
          (_, indent, math) => `${indent}$$\n${indent}${math.trim()}\n${indent}$$`)
        .replace(/\\\[([^\n]*?)\\\]/g, (_, math) => `$${math.trim()}$`),
    };
  })
  .sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));

function noteUrl(url) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(url)) return url;
  return `${import.meta.env.BASE_URL}Notes/${url.replace(/^\.\//, "")}`;
}

const markdownComponents = {
  h1: ({ children }) => <h3>{children}</h3>,
  img: ({ src, alt, title }) => (
    <img src={noteUrl(src ?? "")} alt={alt} title={title} loading="lazy" />
  ),
  a: ({ href, children }) => <a href={noteUrl(href ?? "")}>{children}</a>,
  table: ({ children }) => (
    <div className="paper-note-table"><table>{children}</table></div>
  ),
};

const demoCategories = [
  {
    number: "01",
    title: "Example Category A",
    description:
      "Temporary description showing how a classification and its explanation will appear on the page.",
    papers: [],
  },
  {
    number: "02",
    title: "Example Category B",
    description:
      "Temporary description showing how papers belonging to another classification will be displayed.",
    papers: [],
  },
  {
    number: "03",
    title: "Example Category C",
    description:
      "Placeholder content for demonstrating the classification page layout.",
    papers: [],
  },
  {
    number: "04",
    title: "Example Category D",
    description:
      "Placeholder category to be replaced once the literature has been reviewed and classified.",
    papers: [],
  },
  {
    number: "05",
    title: "Example Category E",
    description:
      "Temporary demonstration content. This does not represent a final literature classification.",
    papers: [],
  },
];

export default function Classification() {
  return (
    <main className="classification-page">
      <header className="classification-header">
        <p className="section-label">Literature</p>
        <h2>Classification</h2>

        <p className="classification-intro">
          To organize the literature surrounding cellular automata in
          traffic modeling, the papers are grouped according to their
          primary contribution and area of focus.
        </p>
      </header>

      <section className="classification-list">
        {demoCategories.map((category) => (
          <article className="classification-item" key={category.number}>
            <span className="classification-number">
              {category.number}
            </span>

            <div className="classification-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>

              {category.papers.length > 0 && (
                <div className="category-papers">
                  {category.papers.map((paper) => (
                    <a href={paper.href} key={paper.title}>
                      {paper.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <span className="classification-count">
              {category.papers.length}{" "}
              {category.papers.length === 1 ? "paper" : "papers"}
            </span>
          </article>
        ))}
      </section>

      <section className="paper-notes" aria-labelledby="paper-notes-heading">
        <header className="classification-header">
          <p className="section-label">Paper notes</p>
          <h2 id="paper-notes-heading">Detailed Comment/Note</h2>
          <p className="classification-intro">
            Detailed reading notes, figures, and comments for each paper.
          </p>
        </header>
        {paperNotes.map((note) => (
          <details className="paper-note" key={note.filename}>
            <summary>
              <span className="paper-note-number">Paper {note.number}</span>
              <span>{note.title}</span>
            </summary>
            <div className="paper-note-body">
              <a className="paper-note-source" href={`${import.meta.env.BASE_URL}Notes/${encodeURIComponent(note.filename)}`}>
                View Markdown file
              </a>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={markdownComponents}
              >
                {note.markdown}
              </ReactMarkdown>
            </div>
          </details>
        ))}
      </section>
    </main>
  );
}

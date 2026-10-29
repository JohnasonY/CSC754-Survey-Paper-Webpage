import "./classification.css";
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { papers } from "../data/papers";

// Centralized paper lookup
const papersById = new Map(
  papers.map((paper) => [paper.id, paper])
);

const notesBase = `${import.meta.env.BASE_URL}Notes/`;

// Resolve image and hyperlink paths in Markdown
function noteUrl(url) {
  if (!url) return "";

  if (/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(url)) {
    return url;
  }

  return `${notesBase}${url.replace(/^\.\//, "")}`;
}

// Normalize mathematical delimiters
function normalizeMath(markdown) {
  return markdown
    .replace(
      /\\\(([\s\S]*?)\\\)/g,
      (_, math) => `$${math}$`
    )
    .replace(
      /^( *)\\\[([^\n]*?)\\\][ \t]*$/gm,
      (_, indent, math) =>
        `${indent}$$\n${indent}${math.trim()}\n${indent}$$`
    )
    .replace(
      /\\\[([^\n]*?)\\\]/g,
      (_, math) => `$${math.trim()}$`
    );
}

// Markdown renderer
const markdownComponents = {
  h1: ({ children }) => <h3>{children}</h3>,

  img: ({ src, alt, title }) => (
    <img
      src={noteUrl(src ?? "")}
      alt={alt}
      title={title}
      loading="lazy"
    />
  ),

  a: ({ href, children }) => (
    <a href={noteUrl(href ?? "")}>{children}</a>
  ),

  table: ({ children }) => (
    <div className="paper-note-table">
      <table>{children}</table>
    </div>
  ),
};

// Classification categories
// These assignments are examples, not final classifications.
const categories = [
  {
    number: "01",
    title: "Example Category A",
    description:
      "Temporary description showing how a classification and its explanation will appear on the page.",
    paperIds: [1, 2, 3],
  },
  {
    number: "02",
    title: "Example Category B",
    description:
      "Temporary description showing how papers belonging to another classification will be displayed.",
    paperIds: [4, 5],
  },
  {
    number: "03",
    title: "Example Category C",
    description:
      "Placeholder content for demonstrating the classification page layout.",
    paperIds: [],
  },
  {
    number: "04",
    title: "Example Category D",
    description:
      "Placeholder category to be replaced once the literature has been reviewed and classified.",
    paperIds: [],
  },
  {
    number: "05",
    title: "Example Category E",
    description:
      "Temporary demonstration content. This does not represent a final literature classification.",
    paperIds: [],
  },
];

const classifiedCategories = categories.map((category) => ({
  ...category,
  papers: category.paperIds
    .map((id) => papersById.get(id))
    .filter(Boolean),
}));

export default function Classification() {
  const [paperNotes, setPaperNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadNotes() {
      try {
        const manifestResponse = await fetch(
          `${notesBase}index.json`
        );

        if (!manifestResponse.ok) {
          throw new Error("Could not load notes index.");
        }

        const filenames = await manifestResponse.json();

        if (
          !Array.isArray(filenames) ||
          !filenames.every((name) => typeof name === "string")
        ) {
          throw new Error("Invalid notes index.");
        }

        const notes = await Promise.all(
          filenames
            .filter((filename) => filename.endsWith(".md"))
            .map(async (filename) => {
              const response = await fetch(
                `${notesBase}${encodeURIComponent(filename)}`
              );

              if (!response.ok) {
                throw new Error(
                  `Could not load ${filename}`
                );
              }

              const markdown = await response.text();
              const number = parseInt(filename, 10);

              return {
                filename,
                number,
                paper: papersById.get(number),
                title:
                  markdown.match(/^#\s+(.+)$/m)?.[1] ??
                  filename.replace(/\.md$/, ""),
                markdown: normalizeMath(markdown),
              };
            })
        );

        notes.sort((a, b) =>
          a.filename.localeCompare(
            b.filename,
            undefined,
            { numeric: true }
          )
        );

        if (!cancelled) {
          setPaperNotes(notes);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadNotes();

    return () => {
      cancelled = true;
    };
  }, []);

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
        {classifiedCategories.map((category) => (
          <article
            className="classification-item"
            key={category.number}
          >
            <span className="classification-number">
              {category.number}
            </span>

            <div className="classification-content">
              <h3>{category.title}</h3>
              <p>{category.description}</p>

              {category.papers.length > 0 && (
                <div className="category-papers">
                  {category.papers.map((paper) => (
                    <a
                      href={paper.link}
                      key={paper.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {paper.citation}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <span className="classification-count">
              {category.papers.length}{" "}
              {category.papers.length === 1
                ? "paper"
                : "papers"}
            </span>
          </article>
        ))}
      </section>

      <section
        className="paper-notes"
        aria-labelledby="paper-notes-heading"
      >
        <header className="classification-header">
          <p className="section-label">Paper notes</p>
          <h2 id="paper-notes-heading">
            Detailed Comment/Note
          </h2>
          <p className="classification-intro">
            Detailed reading notes, figures, and comments
            for each paper.
          </p>
        </header>

        {loading && <p>Loading paper notes...</p>}

        {error && (
          <p role="alert">
            Unable to load notes: {error}
          </p>
        )}

        {paperNotes.map((note) => (
          <details
            className="paper-note"
            key={note.filename}
            id={`note-${note.number}`}
          >
            <summary>
              <span className="paper-note-number">
                Paper {note.number}
              </span>

              <span>
                {note.paper?.citation ?? note.title}
              </span>
            </summary>

            <div className="paper-note-body">
              <a
                className="paper-note-source"
                href={`${notesBase}${encodeURIComponent(
                  note.filename
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Markdown file
              </a>

              {note.paper && (
                <a
                  className="paper-note-source"
                  href={note.paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Research Paper
                </a>
              )}

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

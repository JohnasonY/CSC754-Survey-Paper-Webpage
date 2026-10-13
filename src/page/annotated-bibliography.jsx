import { bibliography } from "../data/bibliography.js";
import { annotations } from "../data/annotations.js";
import "./annotated-bibliography.css";

const annotationsById = new Map(annotations.map((paper) => [paper.id, paper]));
const placeholder = {
  summary: "Summary to be added.",
  results: ["Key results to be added."],
  relevance: "Relevance to be added.",
};

export default function AnnotatedBibliography() {
  return (
    <main className="annotated-page">
      <header className="annotated-header">
        <div>
          <p className="section-label">Literature</p>
          <h2>Annotated Bibliography</h2>
        </div>
        <p className="paper-count">{bibliography.length} papers</p>
      </header>

      <p className="annotated-description">
        Notes on cellular automata in traffic modeling.
      </p>

      <section className="annotation-list" aria-label="Annotated papers">
        {bibliography.map((paper, index) => {
          const id = index + 1;
          const notes = annotationsById.get(id) ?? placeholder;

          return (
            <article className="annotation" id={`paper-${id}`} key={id}>
              <span className="annotation-number">
                {String(id).padStart(2, "0")}
              </span>

              <div className="annotation-content">
                <div className="annotation-topline">
                  <p className="annotation-citation">{paper.APA}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                    aria-label={`View paper ${id}`}
                  >
                    View paper <span aria-hidden="true">&#8599;</span>
                  </a>
                </div>

                <div className="annotation-notes">
                  <div className="annotation-summary">
                    <h3>Summary</h3>
                    <p>{notes.summary}</p>
                  </div>

                  <div>
                    <h3>Key Results</h3>
                    <ul>
                      {notes.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3>Relevance</h3>
                    <p>{notes.relevance}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

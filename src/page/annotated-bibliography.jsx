import "./annotated-bibliography.css";
import { papers } from "../data/papers";

export default function AnnotatedBibliography() {
  return (
    <main className="annotated-page">
      <header className="annotated-header">
        <div>
          <p className="section-label">Literature</p>
          <h2>Annotated Bibliography</h2>
        </div>

        <p className="paper-count">{papers.length} papers</p>
      </header>

      <p className="annotated-description">
        Notes on cellular automata in traffic modeling.
      </p>

      <section
        className="annotation-list"
        aria-label="Annotated papers"
      >
        {papers.map((paper, index) => {
          const id = index + 1;

          return (
            <article
              className="annotation"
              id={`paper-${id}`}
              key={paper.id}
            >
              <span className="annotation-number">
                {String(id).padStart(2, "0")}

                {paper.important && (
                  <span
                    className="important-star"
                    title="Important paper"
                    aria-label="Important paper"
                  >
                    ★
                  </span>
                )}
              </span>

              <div className="annotation-content">
                <div className="annotation-topline">
                  <p className="annotation-citation">
                    {paper.citation}
                  </p>

                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                    aria-label={`View paper ${id}`}
                  >
                    View paper{" "}
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                </div>

                <div className="annotation-notes">
                  <div className="annotation-summary">
                    <h3>Summary</h3>
                    <p>{paper.summary}</p>
                  </div>

                  {paper.results?.length > 0 && (
                    <div>
                      <h3>Key Results</h3>
                      <ul>
                        {paper.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

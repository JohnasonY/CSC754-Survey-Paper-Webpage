import "./bibliography.css";

// oxlint-disable-next-line react/only-export-components -- Both bibliography pages share this citation list.
import { papers } from "../data/papers";

export default function Bibliography() {
  return (
    <main className="bibliography-page">
      <header className="bibliography-header">
        <div>
          <p className="section-label">Literature</p>
          <h2>Bibliography</h2>
        </div>

        <p className="paper-count">
          {papers.length} papers
        </p>
      </header>

      <p className="bibliography-description">
        Literature collected for our survey of cellular automata
        and their applications to traffic modeling.
      </p>

      <div className="bibliography-list">
        {papers.map((paper, index) => (
          <article className="bibliography-item" key={index}>
            <span className="paper-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="paper-info">
              <p className="citation">
                {paper.citation}
              </p>
            </div>

            <a
              className="paper-link"
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View paper <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}

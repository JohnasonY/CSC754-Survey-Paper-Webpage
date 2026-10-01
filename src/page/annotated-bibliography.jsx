import "./annotated-bibliography.css";

const annotatedPapers = [
  {
    id: 1,

    // Bibliographic information
    citation: "Paper citation goes here...",
    link: "https://...",

    // Your annotation
    summary:
      "Temporary annotation summarizing the purpose and approach of the paper.",

    result:
      "Temporary note describing the paper's primary result or contribution.",

    relevance:
      "Temporary note explaining why this paper is relevant to our survey.",
  },

  {
    id: 2,
    citation: "Another paper citation goes here...",
    link: "https://...",
    summary: "Temporary summary.",
    result: "Temporary key result.",
    relevance: "Temporary relevance note.",
  },
];

export default function AnnotatedBibliography() {
  return (
    <main className="annotated-page">
      <header className="annotated-header">
        <p className="section-label">Literature</p>
        <h2>Annotated Bibliography</h2>

        <p>
          Selected literature with notes summarizing each paper's
          methods, results, and relevance to our survey.
        </p>
      </header>

      <section className="annotation-list">
        {annotatedPapers.map((paper, index) => (
          <article className="annotation" key={paper.id}>
            <span className="annotation-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="annotation-content">
              <p className="annotation-citation">
                {paper.citation}
              </p>

              <div className="annotation-notes">
                <div>
                  <h3>Summary</h3>
                  <p>{paper.summary}</p>
                </div>

                <div>
                  <h3>Key Result</h3>
                  <p>{paper.result}</p>
                </div>

                <div>
                  <h3>Relevance</h3>
                  <p>{paper.relevance}</p>
                </div>
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-link"
              >
                View paper ↗
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
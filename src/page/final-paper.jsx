import "./final-paper.css";

const finalPaperPdf = "/CSC754-Final-Paper.pdf";

const paperAvailable = false;

export default function FinalPaper() {
  return (
    <main className="final-paper-page">
      <header className="final-paper-header">
        <p className="section-label">Final Paper</p>

        <h2>Cellular Automata in Traffic Modeling</h2>

        <p className="final-paper-description">
          Our final survey paper examining the development, methods,
          applications, and results of cellular automata approaches to
          traffic modeling.
        </p>
      </header>

      <section className="paper-info">
        <div className="paper-detail">
          <span className="detail-label">Authors</span>
          <p>Brendan Coughlan & Jiaxing Rong</p>
        </div>

        <div className="paper-detail">
          <span className="detail-label">Course</span>
          <p>CSC 754</p>
        </div>

        <div className="paper-detail">
          <span className="detail-label">Due</span>
          <p>December 10</p>
        </div>
      </section>

      <section className="paper-download">
        <div>
          <p className="section-label">Paper</p>
          <h3>Final Survey</h3>

          {paperAvailable ? (
            <p>
              The completed survey paper is available to view or
              download below.
            </p>
          ) : (
            <p>
              The final survey paper will be posted here when
              completed.
            </p>
          )}
        </div>

        {paperAvailable ? (
          <div className="paper-actions">
            <a
              href={finalPaperPdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              View paper ↗
            </a>

            <a href={finalPaperPdf} download>
              Download PDF ↓
            </a>
          </div>
        ) : (
          <span className="coming-soon">Coming soon</span>
        )}
      </section>
    </main>
  );
}
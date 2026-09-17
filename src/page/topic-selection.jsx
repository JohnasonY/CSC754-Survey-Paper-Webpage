import "./topic-selection.css";

const topicSelectionPdf = "/CSC 754 Lit Review Brief Overview.pdf";

function TopicSelection({ milestone }) {
  return (
    <article className="milestone-page">
      <section className="page-section">
        <h2>
          <img className="pdf-icon" src="/PDF_file_icon.svg" alt="" />
          <a href={topicSelectionPdf} download>
            topic-selection.pdf
          </a>
        </h2>
      </section>

      <section className="page-section pdf-preview-section">
        <h2>Preview</h2>
        <iframe
          className="pdf-preview"
          src={topicSelectionPdf}
          title="Topic Selection PDF Preview"
        />
      </section>
    </article>
  );
}

export default TopicSelection;

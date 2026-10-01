import "./presentation.css";

const presentationPdf = "./Test.pdf";

const paperAvailable = false;

export default function Presentation()
{
    return (
        <main className="presentation-page">
            <header className="presentation-header">
                <p className="section-label">Presentation</p>
                <h2>Presentation Slides</h2>

                <p className="presentation-description">
                    Presentation of our literature review on cellular automata
                    and their applications in traffic modeling.
                </p>
            </header>

            <section className="presentation-info">
                <div className="presentation-detail">
                    <span className="detail-label">Presenters</span>
                    <p>Brendan Coughlan & Jiaxing Rong</p>
                </div>

                <div className="presentation-detail">
                    <span className="detail-label">Presentation Dates</span>
                    <p>November 12 & 19</p>
                </div>

                <div className="presentation-detail">
                    <span className="detail-label">Topic</span>
                    <p>Cellular Automata in Traffic Modeling</p>
                </div>
            </section>

            <section className="slides-section">
                <div>
                    <p className="section-label">Slides</p>
                    <h3>Presentation Deck</h3>

                    <p>
                        The presentation slides will be available here when
                        completed.
                    </p>
                </div>

                {paperAvailable ? (
                    <div className="slide-actions">
                        <a
                            href={presentationPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View slides ↗
                        </a>

                        <a href={presentationPdf} download>
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
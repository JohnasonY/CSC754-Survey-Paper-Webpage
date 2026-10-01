import "./classification.css";

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
    </main>
  );
}
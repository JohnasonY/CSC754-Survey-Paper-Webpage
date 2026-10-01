import "./overview.css";

const milestones = [
  {
    title: "Topic Selection",
    date: "Sep 17",
    status: "complete",
    href: "#/topic-selection",
  },
  {
    title: "Bibliography",
    date: "Oct 1",
    status: "current",
    href: "#/bibliography",
  },
  {
    title: "Annotated Bibliography",
    date: "Oct 15",
    status: "upcoming",
    href: "#/annotated-bibliography",
  },
  {
    title: "Classification",
    date: "Oct 29",
    status: "upcoming",
    href: "#/detailed-comments-and-classification",
  },
  {
    title: "Presentation",
    date: "Nov 12 & 19",
    status: "upcoming",
    href: "#/presentation-slides",
  },
  {
    title: "Final Paper",
    date: "Dec 10",
    status: "upcoming",
    href: "#/final-paper",
  },
];

export default function Overview() {
  return (
    <div className="overview">
      <section className="overview-content">
        <p className="section-label">Overview</p>

        <h2>Cellular Automata in Traffic Modeling</h2>

        <div className="overview-text">
          <p>
            Cellular automata (CA) are discrete models consisting of an
            array or grid of cells. The cells can be arranged in any
            number of dimensions, but are typically arranged in 1D or
            2D. Each cell within the system can be in one of a finite
            number of states. A group of cells, typically adjacent
            cells, is referred to as a neighborhood. The model creates
            a new generation of cells, incrementing the timestep, based
            on a set of rules. These rules tend to take into account
            the state of the current cell and the states of its
            neighboring cells.
          </p>

          <p>
            A popular example of a cellular automaton is Conway's Game
            of Life. This program takes place on a 2D grid of infinite
            width and height, with each cell representing one of two
            states: live or dead. The rules for each generation of the
            game are the following:
          </p>

          <ul>
            <li>
              Any live cell with fewer than two live neighbors dies.
            </li>
            <li>
              Any live cell with two or three live neighbors keeps
              living.
            </li>
            <li>
              Any live cell with more than three live neighbors dies.
            </li>
            <li>
              Any dead cell with exactly three live neighbors becomes
              alive.
            </li>
          </ul>

          <p>
            Despite the simplicity of these rules, they can produce
            complex patterns and behaviors over many generations. This
            demonstrates how cellular automata can model complex
            systems through relatively simple interactions between
            neighboring cells.
          </p>

          <p>
            The simple rules used in cellular automata can produce
            complex behaviors, making CA useful for modeling real-world
            systems. One application of cellular automata is traffic
            modeling, where cells can represent sections of a roadway
            and their states can represent the presence or movement of
            vehicles. By defining rules that control how vehicles
            interact and move between cells, cellular automata can be
            used to simulate traffic flow and study behaviors such as
            congestion and traffic disruptions. This application of
            cellular automata provides the focus for the following
            literature review.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <p className="section-label">Project</p>
        <h2>Timeline</h2>

        <div className="timeline">
          <div className="timeline-line" />

          {milestones.map((milestone) => (
            <a
              href={milestone.href}
              className={`timeline-item ${milestone.status}`}
              key={milestone.title}
            >
              <div className="timeline-dot" />

              <div className="timeline-content">
                <h3>{milestone.title}</h3>
                <p>{milestone.date}</p>

                {milestone.status === "complete" && (
                  <span>Complete</span>
                )}

                {milestone.status === "current" && (
                  <span>Current</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
import "./annotated-bibliography.css";


const annotatedPapers = [
  {
    id: 1,
    citation: "Biham et al. (1992) - Self-organization and a dynamical transition in traffic-flow models",
    link: "https://arxiv.org/abs/cond-mat/9206001",
    summary:
      "This study investigates a two-dimensional cellular automaton model in which vehicles move according to simple local rules. It examines self-organization and the transition between moving and congested traffic states, demonstrating how local vehicle interactions can produce large-scale traffic patterns. A limitation is that the simplified model does not capture all the behavioral details of real highway traffic.",
  },
  {
    id: 2,
    citation: "Benjamin et al. (1996) - Cellular automata models of traffic flow along a highway containing a junction",
    link: "https://arxiv.org/abs/cond-mat/9605157",
    summary:
      "This paper explores extensions of basic traffic cellular automata models, particularly slow-to-start behavior and the effects of a highway junction. It investigates how vehicle movement rules influence queue formation and junction efficiency, showing how cellular automata can represent both driver behavior and infrastructure-related congestion. Its findings depend on the simplified junction and driving rules studied.",
  },
  {
    id: 3,
    citation: "Eisenblätter et al. (1997) - Jamming transition in a cellular automaton model for traffic flow",
    link: "https://arxiv.org/abs/cond-mat/9706041",
    summary:
      "This paper examines the transition between free-flowing and congested traffic in a cellular automaton framework. It contributes to understanding how traffic density and vehicle interactions influence congestion and traffic flow regimes. Its primary contribution is theoretical rather than the direct validation of a practical road-network simulation.",
  },
  {
    id: 4,
    citation: "Barlovic et al. (1998) - Metastable states in cellular automata for traffic flow",
    link: "https://arxiv.org/abs/cond-mat/9804170",
    summary:
      "This study investigates metastable traffic states using a cellular automaton model. It explains how apparently stable traffic flow can persist under certain conditions but break down when disturbed, helping clarify the onset of congestion. The work highlights the limitations of models that distinguish only between free-flowing and jammed traffic, although its scope is primarily theoretical.",
  },
  {
    id: 5,
    citation: "Chowdhury et al. (1999) - Spatio-temporal organization of vehicles in a cellular automata model of traffic with 'slow-to-start' rule",
    link: "https://arxiv.org/abs/cond-mat/9812148",
    summary:
      "This paper compares a slow-to-start cellular automaton model with the standard Nagel–Schreckenberg framework. It examines vehicle headways, jam sizes, and spatial and temporal traffic patterns, demonstrating how small changes in local transition rules can significantly affect collective traffic behavior. The findings emphasize the importance of driver response and acceleration behavior but remain dependent on the models' assumptions.",
  },
  {
    id: 6,
    citation: "Esser and Schreckenberg (1997) - Microscopic simulation of urban traffic based on cellular automata",
    link: "https://www.researchgate.net/publication/2584087_Microscopic_Simulation_Of_Urban_Traffic_Based_On_Cellular_Automata",
    summary:
      "This paper applies cellular automata to microscopic urban traffic simulation, connecting individual vehicle movement rules with interactions across an urban road network. It demonstrates the practical appeal and scalability of cellular automata for city traffic modeling. However, assumptions about roads, intersections, and vehicle movements may limit the realism of the simulated network.",
  },
  {
    id: 7,
    citation: "Brockfeld et al. (2001) - Optimizing traffic lights in a cellular automaton model for city traffic",
    link: "https://arxiv.org/abs/cond-mat/0107056",
    summary:
      "This study investigates traffic-light optimization using a cellular automaton model of urban traffic. It demonstrates how simulation can evaluate traffic-control strategies and their effects on network performance, extending cellular automata from traffic-flow description to operational decision-making. The effectiveness of the strategies depends on the modeled network, signal rules, and performance measures.",
  },
  {
    id: 8,
    citation: "Diedrich et al. (2000) - Effect of on- and off-ramps in cellular automata models for traffic flow",
    link: "https://arxiv.org/abs/cond-mat/0001196",
    summary:
      "This paper examines how highway entry and exit ramps influence traffic dynamics in cellular automaton models. By incorporating merging and diverging movements, it provides a more representative description of highway traffic and localized congestion. Its conclusions depend on how ramp interactions and vehicle entry and exit are implemented.",
  },
  {
    id: 9,
    citation: "Knospe et al. (2000) - Towards a realistic microscopic description of highway traffic",
    link: "https://arxiv.org/abs/cond-mat/0012204",
    summary:
      "This paper develops a more realistic microscopic cellular automaton description of highway traffic by representing vehicle behavior in greater detail than basic models. It helps explain how improved driving rules can reproduce observed traffic phenomena and provides a foundation for later multi-lane traffic models. A central challenge is balancing behavioral realism, computational simplicity, and empirical accuracy.",
  },
  {
    id: 10,
    citation: "Knospe et al. (2002) - A realistic two-lane traffic model for highway traffic",
    link: "https://arxiv.org/abs/cond-mat/0203346",
    summary:
      "This study extends a realistic microscopic cellular automaton framework to two-lane highway traffic. It investigates lane usage, lane-changing behavior, and synchronization between lanes, demonstrating how cellular automata can represent interactions beyond a single lane. Its scope remains narrower than a complete multi-lane road-network model with diverse road users and infrastructure.",
  },
  {
    id: 11,
    citation: "Knospe et al. (2004) - An empirical test for cellular automaton models of traffic flow",
    link: "https://arxiv.org/abs/cond-mat/0404710",
    summary:
      "This paper evaluates several cellular automaton traffic models using a microscopic test scenario motivated by empirical single-vehicle data. It distinguishes models that reproduce traffic patterns qualitatively from those that match macroscopic observations and microscopic measurements. The study emphasizes the importance of empirical validation, although its conclusions depend on the selected test scenario and evaluation measures.",
  },
  {
    id: 12,
    citation: "Gershenson and Rosenblueth (2009) - Modeling self-organizing traffic lights with elementary cellular automata",
    link: "https://arxiv.org/abs/0907.1925",
    summary:
      "This paper investigates self-organizing traffic-light control using elementary cellular automata. It presents an alternative to centrally optimized signal timing by emphasizing coordination through simple local rules. The approach is relevant to adaptive traffic management, although its practical effectiveness depends on the traffic scenarios and performance criteria used for evaluation.",
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
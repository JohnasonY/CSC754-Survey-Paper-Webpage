const bibliography = [
  {
    APA: "Barlovic, R., Santen, L., Schadschneider, A., & Schreckenberg, M. (1998). “Metastable states in cellular automata for traffic flow.” ",
    link: "https://arxiv.org/abs/cond-mat/9804170",
  },
  {
    APA: "Barlovic, R., Schadschneider, A., & Schreckenberg, M. (2001). Random walk theory of jamming in a cellular automaton model for traffic flow. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0102519",
  },
  {
    APA: "Benjamin, S. C., Johnson, N. F., & Hui, P. M. (1996). Cellular automata models of traffic flow along a highway containing a junction. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9605157",
  },
];

function Bibliography() {
  return (
    <>
      <h1>Topic: Cellular Automata in Traffic Modeling</h1>
      <ul>
        {bibliography.map((item) => (
          <li key={item.link}>
            <a href={item.link} target="_blank">
              {item.APA}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bibliography;

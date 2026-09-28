const bibliography = [
  {
    APAcitation: "test",
    link: "https://www.google.com/",
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
              {item.APAcitation}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bibliography;

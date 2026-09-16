import { useEffect, useState } from "react";
import "./App.css";
import TopicSelection from "./page/topic-selection.jsx";

const pages = {
  "topic-selection": TopicSelection,
};

const milestones = [
  {
    slug: "topic-selection",
    title: "Topic Selection",
    dueDate: "September 17",
    description:
      "Form a group, select a topic, write a half-page description, and post it on the web page.",
  },
  {
    slug: "bibliography",
    title: "Bibliography",
    dueDate: "October 1",
    description:
      "Find literature bibliography and provide links on the web page.",
  },
  {
    slug: "annotated-bibliography",
    title: "Annotated Bibliography",
    dueDate: "October 15",
    description:
      "Write brief comments on selected papers and identify the main papers to read thoroughly.",
  },
  {
    slug: "detailed-comments-and-classification",
    title: "Detailed Comments and Classification",
    dueDate: "October 29",
    description:
      "Provide detailed comments on thoroughly read papers and classify them.",
  },
  {
    slug: "presentation-slides",
    title: "Presentation Slides",
    dueDate: "November 12 and November 19",
    description: "Develop slides to present the survey in class.",
  },
  {
    slug: "final-paper",
    title: "Final Paper",
    dueDate: "December 10",
    description:
      "Submit the final survey paper with abstract, introduction, terminology, approaches, results, trends, future work, and references.",
  },
];

function getCurrentSlug() {
  return window.location.hash.replace("#/", "");
}

function App() {
  const [currentSlug, setCurrentSlug] = useState(getCurrentSlug);

  useEffect(() => {
    function handleHashChange() {
      setCurrentSlug(getCurrentSlug());
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const selectedMilestone = milestones.find(
    (milestone) => milestone.slug === currentSlug,
  );
  const MilestonePage = pages[currentSlug];

  if (selectedMilestone && MilestonePage) {
    return (
      <main className="app">
        <a className="back-link" href="#/">
          Back to milestones
        </a>
        <MilestonePage milestone={selectedMilestone} />
      </main>
    );
  }

  return (
    <main className="app">
      <header className="page-header">
        <h1>CSC754 Survey Paper</h1>
        <h2>Group Members: Brendan Coughlan, Jiaxing Rong</h2>
      </header>

      <section className="milestones" aria-labelledby="milestones-heading">
        <h2 id="milestones-heading">Project Milestones</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((milestone) => (
                <tr key={milestone.title}>
                  <td>
                    {pages[milestone.slug] ? (
                      <a href={`#/${milestone.slug}`}>{milestone.title}</a>
                    ) : (
                      <a href="#/">{milestone.title}</a>
                    )}
                  </td>
                  <td>{milestone.description}</td>
                  <td>{milestone.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;

import "./header.css";

export default function Header({ currentSlug })
{
  const navItems = [
    { label: "Overview", slug: "", href: "#/" },
    { label: "Literature", slug: "bibliography", href: "#/bibliography" },
    { label: "Annotated Bibliography", slug: "annotated-bibliography", href: "#/annotated-bibliography" },
    {
      label: "Classification",
      slug: "classification",
      href: "#/classification",
    },
    {
      label: "Presentation",
      slug: "presentation",
      href: "#/presentation",
    },
    {
      label: "Final Paper",
      slug: "final-paper",
      href: "#/final-paper",
    },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-top">
          <span>CSC 754</span>
          <span>Literature Review</span>
        </div>

        <div className="header-main">
          <div className="header-title">
            <a href="#/">
              <h1>
                Cellular Automata
                <span>in Traffic Modeling</span>
              </h1>
            </a>
          </div>

          <div className="header-details">
            <p>
              Exploring how discrete cellular systems can model traffic
              flow, congestion, and interactions between vehicles.
            </p>

            <p className="header-authors">
              Brendan Coughlan
              <span>·</span>
              Jiaxing Rong
            </p>
          </div>
        </div>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          {navItems.map((item) =>
          {
            const isActive = currentSlug === item.slug;

            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? "active" : ""}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
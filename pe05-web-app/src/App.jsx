import "./App.css";
import projects from "./projectsData.js";

//reusable child component
function ProjectCard({ title, description, imageUrl }) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img className="project-image" src={imageUrl} alt={`${title} preview`} />
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

//parent component, maps the array into reusable cards
function PortfolioGrid() {
  return (
    <section className="portfolio-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2 id="projects-heading">Projects</h2>
        <p className="section-intro">
          A selection of projects involving mobile development, computer graphics,
          and machine-learning research.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <p className="eyebrow">PERSONAL PROJECT PORTFOLIO</p>
          <h1>Constanza Gómez Acebo</h1>
          <p className="subtitle">Intelligent Systems Engineering Student</p>
          <p className="header-description">
            Exploring software development, computer science, and astronomy through
            hands-on projects.
          </p>
        </div>
      </header>

      <main>
        <PortfolioGrid />
      </main>

      <footer className="site-footer">
        <p>Personal Project Portfolio · IS 312</p>
      </footer>
    </div>
  );
}

export default App;

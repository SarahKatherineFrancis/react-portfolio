import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-2.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Elite Properties Group",
    github: "https://github.com/SarahKatherineFrancis/elite-properties-group",
    demo: "https://warm-capybara-6049ad.netlify.app/",
    problem:
      "Small real-estate teams need a clean, mobile-first way to showcase listings and capture enquiries.",
    solution:
      "Built a responsive React site with property search, reusable cards, and basic on-page SEO. Deployed to Netlify with form handling.",
    result:
      "Sub-2s load on 4G, scalable to 500+ listings, ready to plug into a headless CMS when needed.",
    stack: ["React", "JavaScript", "CSS", "Netlify"],
    status: "live",
    video: "",
    caseStudy: "",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <h5>My Recent Work</h5>
      <h2 id="portfolio-heading">Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({
            id,
            image,
            title,
            github,
            demo,
            problem,
            solution,
            result,
            stack = [],
            status = "live",
            video,
            caseStudy,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={`${title} – preview`} />
              </div>

              <div>
                <h3>{title}</h3>

                <div className="portfolio__meta">
                  <span className="pill pill--live">Live</span>
                  {/* If you have a stack array */}
                  {/* stack.map(t => <span key={t} className="pill">{t}</span>) */}
                  <span className="pill">React</span>
                  <span className="pill">JavaScript</span>
                  <span className="pill">CSS</span>
                  <span className="pill">Netlify</span>
                </div>

                <div className="portfolio__case">
                  <p>
                    <strong>Problem:</strong> Small real-estate teams need a
                    clean, mobile-first way to showcase listings and capture
                    enquiries.
                  </p>
                  <p>
                    <strong>Solution:</strong> Responsive React site with
                    property search, reusable cards, and basic on-page SEO.
                    Deployed to Netlify with form handling.
                  </p>
                  <p>
                    <strong>Result:</strong> Sub-2s load on 4G, scalable to 500+
                    listings; ready to plug into a headless CMS when needed.
                  </p>
                </div>

                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default Portfolio;

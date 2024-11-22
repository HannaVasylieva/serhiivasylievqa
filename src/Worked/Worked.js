import "./Worked.scss";

export const Worked = () => {
  return (
    <section className="worked" id="experience">
      <h1 className="worked__header">experience.</h1>

      <div className="worked__experience">
        <div className="worked__position">
          <h2 className="worked__name">Manual and Automation QA Engineer</h2>
          <span className="worked__place">
            Vially, Dublin, Ireland (Remote) | April 2023 - Present
          </span>
          <p className="worked__description">
            Oversaw the complete SaaS project lifecycle, specializing in manual
            and automated testing to enhance product quality and accessibility.
          </p>

          <ul>
            <li>
              Recognized as a top digital accessibility expert in Ireland for
              2023, contributing to the product's acquisition by an English
              company.
            </li>

            <li>
              Created 80% of project test documentation using TestRail and Jira,
              ensuring comprehensive test coverage and improving defect
              detection by 30%.
            </li>

            <li>
              Implemented automated API testing with Postman, reducing manual
              testing time by 40% and significantly boosting overall project
              efficiency.
            </li>

            <li>
              Conducted accessibility audits for 40+ websites, ensuring
              compliance with WCAG 2.1 standards and improving inclusivity for
              users with disabilities.
            </li>

            <li>
              Converted 200+ PDF files into fully accessible formats, enhancing
              accessibility for 90% of clients and improving user engagement and
              satisfaction.
            </li>
          </ul>
        </div>

        <div className="worked__position">
          <h2 className="worked__name">Software Tester</h2>
          <span className="worked__place">
            Mate Academy, Lviv, Ukraine (Internship) | January 2022 - February
            2023
          </span>
          <p className="worked__description">
            Conducted manual and automated testing across multiple projects,
            focusing on API testing and bug tracking to maintain high-quality
            standards.
          </p>

          <ul>
            <li>
              Developed 400+ test cases, covering regression and ad-hoc testing,
              improving software validation and reducing post-release issues by
              15%.
            </li>

            <li>
              Collaborated with product owners on four projects to align
              requirements, optimize testing strategies, and improve quality
              assurance processes.
            </li>

            <li>
              Managed and tracked 300+ bug reports using Jira, resulting in
              faster bug resolutions and improved software functionality.
            </li>

            <li>
              Automated end-to-end tests with Cypress, improving testing
              efficiency and reducing human error by 25%.
            </li>
          </ul>
        </div>
      </div>

      <div className="worked__skills">
        <img className="worked__skill" src="jira.png" alt="jira" />
        <img className="worked__skill" src="SE.png" alt="jira" />
        <img className="worked__skill" src="cyprus.png" alt="jira" />
        <img className="worked__skill" src="postman.png" alt="jira" />
        <img className="worked__skill" src="js.png" alt="jira" />
        <img className="worked__skill" src="api.png" alt="jira" />
        <img className="worked__skill" src="code.png" alt="jira" />
        <img className="worked__skill" src="sql.png" alt="jira" />
        <img className="worked__skill" src="wcag.png" alt="jira" />
      </div>
    </section>
  );
};

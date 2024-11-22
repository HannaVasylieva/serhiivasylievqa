import "./Projects.scss";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="projects__header">projects.</h1>

      <div className="projects__content">
        <div className="projects__project">
          <a
            className="projects__link"
            href="https://github.com/Serhii-Vasylievv/UserFlowTesting_POM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="project1.jpg"
              className="projects__img"
              alt="Cypress project"
            />
            <h2 className="projects__name">Cypress project</h2>
          </a>

          <p className="projects__description">
            This project emphasizes key aspects of user experience, such as user
            registration and login, user data modification, and creating,
            editing, and deleting articles. It also includes user interaction
            features. Testing encompasses both positive and negative test cases.
            The Page Object Model (POM) was implemented to improve code
            readability and simplify future modifications. Compass was utilized
            alongside Cypress tests to manage and validate data integration
            seamlessly during test execution.
          </p>
        </div>

        <div className="projects__project">
          <a
            className="projects__link"
            href="https://github.com/Serhii-Vasylievv/SeleniumProject_POM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="project2.jpg"
              className="projects__img"
              alt="Selenium project"
            />
            <h2 className="projects__name">Selenium project</h2>
          </a>

          <p className="projects__description">
            This project is an automation framework for testing a web page using
            Selenium with JavaScript. It focuses on key functionalities,
            including: User login and navigation. Validation of input fields and
            buttons. Interaction with page elements. Assertions on dynamic
            content. The Page Object Model (POM) design pattern is used to
            enhance code readability and facilitate easier modifications. Each
            element interacted with by the code has been assigned a relevant
            identifier.
          </p>
        </div>
      </div>
    </section>
  );
};

import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <p className="header__logo">Serhii Vasyliev</p>

      <nav className="header__nav">
        <a className="header__link" href="#about">
          About
        </a>
        <a className="header__link" href="#projects">
          Projects
        </a>
        <a className="header__link" href="#experience">
          Experience
        </a>
        <a className="header__link" href="#contact">
          Contact
        </a>
      </nav>

      <a
        href="https://www.linkedin.com/in/serhii-vasyliev-08477a262/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="header__linkedin"
          src="icon-linkedin.png"
          alt="linkedIn"
        />
      </a>
    </header>
  );
};

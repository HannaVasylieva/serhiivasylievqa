import "./Contacts.scss";

export const Contacts = () => {
  return (
    <section className="contacts" id="contact">
      <h1 className="contacts__header">contact.</h1>

      <div className="contacts__block">
        <img className="contacts__img" src="world.gif" alt="contacts" />

        <div className="contacts__info">
          <div className="contacts__item">
            <img className="contacts__icon" src="email.png" alt="email-icon" />
            <a
              className="contacts__label"
              href="mailto:serhiivasylievqa@gmail.com"
            >
              serhiivasylievqa@gmail.com
            </a>
          </div>

          <div className="contacts__item">
            <img
              className="contacts__icon"
              src="contact.png"
              alt="telephone-icon"
            />
            <a className="contacts__label" href="tel:+15872538754" id="tel">
              +1 587 253 8754
            </a>
          </div>

          <div className="contacts__item">
            <img
              className="contacts__icon"
              src="icon-linkedin.png"
              alt="linkedin-icon"
            />
            <a
              className="contacts__label"
              href="https://www.linkedin.com/in/serhii-vasyliev-08477a262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

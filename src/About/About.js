import "./About.scss";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <h1 className="about__header">about.</h1>

        <p className="about__text">
          Highly skilled QA Specialist with extensive experience in manual and
          automated testing, specializing in API testing, digital accessibility,
          and SaaS project lifecycle management. Proven ability to develop and
          execute comprehensive test plans, streamline processes through
          automation, and lead cross-functional teams to deliver high-quality,
          inclusive software products. Recognized for expertise in accessibility
          testing, with a strong track record of improving product quality and
          efficiency.
        </p>
      </div>
      <img className="about__img" src="achievements.png" alt="achievements" />
    </section>
  );
};

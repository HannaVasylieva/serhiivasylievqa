import "./Accessibility.scss";

export const Accessibility = () => {
  return (
    <section className="accessibility">
      <h1 className="accessibility__title">accessibility.</h1>
      <h2 className="accessibility__subtitle">Why Websites Should Be Accessible? </h2>

      <article className="accessibility__content">
        <p>
          In an increasingly digital world, where the internet serves as a gateway to information,
          services, and opportunities, ensuring that websites are accessible to all individuals,
          regardless of ability or disability, is not just a matter of convenience - it's a
          fundamental necessity. According to statistics from the World Health Organization (WHO)
          and the International Telecommunication Union (ITU), approximately 15% of the world's
          population lives with some form of disability. This significant portion of the population
          must not be excluded from the online realm, which has become an integral part of daily
          life for many.
        </p>

        <p>
          The journey towards web accessibility traces back to the inception of the internet itself.
          As people began utilizing the internet in the late 1960s and early 1970s through ARPANET,
          a precursor to the modern internet developed by the United States Department of Defense's
          Advanced Research Projects Agency (ARPA), the need for inclusivity gradually emerged.
          However, it wasn't until the late 1990s and early 2000s that accessibility testing,
          particularly concerning the web, gained prominence with the development of guidelines and
          standards by the World Wide Web Consortium (W3C).
        </p>

        <p>
          The Web Content Accessibility Guidelines (WCAG), introduced by the W3C in 1999, have since
          undergone several iterations, with each version aiming to enhance accessibility standards
          for web content. The evolution of these guidelines underscores the ongoing commitment to
          making the digital landscape more inclusive.
        </p>

        <h2 className="accessibility__subtitle">Reasons to Prioritize Accessibility</h2>
        <ul className="accessibility__list">
          <li>
            <strong>Inclusivity:</strong> At its core, web accessibility is about inclusivity -
            ensuring that everyone, regardless of their abilities, can access and utilize online
            content.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Many countries have enacted laws and regulations
            mandating web accessibility to uphold the rights of individuals with disabilities.
          </li>
          <li>
            <strong>Ethical Responsibility:</strong> Ensuring web accessibility is an ethical
            imperative, upholding principles of equality and fairness.
          </li>
          <li>
            <strong>Business Benefits:</strong> Accessibility expands business reach to a broader
            audience, including individuals with disabilities, fostering satisfaction and loyalty.
          </li>
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Accessibility features improve both
            usability and SEO performance, enhancing a website's visibility.
          </li>
          <li>
            <strong>Future-Proofing:</strong> Designing with accessibility in mind ensures
            adaptability to evolving technologies and user needs.
          </li>
        </ul>

        <p>
          In conclusion, ensuring web accessibility is not just a matter of compliance or
          convenience - it's a fundamental aspect of creating a more inclusive and equitable digital
          environment. By prioritizing accessibility, websites uphold the principles of inclusivity,
          legality, ethics, and business acumen, ultimately fostering a more accessible and
          welcoming online landscape for all.
        </p>
      </article>
    </section>
  );
};
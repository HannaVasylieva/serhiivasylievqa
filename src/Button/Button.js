import "./Button.scss";

export const Button = () => {
  return (
    <section id="intro">
      <div id="intro-content" className="center-content">
        <div className="center-content-inner">
          <div className="content-section content-section-margin">
            <div className="content-section-grid clearfix">
              <a
                href="https://docs.google.com/document/d/1ibLuOSZFnhUf5YxhIaPewyTDXRjOOqExOVTRjexA9SQ/edit?tab=t.0#heading=h.1o59wzqlbdcl"
                className="button nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bottom"></div>

                <div className="top">
                  <div className="label">Resume</div>

                  <div className="button-border button-border-left"></div>
                  <div className="button-border button-border-top"></div>
                  <div className="button-border button-border-right"></div>
                  <div className="button-border button-border-bottom"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

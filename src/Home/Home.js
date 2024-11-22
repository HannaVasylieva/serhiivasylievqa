import { Button } from "../Button/Button";
import "./Home.scss";

export const Home = () => {
  return (
    <section className="home">
      <div className="home__top">
        <div className="home__content">
          <p className="home__main">Hello, I'm Serhii</p>
          <span className="home__secondary">
            Manual and Automation QA Engineer
          </span>
          <p className="home__main">Based in Canada</p>
        </div>

        <div className="home__photo">
          <img className="home__img" src="serhii3.jpg" alt="myPhoto" />
          <svg className="home__text" viewBox="0 0 500 500">
            <path
              id="text-path"
              d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
              stroke="none"
              fill="none"
            />
            <text>
              <textPath href="#text-path" startOffset="26%" textAnchor="middle">
                Top accessibility tester in Ireland in 2023
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <Button />
    </section>
  );
};

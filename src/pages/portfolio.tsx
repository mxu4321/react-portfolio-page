// ❄️ import images for projects
import Image from "next/image";
import codeQuizImg from "../assets/images/projects/code_quiz.gif";
import weatherImg from "../assets/images/projects/weather_dashboard_screenshot.png";
import ballerImg from "../assets/images/projects/stat_a_baller.gif";
import craftImg from "../assets/images/projects/craft_but_not_least.png";

export default function Portfolio() {
  return (
    <section id="portfolio-page">
      {/* -------- code quiz ----- */}
      <div className="grid grid-cols-2 gap-0">
        <div className="pl-10 ml-10">
          <Image
            src={codeQuizImg}
            alt="code quiz"
            className="object-cover h-48 w-80 rounded-lg"
          />
        </div>
        <div>
          <p className="project-description">
            A web based application that allows users to take a timed quiz
            on JavaScript fundamentals that stores high scores.
          </p>
        </div>
      </div>

      {/* -------- weather dashboard ----- */}
      <div className="grid grid-cols-2 gap-0">
        <div className="pl-10 ml-10">
          <Image
            src={weatherImg}
            alt="weather dashboard"
            className="object-cover h-48 w-80 rounded-lg"
          />
        </div>
        <div>
          <p className="project-description">
            A 3rd-party api based application that allows users to search for weather forecast in different cities.
          </p>
        </div>
      </div>

      {/* -------- nba api----- */}
      <div className="grid grid-cols-2 gap-0">
        <div className="pl-10 ml-10">
          <Image
            src={ballerImg}
            alt="stat a baller"
            className="object-cover h-48 w-80 rounded-lg"
          />
        </div>
        <div>
          <p className="project-description">
            Stat a Baller is a web application that provides users with detailed
            statistics for NBA players.
          </p>
        </div>
      </div>

      {/* -------- craft site ----- */}
      <div className="grid grid-cols-2 gap-0">
        <div className="pl-10 ml-10">
          <Image
            src={craftImg}
            alt="craft but not least"
            className="object-cover h-48 w-80 rounded-lg"
          />
        </div>

        <div>
          <p className="project-description">
            Craft But Not Least is a group project which is a full-stack web
            application that allows users to create an account, login, create
            listings for and purchase or trade craft supplies and tools directly
            from other users.
          </p>
        </div>
      </div>
    </section>
  );
}

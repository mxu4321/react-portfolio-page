// ❄️ import images for projects
import Image from "next/image";
import codeQuizImg from "../assets/images/projects/code_quiz.gif";
import weatherImg from "../assets/images/projects/weather_dashboard_screenshot.png";
import ballerImg from "../assets/images/projects/stat_a_baller.gif";
import craftImg from "../assets/images/projects/craft_but_not_least.png";
import petPalImg from "../assets/images/projects/petpal.gif";

export default function Portfolio() {
  return (
    <section id="portfolio-page">
      {/* -------- header ----- */}
      <div>
        <h3 id="portfolio-page-header" className="flex justify-center text-3xl">
          {" "}
          Work Samples
        </h3>
      </div>

      {/* -------- code quiz ----- */}
      <div className="project-block grid grid-cols-2">
        <div className="project-img">
          <a href="https://mxu4321.github.io/module4_challenge/">
            {" "}
            <Image
              src={codeQuizImg}
              alt="code quiz"
              className="object-cover h-48 w-80 rounded-lg"
            />
          </a>
        </div>
        <div>
          <p className="project-description">
            Code Quiz is a web based application that allows users to take a timed quiz on
            JavaScript fundamentals that stores high scores.
          </p>
        </div>
      </div>

      {/* -------- weather dashboard ----- */}
      <div className="project-block grid grid-cols-2">
        <div className="project-img">
          <a href="https://mxu4321.github.io/Weather_Dashboard/">
            <Image
              src={weatherImg}
              alt="weather dashboard"
              className="object-cover h-48 w-80 rounded-lg"
            />
          </a>
        </div>
        <div>
          <p className="project-description">
            Weather dashboard is a 3rd-party api based application that allows users to search for
            weather forecast in different cities.
          </p>
        </div>
      </div>

      {/* -------- nba api----- */}
      <div className="project-block grid grid-cols-2">
        <div className="project-img">
          <a href="https://coderchrisdean.github.io/stat-a-baller/">
            <Image
              src={ballerImg}
              alt="stat a baller"
              className="object-cover h-48 w-80 rounded-lg"
            />
          </a>
        </div>
        <div>
          <p className="project-description">
            Stat a Baller is a web application that provides users with detailed
            statistics for NBA players.
          </p>
        </div>
      </div>

      {/* -------- craft site ----- */}
      <div className="project-block grid grid-cols-2">
        <div className="project-img">
          <a href="https://craft-but-not-least.herokuapp.com/">
            <Image
              src={craftImg}
              alt="craft but not least"
              className="object-cover h-48 w-80 rounded-lg"
            />
          </a>
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

      {/* -------- pet pal app----- */}
      <div className="project-block grid grid-cols-2">
        <div className="project-img">
          <a href="https://petpal.herokuapp.com/">
            <Image
              src={petPalImg}
              alt="pet pal"
              className="object-cover h-48 w-80 rounded-lg"
            />
          </a>
        </div>
        <div>
          <p className="project-description">
          Pet Pal is a pet sitting web application that allows clients to set up a profile, browse various pet sitting services, schedule a trusted pet-sitter within their community, and pay via a secure payment system.
          </p>
        </div>
      </div>
    </section>
  );
}

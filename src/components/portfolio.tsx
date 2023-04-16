import Link from "next/link";
// ❄️ import images for projects
import Image from "next/image";
import codeQuizImg from "../assets/images/projects/codez-quiz.gif";
import weatherImg from "../assets/images/projects/weather_dashboard_screenshot.png";
import ballerImg from "../assets/images/projects/stat_a_baller.gif";
import craftImg from "../assets/images/projects/craft_but_not_least.png";

export default function Portfolio() {
  return (
    <section>
      {/* -------- code quiz ----- */}
      <div>
        <div>
            <div>
                {/* <Image src={codeQuizImg} alt="code quiz" /> */}
            </div>
        </div>
      </div>

      {/* -------- weather dashboard ----- */}
      {/* <div></div> */}

      {/* -------- nba api----- */}
      {/* <div></div> */}

      {/* -------- craft site ----- */}
      {/* <div></div> */}
    </section>
  );
}

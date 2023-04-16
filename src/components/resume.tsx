// import myResume from "../assets/docs/MengxueXu_Resume_2023.pdf";
import Link from "next/link";
import { BsCloudDownload } from "react-icons/bs";
// ❄️ import 3 icons for skills: frontend/backend/database
import { CgBrowser } from "react-icons/cg";
import { RiStackshareLine } from "react-icons/ri";
import { BsDatabaseFillGear } from "react-icons/bs";

export default function Resume() {
  return (
    <div>
      <section>
        <div className="flex justify-center">
          {/* ------ title ------ */}
          <div>
            <span id="resume-page-header"> {/* <h1>Resume</h1> */}</span>
          </div>
          {/* ------ Download ------ */}
          <div id="resume-page-download">
            <p className="py-5">
              {/* <a href={myResume}> */}
              To download my resume:
              <span className="mx-auto float-right ml-2">
                <BsCloudDownload />
              </span>
              {/* </a> */}
            </p>
          </div>
        </div>
      </section>
      {/* ------ skills ------ */}
      <section id="resume-page-skills" className="flex justify-center">
        <div className="grid grid-cols-3 gap-20">
          {/* front-end */}
          <div className="border-solid rounded-lg border-2 p-2">
            <p className="column-title"><CgBrowser className="float-left mr-2"/>Font-End Tech</p>
            <p className="flex justify-center">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            </p>
          </div>
          {/* back-end */}
          <div className="border-solid rounded-lg border-2 p-2">
            <p className="column-title"><RiStackshareLine className="float-left mr-2"/>Back-End Tech</p>
            <p className="flex justify-center">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>MVC</li>
              </ul>
            </p>
          </div>
          {/* database */}
          <div className="border-solid rounded-lg border-2 p-2">
            <p className="column-title"><BsDatabaseFillGear className="float-left mr-2"/>Database </p>      
            <p className="flex justify-center">
              <ul>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

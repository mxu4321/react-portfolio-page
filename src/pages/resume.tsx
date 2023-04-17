import Link from "next/link";
import { BsCloudDownload } from "react-icons/bs";
// ❄️ import 3 icons for skills: frontend/backend/database
import { CgBrowser } from "react-icons/cg";
import { RiStackshareLine } from "react-icons/ri";
import { BsDatabaseFillGear } from "react-icons/bs";

export default function Resume() {
  return (
    <div>
      <section className="resume-page">
        <div className="flex justify-center">
          {/* ------ Download ------ */}
          <div id="resume-page-download">
            <h4 className="py-5 text-xl">
              To download my full resume:
              <span className="mx-auto float-right ml-2">
                <a href="/MengxueXu_Resume_2023.pdf">
                  <BsCloudDownload />
                </a>
              </span>
            </h4>
          </div>
        </div>
      </section>
      {/* ------ title ------ */}
      <div className="flex justify-center">
        <span id="resume-page-header">
          <h4 className="text-xl py-3">Check out my web development skills:</h4>
        </span>
      </div>
      {/* ------ skills ------ */}

      <section id="resume-page-skills" className="flex justify-center py-5">
        <div className="grid grid-cols-3 gap-20">
          {/* front-end */}
          <div className="border-solid rounded-lg border-2 p-2">
            <p className="column-title">
              <CgBrowser className="float-left mr-2" />
              Font-End Tech
            </p>
            <div className="flex justify-center">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          {/* back-end */}
          <div className="border-solid rounded-lg border-2 p-2">
            <p className="column-title">
              <RiStackshareLine className="float-left mr-2" />
              Back-End Tech
            </p>
            <div className="flex justify-center">
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>MVC</li>
              </ul>
            </div>
          </div>
          {/* database */}
          <div className="border-solid rounded-lg border-2 p-2">
            <p className="column-title">
              <BsDatabaseFillGear className="float-left mr-2" />
              Database{" "}
            </p>
            <div className="flex justify-center">
              <ul>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

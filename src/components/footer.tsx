// ❄️ import icon for footer: github/linkedin/email
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <section>
      <footer className="w-full py-4 absolute bottom-0">
        <div className="flex justify-center">
          <ul className="flex items-center text-3xl">
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}

